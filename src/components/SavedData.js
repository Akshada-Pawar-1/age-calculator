import React, { useState, useEffect } from "react";
import CalculateAge from "./CalculateAge"; // Import CalculateAge component
import checkBirthdays from "./CheckBirthDay"; // Import checkBirthdays function

export default function SavedData({ savedData }) {
  const [birthdaysToday, setBirthdaysToday] = useState([]);

  useEffect(() => {
    const updateBirthdays = () => {
      const todayBirthdays = checkBirthdays({ savedData });
      setBirthdaysToday(todayBirthdays);
    };

    // Update birthdays initially and then every day at midnight
    updateBirthdays();
    const intervalId = setInterval(updateBirthdays, 1000 * 60 * 60 * 24); // Check every 24 hours

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [savedData]);

  return (
    <>
      {savedData.length > 0 && (
        <>
          <h2>Saved data</h2>
          <ul>
            {savedData.map((item, index) => (
              <li key={index}>
                {item.name} - <CalculateAge date={item.date} />{" "}
                {/* Use CalculateAge component */}
              </li>
            ))}
          </ul>
        </>
      )}
      {birthdaysToday.length > 0 && (
        <>
          <h2>Birthdays Today:</h2>
          <ul>
            {birthdaysToday.map((person, index) => (
              <li key={index}>{person.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";

export default function CalculateAge({ date }) {
  const [ageText, setAgeText] = useState("");

  const calculateAgeFromDate = (dob) => {
    const currentDate = new Date();

    let yearsDiff = currentDate.getFullYear() - dob.getFullYear();
    let monthsDiff = currentDate.getMonth() - dob.getMonth();
    let daysDiff = currentDate.getDate() - dob.getDate();

    if (daysDiff < 0) {
      monthsDiff--;
      daysDiff += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    return `${yearsDiff} years ${monthsDiff} months ${daysDiff} days old`;
  };

  useEffect(() => {
    const dob = new Date(date);
    const ageText = calculateAgeFromDate(dob);
    setAgeText(ageText);

    const intervalId = setInterval(() => {
      const ageText = calculateAgeFromDate(dob);
      setAgeText(ageText);
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [date]);

  return <span>{ageText}</span>;
}

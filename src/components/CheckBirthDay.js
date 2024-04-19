export default function checkBirthdays({ savedData }) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  console.log("Current Date:", currentDate); // Debugging output

  const birthdaysToday = savedData.filter((item) => {
    const dob = new Date(item.date);
    const birthMonth = dob.getMonth() + 1;
    const birthDay = dob.getDate();

    console.log("Checking birthday for:", item.name); // Debugging output
    console.log("DOB:", dob); // Debugging output

    return birthMonth === currentMonth && birthDay === currentDay;
  });

  console.log("Birthdays Today:", birthdaysToday); // Debugging output

  return birthdaysToday;
}

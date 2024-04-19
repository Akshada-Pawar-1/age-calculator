import { useRef, useState } from "react";
import Button from "./UI/Button";
import CalculateAge from "./CalculateAge";

export default function Input({ savedData, setSavedData }) {
  const uName = useRef("");
  const uDate = useRef("");
  const [age, setAge] = useState(null);

  const [nameFilled, setNameFilled] = useState(false);
  const [dateFilled, setDateFilled] = useState(false);

  function resetData() {
    uName.current.value = "";
    uDate.current.value = "";
    setAge(null);
    setNameFilled(false);
    setDateFilled(false);
  }

  function saveData() {
    const name = uName.current.value;
    const date = uDate.current.value;
    if (age) {
      setSavedData([...savedData, { name, date }]);
    }
    uName.current.value = "";
    uDate.current.value = "";
    setAge(null);
    setNameFilled(false);
    setDateFilled(false);
  }

  function handleNameChange() {
    const nameFilled = uName.current.value.trim();
    setNameFilled(nameFilled !== "");
  }

  function handleDateChange() {
    const dateFilled = uDate.current.value.trim();
    setDateFilled(dateFilled !== "");
  }

  function calculateAge() {
    const dateStr = uDate.current.value;
    const dateObj = new Date(dateStr);
    const ageText = <CalculateAge date={dateObj} />;
    setAge(ageText);
  }

  return (
    <>
      <h2>Calculate age</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="uName"
        ref={uName}
        onChange={handleNameChange}
      />
      <label htmlFor="date">BirthDate</label>
      <input
        type="date"
        id="date"
        name="uDate"
        ref={uDate}
        onChange={handleDateChange}
      />
      <p>
        <Button onClick={calculateAge} disabled={!nameFilled || !dateFilled}>
          Calculate
        </Button>
        <Button onClick={resetData} disabled={!nameFilled && !dateFilled}>
          Reset
        </Button>
      </p>
      {age !== null && (
        <>
          {age}
          <Button onClick={saveData}>Save</Button>
        </>
      )}
    </>
  );
}

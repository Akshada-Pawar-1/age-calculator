import "./App.css";

import { useState, useEffect } from "react";
import Input from "./components/Input";
import SavedData from "./components/SavedData";

function App() {
  const initialSavedData = JSON.parse(localStorage.getItem("savedData")) || [];
  const [savedData, setSavedData] = useState(initialSavedData);

  useEffect(() => {
    const savedDataFromLocalStorage = localStorage.getItem("savedData");
    if (savedDataFromLocalStorage) {
      setSavedData(JSON.parse(savedDataFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(savedData));
  }, [savedData]);

  return (
    <div className="App">
      <Input savedData={savedData} setSavedData={setSavedData} />
      <SavedData savedData={savedData} />
    </div>
  );
}

export default App;

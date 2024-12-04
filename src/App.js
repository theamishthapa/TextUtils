import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  // const [greenMode, setGreenMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  // const toggleGreenMode = () => {
  //   if (greenMode === "light") {
  //     setGreenMode("green");
  //     document.body.style.backgroundColor = "#06402b";
  //     showAlert("Green Mode has been enabled", "success");
  //   } else {
  //     setGreenMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Green Mode has been disabled", "success");
  //   }
  // };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        // greenMode={greenMode}
        // toggleGreenMode={toggleGreenMode}
      />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below:"
          mode={mode}
          showAlert={showAlert} // passing to textform
          // greenMode={greenMode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

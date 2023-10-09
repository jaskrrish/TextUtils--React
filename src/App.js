import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from "./components/About";
function App() {
  //Whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  //
  // const [clr, setClr] = useState("primary");
  //
  const [alert, setAlert] = useState(null);
  //
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  //
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(42, 45, 48)";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
      document.title="TextUtlis | DarkMode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode has been Disabled", "success");
      document.title="TextUtlis | LightMode"
    }
  };
  //Color Mode
  // const cMode = (clr) => {
  //   if (clr === "red") {
  //     document.body.style.color = "red";
  //     setClr("danger");
  //   } else if (clr === "black") {
  //     document.body.style.color = "grey";
  //     setClr("dark");
  //   } else if (clr === "green") {
  //     document.body.style.color = "green";
  //     setClr("success");
  //   } else if (clr === "def") {
  //     setClr("primary");
  //   }
  // };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        // cMode={cMode}
        // clr={clr}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          // color={clr}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

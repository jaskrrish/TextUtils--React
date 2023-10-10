import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
//React Router DOM
import { BrowserRouter,Route, Routes } from "react-router-dom";
//
function App() {
  //

  //
  //Whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  //
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
      document.title = "TextUtlis | DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode has been Disabled", "success");
      document.title = "TextUtlis | LightMode";
    }
  };
  return (
    <>
        <BrowserRouter>
          <Navbar
              title="TextUtils"
              mode={mode}
              toggleMode={toggleMode}
            />
          <Alert alert={alert} />
          <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}
export default App;

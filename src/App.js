import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./Components/About";

function App() {
  let name = "MD";

  // In JSX, when you enclose text within curly braces {}, it's interpreted as JavaScript expressions, not as HTML markup. So when you assign <h1>MD</h1> to the name variable, it's treated as a string, not HTML markup.

  // let name = "<h1>MD</h>";

  //return ( );:- menas bcz while inside return when we give ; it not looking good and it is not like jsx so that we cover all the thing in ();.

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };

  //to reflect(change) title in every second.
  setInterval(() => {
    document.title = "TextUtils - Is Amazing ";
  }, 2000);
  setInterval(() => {
    document.title = "TextUtils - Download Now ";
  }, 1500);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3d2323";
      showAlert("Enable Dark Mode", "secondary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enable Light Mode", "primary");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    //in jsx must be return a single tag where rap all html and js which is jsx.
    <>
      {/* if you want to add extra thing before render your app js component. */}
      {/* <h1>Hello {name}</h1>
      <nav>
        <li>home</li>
        <li>about</li>
        <li>contact</li>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolorem nam, animi libero repellat reiciendis quisquam, fugit exercitationem, placeat pariatur minima hic non quis recusandae accusantium rem sed ad. Similique.
        </p>
      </nav> */}

      {/* passing as prop */}

      {/* take default prop */}
      {/* <Navbar/> */}
      <Navbar
        title="textUtils4"
        aboutText="About us"
        dark={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="TextForm" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About/> */}
      {/* <Router> */}

      {/* <Routes>
          <Route
            path="/" exact
            element={
              <TextForm heading="TextForm" mode={mode} showAlert={showAlert} />
            }
          /> */}
      {/* <Route path="/about" exact element={<About mode={mode}/>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;

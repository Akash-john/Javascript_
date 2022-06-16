import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  //Dark theme for the Google clone chrome

  return (
    <div className={!darkTheme ? "" : `dark`}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;

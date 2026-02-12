import { useEffect, useState } from "react";
import { slideTo } from "./utils/slide";
import { getCurrentTheme, setDefaultTheme, toggleDarkTheme, type Theme } from "./utils/theme";

function generateLotofLoremIpsums(repeat: number) {
  let output = "";
  const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  for (let i = 0; i < repeat; i++) {
    output += loremipsum;
  };
  return output;
}

const SLIDE_ID = "sample-section";

export default function App() {

  // ------------------------------------------------------------------------------
  // THEME UTILITY
  const [themeLabel, setThemeLabel] = useState<Theme>(getCurrentTheme());
  
  // useEffect is necessary to system's default theme
  useEffect(() => {
    setDefaultTheme();
    setThemeLabel(getCurrentTheme());
  }, []);

  // For the label theme only
  useEffect(() => {
    setThemeLabel(getCurrentTheme());
  }, [themeLabel]);
  const handleToggleTheme = () => {
    toggleDarkTheme();
    setThemeLabel(getCurrentTheme());
  }
  // ------------------------------------------------------------------------------

  return (
    <>
      <div className="flex min-h-screen max-w-screen items-center justify-center text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-900">
        <div className="text-center">
          
          <h1 className="text-2xl font-bold mb-4">Typescript Useful Utilities</h1>
          {/* Slide To (ID) + Offset */}
          <button 
            onClick={() => slideTo(SLIDE_ID, 80)} // You may change the offset for your preference
            className="px-6 py-2 rounded-md bg-blue-600 text-white cursor-pointer"
          >
            Scroll To (Function)
          </button>

          <br/><br/>

          {/* Theme management */}
          <h2>Click to toggle theme</h2>
          <button 
            onClick={handleToggleTheme} // You may change the offset for your preference
            className="px-6 py-2 rounded-md bg-blue-600 text-white cursor-pointer"
          >
            Theme: {themeLabel}
          </button>

        </div>
      </div>

      <div id={SLIDE_ID} className="max-w-7xl mx-auto py-8 bg-neutral-600 text-white">
        {generateLotofLoremIpsums(100)}
      </div>
    </>
  )
}
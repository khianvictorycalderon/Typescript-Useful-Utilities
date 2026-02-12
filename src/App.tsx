import { slideTo } from "./utils/slide";

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

  return (
    <>
      <div className="flex min-h-screen max-w-screen items-center justify-center">
        <div className="text-center">
          
          <h1 className="text-2xl font-bold mb-4">Typescript Useful Utilities</h1>
          {/* Scroll To (ID) + Offset */}
          <button 
            onClick={() => slideTo(SLIDE_ID, 80)} // You may change the offset for your preference
            className="px-6 py-2 rounded-md bg-blue-600 text-white cursor-pointer"
            >
              Scroll To (Function)
            </button>

        </div>
      </div>

      <div id={SLIDE_ID} className="max-w-7xl mx-auto py-8 bg-neutral-600 text-white">
        {generateLotofLoremIpsums(100)}
      </div>
    </>
  )
}
import {createRoot} from "react-dom/client";
import SearchParams from "./searchParams"


const App = () => {
  return (
  <div>
    <h1>Just trying something fun with react</h1>
    <SearchParams/>
  </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);

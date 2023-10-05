import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routesApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}

export default App;

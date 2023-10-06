import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routesApp";
import { Footer } from "./components/interface/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routesApp";
import { Footer } from "./components/interface/footer";
import { Header } from "./components/interface/header";

import WidthProvider from "./contexts/widthContext";

function App() {
  return (
    <>
      <WidthProvider>
        <BrowserRouter>
          <Header />
          <RoutesApp />
          <Footer />
        </BrowserRouter>
      </WidthProvider>
    </>
  );
}

export default App;

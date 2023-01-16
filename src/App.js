import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Links from "./routes/Links";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Links/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

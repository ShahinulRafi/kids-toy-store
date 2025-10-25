import { Outlet } from "react-router";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

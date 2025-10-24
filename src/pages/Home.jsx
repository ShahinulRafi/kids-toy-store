import React, { use } from "react";
import Nav from "../components/Header/Nav";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import PopularToys from "../components/PopularToys/PopularToys";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const {user} = use(AuthContext);
  console.log(user)
  return (
    <div>

      <header>
        <Nav></Nav>
      </header>
      <main>
        <section>
          <Slider></Slider>
        </section>
        <section>
          <PopularToys></PopularToys>
        </section>
        {/* <Outlet></Outlet> */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;

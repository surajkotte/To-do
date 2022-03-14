import "../css/home.css";
import Nav from "./NavBar";
import First from "./firstContainer";
import About from "./aboutContainer";
import Auth from "./Authentication";
// import Authentication from'../context/auth-context'

const home = () => {
  return (
    <>
      {/* <Authentication.Provider> */}
      <div>
        <Nav />
      </div>
      <div>
        <First />
      </div>
      <>
        <About />
      </>
      <div>
        <Auth />
      </div>
      {/* </Authentication.Provider> */}
    </>
  );
};

export default home;

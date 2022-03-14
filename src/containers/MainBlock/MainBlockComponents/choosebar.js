import UserNameComponent from "./userNameComponent";
import { Button } from "@mui/material";
import "../minBlockcss/choose.css";
import { useState,useContext } from "react";
import slideContex from "../../../context/slide-context";
const ChooseBar = () => {
    const ctx = useContext(slideContex);
    const [slideInOrOut, setslideInOrOut] = useState(false);
    const changeSlideState=()=>{
        setslideInOrOut((prev)=>!prev);
        ctx.find(slideInOrOut);
    }
  return (
    <>
      <nav className="MainNavBar">
        <UserNameComponent />
        <div className="mainNavButton">
          <Button onClick={changeSlideState}>
            <i className="fas fa-bars"></i>
          </Button>
        </div>
      </nav>
    </>
  );
};
export default ChooseBar;

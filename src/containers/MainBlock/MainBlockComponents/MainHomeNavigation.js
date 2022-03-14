import ChooseBar from "./choosebar";
import "../minBlockcss/mainHome.css";
import SlideBar from "./slideBar";
import { SlideContextProvider } from "../../../context/slide-context";
// import {Routes,route} from 'react-router-dom'
const MainHomeNavigation = () => {
  return (
    <>
      <SlideContextProvider>
        <ChooseBar />
        <SlideBar />
      </SlideContextProvider>
    </>
  );
};
export default MainHomeNavigation;

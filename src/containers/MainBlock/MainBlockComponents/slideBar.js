import { useContext } from "react";
import slideContex from "../../../context/slide-context";
import "../minBlockcss/slidebar.css";
import AddTask from '../MainBlockComponents/AddTaskComp'
const SlideBar = () => {
  const ctx = useContext(slideContex);
  console.log(ctx);
  return (
    <div className="SlidebarMainComponent">
      <div className={`slide ${ctx.slideInOrOut && "slideBar"}`}>
        <ul className="top-fillers">
          <li>
            <a href="/">
              <span className="spanicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21px"
                  height="21px"
                  viewBox="0 0 21 21"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    transform="translate(2.5 4.5)"
                  >
                    <path d="m3.65939616 0h8.68120764c.4000282 0 .7615663.23839685.9191451.6060807l2.7402511 6.3939193v4c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-4l2.74025113-6.3939193c.15757879-.36768385.51911692-.6060807.91914503-.6060807z" />
                    <path d="m0 7h4c.55228475 0 1 .44771525 1 1v1c0 .55228475.44771525 1 1 1h4c.5522847 0 1-.44771525 1-1v-1c0-.55228475.4477153-1 1-1h4" />
                  </g>
                </svg>
              </span>
              <span className="spanclass">Inbox</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="spanicon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor" fillRule="nonzero">
                    <path
                      d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
                      opacity="0.1"
                    ></path>
                    <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path>
                  </g>
                </svg>
              </span>
              <span className="spanclass">All</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="spanicon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="currentColor" fillRule="evenodd">
                    <path
                      fillRule="nonzero"
                      d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                      opacity=".1"
                    ></path>
                    <path
                      fillRule="nonzero"
                      d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                    ></path>
                    <text
                      font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                      font-size="9"
                      transform="translate(4 2)"
                      font-weight="500"
                    >
                      <tspan x="8" y="15" text-anchor="middle">
                        18
                      </tspan>
                    </text>
                  </g>
                </svg>
              </span>
              <span className="spanclass">Toady</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="spanicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
                </svg>
              </span>
              <span className="spanclass">Important</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="SlideBarContent">
        <div className="contents">
          <p>
          <AddTask/>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SlideBar;

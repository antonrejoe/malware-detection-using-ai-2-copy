import "../../src/App.css";
import alien_1 from "../assets/images/space-invaders-1.svg";
import { GitHub } from "@mui/icons-material";
export default function Sidebar() {
  return (
    <main className="sticky-bar">
      <a href="/" className="flex flex-row">
        <img
          src={alien_1}
          height="40px"
          width="40px"
          className=""
          alt="space-invaders"
        />
      </a>
      <div className="w-[60vw] nav_div"></div>
      <a className="hover-underline" href="/dashboard">
        Dashboard
      </a>
      <a className="hover-underline" href="/exe">
        Check .exe
      </a>
      <a className="hover-underline" href="/url">
        Check url
      </a>
      <a className="" href="https://github.com/antonrejoe" target="_blank">
        <GitHub />
      </a>
    </main>
  );
}

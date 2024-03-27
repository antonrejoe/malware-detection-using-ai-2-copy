import alien_1 from "../assets/images/space-invaders-1.svg";
import { Link } from "react-router-dom";

export default function Not_found() {
  return (
    <>
      <div className="flex flex-col items-center mt-[5%]  h-screen">
        <img src={alien_1} height="200px" width="200px" alt="space-invaders" />
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>

        <Link
          to="/"
          className="px-4 py-2  outline outline-1 outline-[ivory]  text-white rounded-md shadow hover:bg-[ivory] hover:text-[#333] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </>
  );
}

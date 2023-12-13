import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function Navbar() {
  const { isLoggedIn, user, handleLogout } = useAuth();
  const [logout, setLogout] = useState(false);
  const pages = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/posts",
      name: "See all",
    },
    {
      route: "/about",
      name: "About",
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleUserClick = () => {
    setLogout((prevLogout) => !prevLogout);
  };

  return (
    <>
      <ul className="flex justify-center items-center gap-10 bg-white text-black p-4">
        {pages.map((el, index) => (
          <li
            key={index}
            className={activeLink == index ? "border-b-4 border-b-sky-500" : ""}
          >
            <NavLink onClick={() => handleNavLinkClick(index)} to={el.route}>
              {el.name}
            </NavLink>
          </li>
        ))}
        {isLoggedIn ? (
          <li className="relative cursor-pointer" onClick={handleUserClick}>
            <div className="flex gap-4 justify-center items-center">
              <p>Utente</p>
              <img
                className="w-8 h-8"
                src="https://www.svgrepo.com/show/507442/user-circle.svg"
                alt="user-pic"
              />
            </div>

            {/* logout dropdown */}
            <div
              className={`${
                logout == true ? "block" : "hidden"
              } absolute  px-8 py-3 top-8 right-2 flex justify-center items-center bg-white border rounded-xl`}
            >
              <button onClick={() => handleLogout()}>Logout </button>
            </div>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </>
  );
}

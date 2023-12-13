import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function Navbar() {
  const { isLoggedIn, user } = useAuth();
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
    {
      route: "/login",
      name: `${isLoggedIn == true ? "Utente" : "Login"}`,
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <ul className="flex justify-center gap-10 bg-white text-black p-4">
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
      </ul>
    </>
  );
}

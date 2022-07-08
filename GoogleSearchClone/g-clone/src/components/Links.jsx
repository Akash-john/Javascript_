import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: "1", url: "/search", text: "🔎 All" },
  { id: "2", url: "/news", text: "📰 News" },
  { id: "3", url: "/image", text: "📸 Images" },
  { id: "4", url: "/video", text: "📺 Videos" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, id) => (
        <NavLink
          to={url}
          key={id}
          exact="true"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : ""
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;

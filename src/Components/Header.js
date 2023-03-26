import React from "react";

function Header(props) {
  const pages = [
    {
      name: "About Me",
    },
        {
      name: "Projects",
    },
    {
      name: "Resume",
    },
    {
      name: "Contact",
    }
  ];
  return (
    <header className="header-container">
      <h1 className="header-title">Portfolio: <span>Sar Noire</span>
            
      </h1>
      <nav className="navbar">
        {pages.map((page, i) => (
          <li key={`${page.name}_${i}`}>
            <a onClick={() => props.setActivePage(page.name)}>{page.name}</a>
          </li>
        ))}
      </nav>
    </header>
  );
}

export default Header;

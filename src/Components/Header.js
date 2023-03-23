import React from "react";

function Header(props) {
  const pages = [
    {
      name: "Resume",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
    {
      name: "About Me",
    },
    
  ];
  return (
    <header>
      <h1>Sarah DeSantis</h1>
      <nav>
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

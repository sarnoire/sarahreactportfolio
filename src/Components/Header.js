import React from 'react';

function Header(props) {
  return (
    <header>
        <h1>Sarah DeSantis</h1>
      <nav>
        {props.pages.map((page, i) => (
            <li 
                key={`${page.name}_${i}`}
                onClick={() => props.setActivePage(page)}
                >
                {page.name}
            </li>
        ))}
      </nav>
    </header>
  );
}

export default Header;

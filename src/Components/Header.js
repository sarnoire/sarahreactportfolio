function Header(props) {
  return (
    <header>
        <h1>MY project</h1>
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

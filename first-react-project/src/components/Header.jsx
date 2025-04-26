export default function HeaderImage() {
  return (
    <header className="nav-header">
      <img className="nav-logo" src="/src/assets/react-logo.png" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

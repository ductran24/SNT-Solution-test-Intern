function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header__logo">
          <a href className="header__logo-link">
            <img src="images/Logo.png" alt="" className="header__logo-img" />
          </a>
        </div>
        <ul className="header__navbar-list">
          <li className="header__navbar-item header__navbar-item--bold header__navbar-item--space">
            LOGIN
          </li>
          <li className="header__navbar-item">
            <span className="header__navbar--title-nopoiter">CONTACT</span>
          </li>
          <a href className="header__navbar-icon-link">
            <i className="icon-margin-left header__navbar-icon fab fa-facebook" />
          </a>
          <a href className="header__navbar-icon-link">
            <i className="header__navbar-icon fa-solid fa-envelope-circle-check" />
          </a>
        </ul>
      </div>
    </header>
  );
}
export default Header;

import { Link } from "react-router-dom";

function Menu() {
  <div className="menuLeft">
    <ul className="panel">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/animal"}>Animal</Link>
      </li>
    </ul>
  </div>;
}
export default Menu;

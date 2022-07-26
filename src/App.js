import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import Menu from "./layout/Menu";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default App;

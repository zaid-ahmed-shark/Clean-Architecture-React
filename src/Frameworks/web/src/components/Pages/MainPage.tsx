import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
interface IMainPage {
  p: string;
  a: string;
  code: string;
  button: string;
  onClick(): void;
}
const MainPage: React.FC<IMainPage> = (props) => {
  const { p, a, code, button, onClick } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {p} <code>{code}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {a}
        </a>
        <button className="button" onClick={onClick}>
          {button}
        </button>
      </header>
    </div>
  );
};

export default MainPage;

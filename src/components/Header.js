import Navbar from "./Navbar";
import logo from "../assets/Logo .svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} height="50px" className="header-logo"/>
      <Navbar />
    </header>
  );
}
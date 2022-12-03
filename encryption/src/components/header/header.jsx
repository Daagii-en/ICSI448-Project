import logo from "./logo.png";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <label className="labelH">ICSI448 - Мэдээллийн аюулгүй байдал </label>
    </div>
  );
}

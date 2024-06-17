// import React from 'react'
import Logo from "../assets/image/logo.svg";

const Header = () => {
  return (
    <div className="border flex flex-row justify-center items-center p-4 gap-10">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-row justify-between w-full">
        <ul className="flex flex-row items-center gap-10">
          <li>
            <a href="#">Features &darr;</a>
          </li>
          <li>
            <a href="#">Company &darr;</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="flex gap-10">
          <button>Login</button>
          <button className="border p-2 rounded-md">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

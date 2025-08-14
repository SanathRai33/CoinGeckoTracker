import React, { useContext } from "react";
import Lottie from "lottie-react"
import { CurrencyContext } from "../../Context/CurrencyContext";
import { useNavigate } from "react-router-dom";
import RupeeCoin from "../../assets/JSON/RupeeCoin.json"

const Navbar = () => {

  const { setCurrency } = useContext(CurrencyContext)
  const navigate = useNavigate();

  const handleHomeGo = () => {
    navigate('/');
  }

  return (
    <div className="sticky top-0 w-full shadow-sm navbar bg-base-100 z-999">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            <li>
              <a onClick={() => setCurrency('usd')}>USD</a>
            </li>
            <li>
              <a onClick={() => setCurrency('inr')}>INR</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex navbar-center">
        <div className="w-10 h-10 ">
          <Lottie
            animationData={RupeeCoin}
            loop
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          />

        </div>
        <a className="pl-0 text-xl btn btn-ghost" onClick={handleHomeGo}>Rai Coin Tracker</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

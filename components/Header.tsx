/* eslint-disable @next/next/no-img-element */

import React, { Dispatch, SetStateAction, useState } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import logo from "../public/mundoLingo/mundoLogo.png";
import Image from "next/image";
import Login from "./Login";

// Define the prop types for the Header component
interface HeaderProps {
  setCurrentView: Dispatch<SetStateAction<string>>;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  setCurrentView,
  setIsLoginOpen,
}: HeaderProps) {
  const pinkButton =
    "mt-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-sm shadow-pink-500/50 dark:shadow-sm dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

  const [isOpen, setIsOpen] = useState(false);
  // const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <header className="bg-white p-3">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex h-fit items-center justify-between">
            {/* Logo */}

            <div className="md:flex md:items-center md:gap-12 w-16  ">
              <Link legacyBehavior href="/home">
                <Image
                  src={logo}
                  width={90}
                  height={90}
                  alt="logo"
                  className="rounded-lg border border-m-gold hover:cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop header links */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <div className="flex items-center gap-6 text-sm ">
                  <Link legacyBehavior href="/home">
                    <a aria-label="Home">Home</a>
                  </Link>
                  <Link legacyBehavior href="/cities">
                    <a aria-label="cities">Cities</a>
                  </Link>
                  <Link legacyBehavior href="/history">
                    <a aria-label="history">History</a>
                  </Link>
                  <Link legacyBehavior href="/philosophy">
                    <a aria-label="philosophy">Philosophy</a>
                  </Link>
                  <Link legacyBehavior href="/joinus">
                    <a aria-label="joinus">Join Us</a>
                  </Link>
                  <Link legacyBehavior href="/contact">
                    <a aria-label="Contact">Contact</a>
                  </Link>
                  <button
                    className={pinkButton}
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Log In
                  </button>
                </div>
              </nav>
            </div>

            {/* dropdown */}

            <div className="md:hidden">
              <Dropdown
                setCurrentView={setCurrentView}
                setIsLoginOpen={setIsLoginOpen}
              />
            </div>
          </div>
        </div>
      </header>
      {/* <div className="">
        {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      </div> */}
    </div>
  );
}

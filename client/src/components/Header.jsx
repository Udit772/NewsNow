import { useState } from "react";
import { Link } from "react-router-dom";
import countries from "./countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/logo.png";

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  let category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];
  return (
    <header className="mb-24">
      <nav className="fixed top-0 heading left-0 w-full h-auto z-10 flex items-center justify-around black">
        <h3 className="relative heading flex items-center font-bold text-black md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5 white space-normal">
          <span>
            <img src={logo} alt="" className="w-14" />
          </span>
          NewsNow
        </h3>

        <ul
          className={
            active
              ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active  "
              : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"
          }
        >
          <li>
            <Link
              className="no-underline font-semibold white "
              to="/"
              onClick={() => {
                setActive(!active);
              }}
            >
              All News
            </Link>
          </li>
          <li className="dropdown-li ">
            <Link
              className="no-underline font-semibold flex items-center gap-2 white"
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowCountryDropdown(false);
              }}
            >
              Top-Headlines{" "}
              <FontAwesomeIcon
                className={
                  showCategoryDropdown
                    ? "down-arrow-icon down-arrow-icon-active "
                    : "down-arrow-icon"
                }
                icon={faCircleArrowDown}
              />
            </Link>

            <ul
              className={
                showCategoryDropdown
                  ? "dropdown p-2 show-dropdown bg-lightBg"
                  : "dropdown p-2"
              }
            >
              {category.map((element, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setShowCategoryDropdown(!showCategoryDropdown);
                    }}
                  >
                    <Link
                      to={"/top-headlines/" + element}
                      className="flex gap-3 capitalize"
                      type="btn"
                      onClick={() => {
                        setActive(!active);
                      }}
                    >
                      {element}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="dropdown-li">
            <Link
              className="no-underline font-semibold flex items-center gap-2 white"
              onClick={() => {
                setShowCountryDropdown(!showCountryDropdown);
                setShowCategoryDropdown(false);
              }}
            >
              Country{" "}
              <FontAwesomeIcon
                className={
                  showCountryDropdown
                    ? "down-arrow-icon down-arrow-icon-active"
                    : "down-arrow-icon"
                }
                icon={faCircleArrowDown}
              />
            </Link>
            <ul
              className={
                showCountryDropdown
                  ? "dropdown p-2 show-dropdown bg-lightBg"
                  : "dropdown p-2"
              }
            >
              {countries.map((element, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setShowCountryDropdown(!showCountryDropdown);
                    }}
                  >
                    <Link
                      to={"/country/" + element?.iso_2_alpha}
                      className="flex gap-3"
                      type="btn"
                      onClick={() => {
                        setActive(!active);
                      }}
                    >
                      <img
                        src={element?.png}
                        srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                        alt={element?.countryName}
                      />
                      <span>{element?.countryName}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <div
          className={
            active
              ? "ham-burger z-index-100 ham-open"
              : "ham-burger z-index-100"
          }
          onClick={() => {
            setActive(!active);
          }}
        >
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

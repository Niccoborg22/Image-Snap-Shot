import React, { ReactNode } from "react";
import SearchBar from "./componentsNavBar/searchBar";
import "../App.css";


// Inputs needed for the navigation bar
interface Props {
  barName: string;
  appPicture: string;
  barPages: string[];
  barLink: string[];
}

// function NavBar for the navigation bar
function NavBar({ barName, appPicture, barPages, barLink }: Props) {
  // function to create a new entry in the navigation bar
  const getBarElement = (name: string, link: string) => {
    return (
      <li key={name} className="nav-item">
        <a
          className="nav-link active text-light"
          aria-current="page"
          href={link}
        >
          {name}
        </a>
      </li>
    );
  };

  // Create an array of page objects from the barPages and barLink props
  const pages = barPages.map((name, index) => ({
    name,
    url: barLink[index],
  }));

  // Return HTML that creates a navigation bar
  return (
    <nav className="navbar navbar-expand-lg bg-dark" id="navigationBar">
      <div className="container-fluid">
        <nav className="navbar bg-dark">
          <div className="container">
            <a className="navbar-brand text-light" href="/#">
              <img
                src={appPicture}
                alt="Bootstrap"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />{" "}
              {barName}
            </a>
          </div>
        </nav>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {barPages.map((page, index) =>
                getBarElement(page, barLink[index])
              )}
            </ul>
          </ul>
          < SearchBar pages={pages} />
        </div>
      </div>
    </nav>
  );
}

// Export the component
export default NavBar;

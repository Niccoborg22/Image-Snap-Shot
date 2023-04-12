import React, { CSSProperties } from "react";
import '../App.css'

// Inputs needed for the footer
interface Props {
  companyName: string;
  footerPages: string[];
  footerLink: string[];
}

// function Footer for the footer at the bottom of the page
function Footer({ companyName, footerPages, footerLink }: Props) {
  // function to create an entry in the footer
  const getFooter = (page: string, link: string) => {
    return (
      <a className="text-light" href={link}>
        {page}
      </a>
    );
  };

  // Return the footer HTML
  return (
    <footer className="bg-dark">
      <div className="Copyright">
        <p className="nav-link active text-light">
          Copyright {companyName} © 2023
        </p>
      </div>
      <div className="Links">
        {footerPages.map((page, index) => getFooter(page, footerLink[index]))}
      </div>
    </footer>
  );
}

export default Footer;
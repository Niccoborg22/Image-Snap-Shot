import "../../App.css";

// Inputs needed for the navigation bar
interface Props {
  appTitle: string;
  appDescription: string;
  // The variable firstPage should be assigned value "yes" or "no"
  firstPage: string;
}


function TitleDesc({ appTitle, appDescription, firstPage }: Props) {
  if (firstPage === "yes") {
    return (
      <div
        className="container text-center bg-dark text-light py-5"
        style={{ height: "100vh", width: "100%"}}
      >
        <h1 className="MainTitle">{appTitle}</h1>
        <h4 className="mt-3">{appDescription}</h4>
      </div>
      // ADD ELEMENTS TO CHOOSE FROM
    );
  }
  return (
    <div
      className="container text-center bg-dark text-light py-5"
      style={{ height: "100vh", width: "100%" }}
    >
      <h1 className="MainTitle">{appTitle}</h1>
      <h4 className="mt-3">{appDescription}</h4>
    </div>
    // ADD IMAGES
  );
}

export default TitleDesc
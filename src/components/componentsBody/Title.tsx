import "../../App.css";
import FirstPage from "./componentsTitle/firstPageOptions";

// Inputs needed for the navigation bar
interface Props {
  appTitle: string;
  appDescription: string;
  // The variable firstPage should be assigned value "yes" or "no"
  firstPage: string;
}

function TitleDesc({ appTitle, appDescription, firstPage }: Props) {
  let items = ["Ciao", "Miao", "Bau"];
  let itemsLink = [
    "https://upload.wikimedia.org/wikipedia/it/thumb/4/4e/Ciao_PX.jpg/1200px-Ciao_PX.jpg",
    "https://www.itagnol.com/wp-content/uploads/2019/01/CIAO.jpg",
  ];

  if (firstPage === "yes") {
    return (
      <>
        <div
          className="container text-center bg-dark py-5 d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <div className="text-light">
            <h1 className="MainTitle">{appTitle}</h1>
            <h4 className="mt-3">{appDescription}</h4>
          </div>
          <div className="classContainer">
            <FirstPage
              imagesTitle={items}
              imagesDescription={items}
              imagesLink={itemsLink}
              imagesPageLink={items}
            />
          </div>
        </div>
      </>
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

export default TitleDesc;

import "../App.css";
import FirstPage from "./componentsBody/componentsBody/firstPageOptions";
import ImageDisplay from "./componentsBody/componentsBody/imageDisplay";

// Inputs needed for the navigation bar
interface Props {
  appTitle: string;
  appDescription: string;
  // The variable firstPage should be assigned value "yes" or "no"
  firstPage: string;
  imagesType: string;
}

async function Body({
  appTitle,
  appDescription,
  firstPage,
  imagesType,
}: Props) {
  let items = ["Space", "Cars", "Mountains"];
  let itemsDesc = [
    "Space images brought to you by the NASA API!",
    "Cars images brought to you by the Unsplashed API!",
    "Mountains images brought to you by the Unsplashed API!",
  ];
  let itemsLink = [
    "https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=612x612&w=0&h=5vGVNVdkpw46y08cWz9oQcVBHWsvNDkfFUYjDruKHu0=",
    "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
    "https://cdn.hswstatic.com/gif/highest-mountains-2.jpg",
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
            <h5 className="mt-3">{appDescription}</h5>
          </div>
          <div className="classContainer">
            <FirstPage
              imagesTitle={items}
              imagesDescription={itemsDesc}
              imagesLink={itemsLink}
              imagesPageLink={items}
            />
          </div>
        </div>
      </>
    );
  }
  return Promise.resolve(
    <>
      <div
        className="container text-center bg-dark text-light py-5"
        style={{ height: "100vh", width: "100%" }}
      >
        <h1 className="MainTitle">{appTitle}</h1>
        <h5 className="mt-3">{appDescription}</h5>
        {await ImageDisplay({ imagesType })}
      </div>
    </>
  );
}

export default Body;

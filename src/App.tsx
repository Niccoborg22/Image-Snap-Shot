import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

let items = ["Space", "Cars", "Mountains"];
let firstPageProps = {
  appTitle: "IMAGE SNAP-SHOT",
  appDescription:
    "In this page you are able to see 9 different space images coming straight from NASA. In order to retrieve the images the NASA APOD API has been used. Have fun!!",
  firstPage: "yes",
  imagesType: "/",
};
let spaceProps = {
  appTitle: "SPACE",
  appDescription:
    "Welcome to the most beautiful image snap-shot ever created. You can choose among 3 options and images of that category will be shown to you. The images are taken from an API.",
  firstPage: "no",
  imagesType: "Space",
};
let carsProps = {
  appTitle: "CARS",
  appDescription:
    "In this page you are able to see 9 different cars images from the Unsplashed API. Have fun!!",
  firstPage: "no",
  imagesType: "Cars",
};
let mountainsProps = {
  appTitle: "MOUNTAINS",
  appDescription:
    "In this page you are able to see 9 different mountains images from the Unsplashed API. Have fun!!",
  firstPage: "no",
  imagesType: "Mountains",
};

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [bodyContent, setBodyContent] = useState({
    "/": <div>Loading...</div>,
    "/Space": <div>Loading...</div>,
    "/Cars": <div>Loading...</div>,
    "/Mountains": <div>Loading...</div>,
  });

  useEffect(() => {
    Body(firstPageProps).then((content) =>
      setBodyContent((prevContent) => ({ ...prevContent, "/": content }))
    );
    Body(spaceProps).then((content) =>
      setBodyContent((prevContent) => ({ ...prevContent, "/Space": content }))
    );
    Body(carsProps).then((content) =>
      setBodyContent((prevContent) => ({ ...prevContent, "/Cars": content }))
    );
    Body(mountainsProps).then((content) =>
      setBodyContent((prevContent) => ({
        ...prevContent,
        "/Mountains": content,
      }))
    );
  }, []);

  return (
    <>
      <NavBar
        barName="SNAP-SHOT"
        appPicture="https://www.freepnglogos.com/uploads/camera-logo-png/photography-camera-logo-studio-design-gallery-8.png"
        barPages={items}
        barLink={items}
      />
      <Routes>
        <Route
          path="/"
          element={<div className="bg-dark">{bodyContent["/"]}</div>}
        />
        <Route
          path="/Space"
          element={<div className="bg-dark">{bodyContent["/Space"]}</div>}
        />
        <Route
          path="/Cars"
          element={<div className="bg-dark">{bodyContent["/Cars"]}</div>}
        />
        <Route
          path="/Mountains"
          element={<div className="bg-dark">{bodyContent["/Mountains"]}</div>}
        />
      </Routes>
      <Footer
        companyName="Niccoló Borgato"
        footerPages={items}
        footerLink={items}
      />
    </>
  );
}

export default App;
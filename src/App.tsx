import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import Body from "./components/componentsBody/Body";
import {Routes, Route} from 'react-router-dom'

function App() {
  let items = ["Space", "Cars", "Mountains"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

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
          element={
            <div className="bg-dark">
              <Body
                appTitle="IMAGE SNAP-SHOT"
                appDescription="Welcome to the most beautiful image snap-shot ever created. You can choose among 3 options and images of that category will be shown to you. The images are taken from an API."
                firstPage="yes"
              />
            </div>
          }
        />
        <Route
          path="/Space"
          element={
            <div className="bg-dark">
              <Body
                appTitle="SPACE"
                appDescription="In this page you are able to see 9 different space images coming straight from NASA. In order to retrieve the images the NASA APOD API has been used. Have fun!!"
                firstPage="no"
              />
            </div>
          }
        />
        <Route
          path="/Cars"
          element={
            <div className="bg-dark">
              <Body
                appTitle="CARS"
                appDescription="In this page you are able to see 9 different cars images      ...         . Have fun!!"
                firstPage="no"
              />
            </div>
          }
        />
        <Route
          path="/Mountains"
          element={
            <div className="bg-dark">
              <Body
                appTitle="MOUNTAINS"
                appDescription="In this page you are able to see 9 different mountain images      ...         . Have fun!!"
                firstPage="no"
              />
            </div>
          }
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

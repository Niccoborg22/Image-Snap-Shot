import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import Body from "./components/componentsBody/Body";

function App() {
  let items = ["Space", "Cars", "Mountains"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <NavBar
        barName="SNAP-SHOT"
        appPicture="https://www.freepnglogos.com/uploads/camera-logo-png/photography-camera-logo-studio-design-gallery-8.png"
        barPages={items}
        barLink={items}
      />

      <div className="bg-dark">
        <Body
          appTitle="IMAGE SNAP-SHOT"
          appDescription="Welcome to the most beautiful image snap-shot ever created. You can choose among 3 options and images of that category will be shown to you. The images are taken from an API."
          firstPage="yes"
        />
      </div>

      <Footer companyName="Milan" footerPages={items} footerLink={items} />
    </div>
  );
}

export default App;

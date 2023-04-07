import TitleDesc from "./components/componentsBody/Title";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  let items = ["New York", "Miami", "Milano", "Rome", "Ciao"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <NavBar
        barName="ciao"
        appPicture="https://florinrosoga.ro/wp-content/uploads/foto-featured-image-landscape-04-1024x576.jpg"
        barPages={items}
        barLink={items}
      />

      <div className="bg-dark">
        <TitleDesc
          appTitle="Hello"
          appDescription="Hello to the Hellosians"
          firstPage="yes"
        />
      </div>

      <Footer companyName="Milan" footerPages={items} footerLink={items} />
    </div>
  );
}

export default App;

import TitleDesc from "./components/componentsBody/Title";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import "./App.css"


function App() {
  let items = ["New York", "Miami", "Milano", "Rome", "Ciao"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
      <NavBar
        barName="ciao"
        appPicture="https://florinrosoga.ro/wp-content/uploads/foto-featured-image-landscape-04-1024x576.jpg"
        barPages={items}
        barLink={items}
      />
      <body>
        <TitleDesc
          appTitle="Hello"
          appDescription="Hello to the Hellosians"
          firstPage="yes"
        />
      </body>
      <Footer companyName="Milan" footerPages={items} footerLink={items} />
    </div>
  );
}

export default App;

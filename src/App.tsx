import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import NavBar from "./components/navbar";

function App() {
  let items = ["New York", "Miami", "Milano", "Rome", "Ciao"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  let items2 = ['tiao', 'miao']
  return (
    <div>
      <NavBar barName='ciao' appPicture="https://florinrosoga.ro/wp-content/uploads/foto-featured-image-landscape-04-1024x576.jpg" barPages={items} barLink={items} />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert children="CIAOOOO " />
    </div>
  );
}

export default App;

import "../../../App.css";


// Inputs needed for the first page
interface Props {
  imagesLink: string[];
  imagesDescription: string[];
}

function ImageRow({ imagesLink, imagesDescription }: Props) {
  // function to create a card with an image and a description
  const getImageCard = (imageLink: string, description: string) => {
    return (
      <div className="card" id="cardImage">
        <img src={imageLink} className="card-img-top" alt={description} />
        <div className="card-body">
          <p className="card-text text-dark">{description}</p>
        </div>
      </div>
    );
  };

  // Split the imagesLink and imagesDescription arrays into groups of three
  // Split the imagesLink and imagesDescription arrays into groups of three
  const groups = imagesLink.reduce<string[][]>((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  // Create an array of cardArray arrays, where each cardArray has up to three image cards
  const cardArrays = groups.map((group) => {
    return group.map((link, index) => {
      return getImageCard(link, imagesDescription[index]);
    });
  });

  // Return the HTML for a carousel of images
  return (
    <>
      {cardArrays.map((cardArray, index) => {
        return (
          <div key={index} className="card-grid">
            {cardArray}
          </div>
        );
      })}
    </>
  );
}

export default ImageRow;

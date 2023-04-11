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

  // Create an array of cards for each image link and description
  const cardArray = imagesLink.map((link, index) =>
    getImageCard(link, imagesDescription[index])
  );

  // Return the HTML for a carousel of images
  return (
    <>
      <div className="card-grid">{cardArray}</div>
    </>
  );
}

export default ImageRow;

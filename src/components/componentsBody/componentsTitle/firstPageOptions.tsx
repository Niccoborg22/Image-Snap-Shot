import '../../../App.css'

// Inputs needed for the first page
interface Props {
  imagesTitle: string[];
  imagesLink: string[];
  imagesPageLink: string[];
  imagesDescription: string[];
}

// function firstPageOptions for the first page
function FirstPage({ imagesTitle, imagesLink, imagesPageLink, imagesDescription }: Props) {
  // function to create an entry in the footer
  const getCard = (
    imageTitle: string,
    imageLink: string,
    linkPage: string,
    description: string
  ) => {
    return (
        <div className="col">
      <div className="card h-100">
        <img src={imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{imageTitle}</h5>
          <p className="card-text">{description}</p>
          <a href={linkPage} className="btn btn-primary">
            Check the images!
          </a>
        </div>
      </div>
      </div>
    );
  };

  // Return the first page cards HTML
  return(
    <div className="row row-cols-1 row-cols-md-3 g-4">
        { imagesTitle.map((title, index) => getCard(title, imagesLink[index], imagesPageLink[index], imagesDescription[index]))}
    </div>
  );
}

export default FirstPage;
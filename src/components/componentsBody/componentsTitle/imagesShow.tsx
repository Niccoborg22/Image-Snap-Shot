import "../../../App.css";

// Inputs needed for the first page
interface Props {
  imagesLink: string[];
  imagesTitle: string[];
  imagesDescription: string[];
}

function ImageShow({imagesLink, imagesTitle, imagesDescription}: Props) {
  // function to create an entry in the footer
  const getSlide = (
    imageTitle: string,
    imageLink: string,
    description: string
  ) => {
    let index = 0; 
    if (index === 0) {
        return (
            <div className="carousel-item active" data-bs-interval="3000">
            <img
                src={imageLink}
                className="d-block w-100"
                alt={imageTitle}
            />
            <div className="carousel-caption d-none d-md-block">
                <h5>{imageTitle}</h5>
                <p>{description}</p>
            </div>
            </div>
        );
    }
    return (
      <div className="carousel-item" data-bs-interval="1000">
        <img src={imageLink} className="d-block w-100" alt={imageTitle} />
        <div className="carousel-caption d-none d-md-block">
          <h5>{imageTitle}</h5>
          <p>{description}</p>
        </div>
      </div>
    );

  };

  // Return the HTML for a carousel of images
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">

      <div className="carousel-inner">
        {imagesTitle.map((title, index) => getSlide(title, imagesLink[index], imagesDescription[index]))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageShow;

import ImageRow from "./imagesRow";
import { nasaPicture, getNasaPicture, getNasaTitle } from "./nasaAPI";
import {
  unsplashPicture,
  getUnsplashTitles,
  getUnsplashPictures,
} from "./unsplashAPI";

// Inputs needed for the first page
interface Props {
  imagesType: string;
}

// Function to return the images from the appropriate API
function ImageDisplay({ imagesType }: Props) {
  if (imagesType == "Space") {
    let imagesURL = getNasaPicture();
    let titleImages = getNasaTitle();
    return (
      <>
        <ImageRow imagesLink={imagesURL} imagesDescription={titleImages} />
      </>
    );
  }
  let imagesURL = getUnsplashPictures(imagesType);
  let titleImages = getUnsplashTitles(imagesType);
  return (
    <>
      <ImageRow imagesLink={imagesURL} imagesDescription={titleImages} />
    </>
  );
}

export default ImageDisplay;
import ImageRow from "./imagesRow";
import { getNasaPictures, getNasaTitle } from "./nasaAPI";
import { getUnsplashTitles, getUnsplashPictures } from "./unsplashAPI";

// Inputs needed for the first page
interface Props {
  imagesType: string;
}

// Function to return the images from the appropriate API
async function ImageDisplay({ imagesType }: Props) {
  if (imagesType == "Space") {
    let imagesURL = await getNasaPictures();
    let titleImages = await getNasaTitle();
    return Promise.resolve(
      <>
        <ImageRow imagesLink={imagesURL} imagesDescription={titleImages} />
      </>
    );
  }
  let imagesURL = await getUnsplashPictures(imagesType);
  let titleImages = await getUnsplashTitles(imagesType);
  return Promise.resolve(
    <>
      <ImageRow imagesLink={imagesURL} imagesDescription={titleImages} />
    </>
  );
}

export default ImageDisplay;

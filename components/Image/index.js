import Image from "next/image";
import { isImage } from "../../lib/objkt";

function imageUri(item, highQuality) {
  let display = item.displayUri;
  let artifact = item.artifactUri;

  let uri = artifact;
  if (!!display && !highQuality) {
    uri = display;
  }
  return uri;
}

function customLoader({ src }) {
  return src;
}

export default function MyImage({ item, objectFit, highQuality }) {
  highQuality = (isImage(item) && highQuality) || false;
  return (
    <Image
      src={imageUri(item, highQuality)}
      objectPosition="center"
      objectFit={objectFit || "contain"}
      layout="fill"
      title={item.title}
      alt={item.title}
      unoptimized={true}
      loader={customLoader}
    />
  );
}

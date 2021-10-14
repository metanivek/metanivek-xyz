import Image from "next/image";

function imageUri(item, highQuality) {
  let display = item.display_uri;
  let artifact = item.artifact_uri;

  let uri = artifact;
  if (!!display && !highQuality) {
    uri = display;
  }
  // fast public gateway: "https://cf-ipfs.com/ipfs/"
  const gateway = "https://metanivek.mypinata.cloud/ipfs/";
  return uri.replace("ipfs://", gateway);
}

function customLoader({ src }) {
  return src;
}

function isImage(item) {
  return item.mime.startsWith("image/");
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

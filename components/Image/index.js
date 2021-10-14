import Image from "next/image";
// import { Image } from "@chakra-ui/react";

function imageUri(item) {
  let display = item.display_uri;
  let artifact = item.artifact_uri;

  let uri = artifact;
  if (!!display) {
    uri = display;
  }
  // fast public gateway: "https://cf-ipfs.com/ipfs/"
  const gateway = "https://metanivek.mypinata.cloud/ipfs/";
  return uri.replace("ipfs://", gateway);
}

function customLoader({ src }) {
  return src;
}

export default function MyImage({ item, objectFit }) {
  return (
    <Image
      src={imageUri(item)}
      /* align="center" */
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

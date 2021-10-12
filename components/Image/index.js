import Image from "next/image";
// import { Image } from "@chakra-ui/react";

function imageUri(item) {
  let thumb = item.thumbnail_uri;
  let artifact = item.artifact_uri;

  let uri;
  if (thumb.includes("QmNrhZHUaEqxhyLfqoq1mtHSipkWHeT31LNHb1QEbDHgnc")) {
    uri = artifact;
  } else {
    uri = thumb;
  }
  return uri.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/");
}

export default function MyImage({ item, objectFit }) {
  return (
    <Image
      src={imageUri(item)}
      align="top"
      objectFit={objectFit || "contain"}
      layout="fill"
      title={item.title}
      alt={item.title}
    />
  );
}

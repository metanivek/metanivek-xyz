import { Flex } from "@chakra-ui/react";

export default function Video({ item }) {
  // TODO centralize gateway stuff
  const gateway = "https://metanivek.mypinata.cloud/ipfs/";
  const uri = item.artifact_uri.replace("ipfs://", gateway);
  const poster = item.display_uri.replace("ipfs://", gateway);
  return (
    <Flex direction="column" align="center" justify="center" grow={1}>
      <video
        style={{
          maxHeight: "70vh",
        }}
        src={uri}
        poster={poster}
        controls
        playsInline
      />
    </Flex>
  );
}

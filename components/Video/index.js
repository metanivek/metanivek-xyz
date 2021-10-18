import { Flex } from "@chakra-ui/react";

export default function Video({ item }) {
  return (
    <Flex direction="column" align="center" justify="center" grow={1}>
      <video
        style={{
          maxHeight: "70vh",
        }}
        src={item.artifactUri}
        poster={item.displayUri}
        controls
        playsInline
      />
    </Flex>
  );
}

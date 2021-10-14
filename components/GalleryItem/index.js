import {
  GridItem,
  AspectRatio,
  VStack,
  Box,
  Flex,
  useDisclosure,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import Image from "../Image";
import GalleryItemModal from "../GalleryItemModal";
import CollectButton from "../CollectButton";

function creatorIdToName(creatorId) {
  if (creatorId === "tz1N3xSSHguSVLYMCeNG7e3oiDfPnc6FnQip") {
    return "metanivek";
  } else if (creatorId === "tz1aiCXusXLywm3ewXb4Y8X8bsDqWQYmzvLa") {
    return "metanivek.words";
  } else if (creatorId === "tz1XDQJPCP53mSgwDZiNphTVKGmDJRsTwWUe") {
    return "metanivek.x";
  }
}

export default function GalleryItem({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const shouldShowModal = useBreakpointValue({ base: false, md: true });
  const { colorMode } = useColorMode();
  const showModal = () => {
    if (shouldShowModal) {
      onOpen();
    }
  };
  return (
    <GridItem
      padding={[3, 3, 4, 4]}
      boxShadow={colorMode === "light" ? "base" : "dark.base"}
    >
      <AspectRatio
        ratio={1}
        marginBottom={4}
        style={{ cursor: "pointer" }}
        onClick={showModal}
      >
        <Image item={item} objectFit="cover" />
      </AspectRatio>
      <VStack spacing={2} align="left">
        <VStack align="left" mb={1} spacing={0}>
          <Box fontSize="lg" noOfLines={1}>
            {item.title}
          </Box>
          <Box fontSize="xs" color="gray.500">
            {creatorIdToName(item.creator_id)}
          </Box>
        </VStack>
        <Flex direction="column">
          <CollectButton item={item} />
          <GalleryItemModal
            item={item}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Flex>
      </VStack>
    </GridItem>
  );
}

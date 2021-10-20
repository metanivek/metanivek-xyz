import {
  GridItem,
  AspectRatio,
  VStack,
  Box,
  Heading,
  Flex,
  Spacer,
  useDisclosure,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import Image from "../Image";
import GalleryItemModal from "../GalleryItemModal";
import CollectButton from "../CollectButton";

export default function GalleryItem({ item, collectable }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const shouldShowModal = useBreakpointValue({ base: false, md: true });
  const { colorMode } = useColorMode();
  const showModal = () => {
    // if (shouldShowModal) {
    onOpen();
    // } else {
    // }
  };
  const padding = [3, 3, 4, 4];
  return (
    <GridItem boxShadow={colorMode === "light" ? "base" : "dark.base"}>
      <Flex direction="column" height="100%">
        <Flex direction="column" height="100%" p={padding}>
          <Spacer />
          <AspectRatio
            ratio={item.aspectRatio}
            style={{ cursor: "pointer" }}
            onClick={showModal}
          >
            <Image item={item} objectFit="cover" />
          </AspectRatio>
          <Spacer />
        </Flex>
        <Box
          p={padding}
          bgColor={colorMode === "light" ? "gray.neutral" : "gray.900"}
          borderTopWidth="1px"
          borderTopColor={colorMode === "light" ? "gray.100" : "gray.800"}
        >
          <VStack align="left" spacing={0}>
            <Heading
              fontSize="lg"
              noOfLines={1}
              fontWeight="500"
              title={item.title}
            >
              {item.title}
            </Heading>
            <Box fontSize="xs" color="gray.500">
              {item.creatorName}
            </Box>
          </VStack>
          {collectable && <CollectButton item={item} mt={3} />}
        </Box>
        <GalleryItemModal
          item={item}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Flex>
    </GridItem>
  );
}

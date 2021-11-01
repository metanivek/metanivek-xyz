import {
  GridItem,
  AspectRatio,
  VStack,
  Box,
  Heading,
  Flex,
  Spacer,
  useDisclosure,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "../Image";
import GalleryItemModal from "../GalleryItemModal";
import CollectButton from "../CollectButton";

export default function GalleryItem({ item, collectable }) {
  const [aspectRatio, setAspectRatio] = useState(1 / 1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const showModal = () => onOpen();
  const padding = [3, 3, 4, 4];
  return (
    <GridItem boxShadow={colorMode === "light" ? "base" : "dark.base"}>
      <Flex direction="column" height="100%">
        <Flex direction="column" height="100%" p={padding}>
          <Spacer />
          <AspectRatio
            ratio={aspectRatio}
            style={{ cursor: "pointer" }}
            onClick={showModal}
          >
            <Image
              item={item}
              objectFit="cover"
              onLoadingComplete={(i) =>
                setAspectRatio(i.naturalWidth / i.naturalHeight)
              }
            />
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
              <Link href={item.uris.hen}>{item.title}</Link>
            </Heading>
            <Flex fontSize="xs" color="gray.500" direction="row">
              <Box>
                <Link href={`https://hicetnunc.xyz/${item.creatorName}`}>
                  {item.creatorName}
                </Link>
              </Box>
              <Spacer />
              {item.tags.length > 0 && <Box>#{item.tags[0]}</Box>}
            </Flex>
          </VStack>
          {collectable && (
            <Box mt={3}>
              <CollectButton item={item} />
            </Box>
          )}
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

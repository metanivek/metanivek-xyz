import { useState } from "react";
import {
  GridItem,
  AspectRatio,
  VStack,
  StackDivider,
  Text,
  Flex,
  Center,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "../Image";
import GalleryItemModal from "../GalleryItemModal";
import CollectButton from "../CollectButton";

export default function GalleryItem({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showModal = () => onOpen();
  return (
    <GridItem padding={[2, 2, 4, 4]} boxShadow="base">
      <AspectRatio
        ratio={1}
        marginBottom={4}
        style={{ cursor: "pointer" }}
        onClick={showModal}
      >
        <Image item={item} objectFit="cover" />
      </AspectRatio>
      <VStack spacing={2} align="left">
        <Text fontSize="lg" noOfLines={[2, 1]} mb={1}>
          {item.title}
        </Text>
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

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "../Image";

export default function GalleryItemModal({ item, isOpen, onOpen, onClose }) {
  const size = "full";
  return (
    <Modal onClose={onClose} size={size} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent rounded="0px">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody
          style={{ position: "relative" }}
          mx={[4, 4, 16]}
          mt={[2, 2, 4]}
          mb={[2, 2, 16]}
        >
          <Image item={item} objectFit="contain" />
        </ModalBody>
        <ModalFooter>
          <Spacer />
          <Text>{item.title}</Text>
          <Badge ml={2} variant="outline">
            {item.swaps.length}/{item.supply}
          </Badge>
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

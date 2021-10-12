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
} from "@chakra-ui/react";
import Image from "../Image";

export default function GalleryItemModal({ item, isOpen, onOpen, onClose }) {
  const size = "full";
  return (
    <Modal onClose={onClose} size={size} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent rounded="0px">
        <ModalHeader>{item.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody style={{ position: "relative" }} mx={16} mt={8} mb={16}>
          <Image item={item} objectFit="contain" />
        </ModalBody>
        {/* <ModalFooter> */}
        {/*   <Button onClick={onClose}>Close</Button> */}
        {/* </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Badge,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "../Image";
import Html from "../Html";

function isHtmlObjkt(item) {
  return item.mime === "application/x-directory";
}

export default function GalleryItemModal({ item, isOpen, onClose }) {
  const size = "full";
  const totalRemaining = item.swaps.reduce((m, s) => m + s.remaining, 0);
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
          {isHtmlObjkt(item) && <Html item={item} />}
          {!isHtmlObjkt(item) && (
            <Image item={item} objectFit="contain" highQuality={true} />
          )}
        </ModalBody>
        <ModalFooter>
          <Spacer />
          <Text>{item.title}</Text>
          <Badge ml={2} variant="outline">
            {totalRemaining}/{item.supply}
          </Badge>
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

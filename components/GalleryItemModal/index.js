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
import Pdf from "../Pdf";

function isHtmlObjkt(item) {
  return item.mime === "application/x-directory";
}
function isPdf(item) {
  return item.mime === "application/pdf";
}

function renderFullPreview(item) {
  if (isHtmlObjkt(item)) {
    return <Html item={item} />;
  } else if (isPdf(item)) {
    return <Pdf item={item} />;
  } else {
    return <Image item={item} objectFit="contain" highQuality={true} />;
  }
}

export default function GalleryItemModal({ item, isOpen, onClose }) {
  const size = "full";
  const totalRemaining = item.swaps.reduce((m, s) => m + s.remaining, 0);
  return (
    <Modal
      onClose={onClose}
      size={size}
      isOpen={isOpen}
      /* TODO: fix scroll behavior to be inside and not mess up html objkts */
      /* scrollBehavior="inside" */
    >
      <ModalOverlay />
      <ModalContent rounded="0px">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody
          style={{ position: "relative" }}
          p={0}
          mx={[4, 4, 12]}
          mt={[2, 2, 4]}
          mb={[2, 2, 4]}
        >
          {renderFullPreview(item)}
        </ModalBody>
        <ModalFooter>
          <Spacer />
          <Text>{item.title}</Text>
          <Badge ml={2} variant="outline">
            {totalRemaining}/{item.supply} available
          </Badge>
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

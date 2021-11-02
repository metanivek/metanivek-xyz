import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Link,
  Spacer,
  VStack,
  Box,
} from "@chakra-ui/react";
import Image from "../Image";
import Html from "../Html";
import Pdf from "../Pdf";
import Video from "../Video";
import { isHtml, isPdf, isVideo } from "../../lib/objkt";

function renderFullPreview(item) {
  if (isHtml(item)) {
    return <Html item={item} />;
  } else if (isPdf(item)) {
    return <Pdf item={item} />;
  } else if (isVideo(item)) {
    return <Video item={item} />;
  } else {
    return <Image item={item} objectFit="contain" highQuality={true} />;
  }
}

export default function GalleryItemModal({ item, isOpen, onClose }) {
  const size = "full";
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
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
          p={0}
          mx={[4, 4, 12]}
          mt={[4]}
          mb={[1]}
        >
          {renderFullPreview(item)}
        </ModalBody>
        <ModalFooter p={3}>
          <Spacer />
          <VStack spacing={0}>
            <Heading
              fontSize="lg"
              noOfLines={1}
              fontWeight="500"
              title={item.title}
            >
              {item.title}
            </Heading>
            <Box fontSize="xs" color="gray.500">
              <Link href={item.uris.hen}>#{item.id}</Link> &middot;{" "}
              <Link href={`https://hicetnunc.xyz/${item.creatorName}`}>
                {item.creatorName}
              </Link>
            </Box>
          </VStack>
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

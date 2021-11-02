import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { Button, Flex, Box, HStack } from "@chakra-ui/react";

const NavButton = (props) => {
  return <Button size="sm" variant="outline" {...props} />;
};

export default function Pdf({ item }) {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [height, setHeight] = useState(-1);
  const [width, setWidth] = useState(-1);
  const docEl = useRef();
  const ctrlEl = useRef();

  useEffect(() => {
    const w = docEl.current.clientWidth;
    const h = docEl.current.clientHeight;
    if (w < h) {
      setWidth(w);
    } else {
      setHeight(h - ctrlEl.current.clientHeight);
    }
  }, []);

  function onLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  const next = () => setPage(page + 1);
  const previous = () => setPage(page - 1);
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      grow={1}
      overflowX={["hidden", "auto"]}
      ref={docEl}
    >
      <Document
        options={{
          cMapUrl: "cmaps/",
          cMapPacked: true,
        }}
        onLoadSuccess={onLoadSuccess}
        file={item.artifactUri}
      >
        <Page
          pageNumber={page}
          height={height > 0 ? height : undefined}
          width={width > 0 ? width : undefined}
        />
      </Document>
      <HStack py={3} ref={ctrlEl} align="center" spacing={6}>
        <NavButton onClick={previous} disabled={page <= 1}>
          prev
        </NavButton>
        <Box fontSize="sm" textAlign="center">
          {page} of {numPages}
        </Box>
        <NavButton onClick={next} disabled={page >= numPages}>
          next
        </NavButton>
      </HStack>
    </Flex>
  );
}

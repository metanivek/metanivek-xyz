import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { Box } from "@chakra-ui/react";

export default function Pdf({ item }) {
  // TODO centralize gateway stuff
  const gateway = "https://metanivek.mypinata.cloud/ipfs/";
  const uri = item.artifact_uri.replace("ipfs://", gateway);

  console.log("pdf uri: ", uri);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <Box align="center">
      <Document
        options={{
          cMapUrl: "cmaps/",
          cMapPacked: true,
        }}
        onLoadSuccess={onDocumentLoadSuccess}
        file={uri}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </Box>
  );
}

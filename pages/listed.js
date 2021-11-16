import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { fetchAllItemsHoc } from "../lib/pages";
import {
  filterListedObjkts,
  filterSecondary,
  filterPrimary,
} from "../lib/objkt";

const Listed = ({ items }) => {
  items = filterListedObjkts(items);
  const primary = filterPrimary(items);
  const secondary = filterSecondary(items);

  return (
    <Box>
      <Header />
      <Heading mt={16} mb={4} size="md">
        Primary &middot; {primary.length}
      </Heading>
      <Gallery
        items={primary}
        collectable={true}
        empty="No pieces are currently available on primary to collect."
      />
      <Heading mt={16} mb={4} size="md">
        Secondary &middot; {secondary.length}
      </Heading>
      <Gallery
        items={secondary}
        collectable={true}
        empty="No pieces are currently available on secondary to collect."
      />
    </Box>
  );
};
export default fetchAllItemsHoc(Listed);
export { getStaticProps } from "../lib/pages";

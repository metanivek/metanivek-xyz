import { Text, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { fetchAllItemsHoc } from "../lib/pages";
import { filterListedObjkts } from "../lib/objkt";

const Listed = ({ items }) => {
  items = filterListedObjkts(items);
  return (
    <VStack>
      <Header />
      {items.length > 0 && (
        <Text padding={[4, 4, 4, 8]} textAlign="center">
          There are currently {items.length} metanivek{" "}
          {items.length > 1 ? "pieces" : "piece"} available to collect.
        </Text>
      )}
      <Gallery
        items={items}
        collectable={true}
        empty="No pieces are currently available to collect."
      />
    </VStack>
  );
};
export default fetchAllItemsHoc(Listed);
export { getStaticProps } from "../lib/pages";

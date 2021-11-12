import { Text, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { fetchAllItemsHoc } from "../lib/pages";
import { filterListedObjkts, primaryCount, secondaryCount } from "../lib/objkt";

const pluralize = function (number, singular, plural) {
  return `${number} ${number > 1 ? singular : plural}`;
};

const Listed = ({ items }) => {
  items = filterListedObjkts(items);
  const primary = primaryCount(items);
  const secondary = secondaryCount(items);
  return (
    <VStack>
      <Header />
      {items.length > 0 && (
        <Text padding={[4, 4, 4, 8]} textAlign="center">
          There are currently {pluralize(primary, "piece", "pieces")} on primary
          and {pluralize(secondary, "piece", "pieces")} on secondary markets.
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

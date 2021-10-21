import { VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { fetchAllItemsHoc } from "../lib/pages";

const Home = ({ items }) => (
  <VStack>
    <Header />
    <Gallery items={items} collectable={true} />
  </VStack>
);
export default fetchAllItemsHoc(Home);
export { getStaticProps } from "../lib/pages";

import { VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { fetchAllObjkts } from "../lib/objkt";

export async function getStaticProps() {
  return {
    props: {
      items: await fetchAllObjkts(),
    },
  };
}

export default function Home({ items }) {
  return (
    <VStack>
      <Header />
      <Gallery items={items} collectable={true} />
    </VStack>
  );
}

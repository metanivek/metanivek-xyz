import Head from "next/head";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Center, Link, VStack, Text } from "@chakra-ui/react";
import GalleryItem from "../components/GalleryItem";

import { fetchAllObjkts } from "../lib/objkt";

export async function getStaticProps() {
  return {
    props: {
      items: await fetchAllObjkts(),
    },
  };
}

function Header() {
  return (
    <Center m={4}>
      <VStack>
        <Text align="center">experimental hic et nunc gallery</Text>
        <Text align="center">
          by <Link href="https://twitter.com/metanivek">@metanivek</Link>
        </Text>
      </VStack>
    </Center>
  );
}

export default function Home({ items }) {
  return (
    <VStack>
      <Head>
        <title>metanivek hic et nunc gallery</title>
      </Head>
      <Header />
      <Container maxWidth="100vw" padding={[4, 4, 4, 8]}>
        <SimpleGrid spacing={6} columns={[1, 1, 3, 5]}>
          {items.map((item) => {
            return <GalleryItem key={item.id} item={item} />;
          })}
        </SimpleGrid>
      </Container>
    </VStack>
  );
}

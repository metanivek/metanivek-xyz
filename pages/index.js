import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Center, Link, VStack, Text } from "@chakra-ui/react";
import GalleryItem from "../components/GalleryItem";

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.hicdex.com/v1/graphql",
    cache: new InMemoryCache(),
  });
  const query = gql`
    query ObjktsWithPrice($addresses: [String!]) {
      hic_et_nunc_token(
        where: {
          mime: { _eq: "image/png" }
          creator_id: { _in: $addresses }
          token_holders: {
            quantity: { _gt: "0" }
            holder_id: { _neq: "tz1burnburnburnburnburnburnburjAYjjX" }
          }
        }
        order_by: { id: desc }
      ) {
        id
        creator_id
        title
        artifact_uri
        thumbnail_uri
        description
        supply
        swaps(
          where: { status: { _eq: "0" }, contract_version: { _neq: "1" } }
          order_by: { price: asc }
        ) {
          price
          creator_id
        }
        token_holders {
          holder_id
          quantity
        }
      }
    }
  `;
  const variables = {
    addresses: ["tz1N3xSSHguSVLYMCeNG7e3oiDfPnc6FnQip"],
  };
  const { data } = await client.query({
    query,
    variables,
  });
  return {
    props: {
      items: data["hic_et_nunc_token"],
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
        <title>metanivek hic et nunc art</title>
        <meta
          name="description"
          content="Art exploring subtle form and abstraction"
        />
      </Head>
      <Header />
      <Container maxWidth="100vw" padding={[4, 4, 4, 8]}>
        <SimpleGrid spacing={6} columns={[1, 1, 3, 4]}>
          {items.map((item) => {
            return <GalleryItem key={item.id} item={item} />;
          })}
        </SimpleGrid>
      </Container>
    </VStack>
  );
}

import Head from "next/head";
import Image from "next/image";
import {
  VStack,
  Link,
  AspectRatio,
  Container,
  Box,
  Text,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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
        }
        token_holders(where: { holder_id: { _in: $addresses } }) {
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

function imageUri(item) {
  let thumb = item.thumbnail_uri;
  let artifact = item.artifact_uri;

  if (thumb.includes("QmNrhZHUaEqxhyLfqoq1mtHSipkWHeT31LNHb1QEbDHgnc")) {
    return artifact;
  } else {
    return thumb;
  }
}

function externalItemUrl(item) {
  return `https://objkt.com/asset/hicetnunc/${item.id}`;
}

export default function Home({ items }) {
  return (
    <Container maxWidth="100vw" padding={16}>
      <Head>
        <title>metanivek hic et nunc art</title>
        <meta
          name="description"
          content="Art exploring subtle form and abstraction"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid spacing={6} columns={3}>
        {items.map((item) => {
          let swapText = `${item.swaps.length}/${item.supply}`;
          if (item.swaps.length > 0) {
            swapText = `${item.swaps.length}/${item.supply} @ ${
              item.swaps[0].price / 1000000
            } tez`;
          }
          let aspect = item.swaps.length > 0 ? 5 / 4 : 1;
          aspect = 1;
          return (
            <GridItem key={item.id} padding={4} boxShadow="base" rounded="8px">
              <AspectRatio ratio={aspect} marginBottom={4}>
                <Image
                  src={imageUri(item).replace(
                    "ipfs://",
                    "https://cloudflare-ipfs.com/ipfs/"
                  )}
                  objectFit="cover"
                  layout="fill"
                  title={item.title}
                  alt={item.title}
                />
              </AspectRatio>
              <VStack spacing={2} align="left">
                <Text fontSize="sm" noOfLines={1}>
                  <Link href={externalItemUrl(item)} isExternal>
                    {item.title}
                  </Link>
                </Text>
                <Text fontSize="xs" noOfLines={1}>
                  {swapText}
                </Text>
              </VStack>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

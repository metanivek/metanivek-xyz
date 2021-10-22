import { Center, Link, VStack, Text, HStack, Divider } from "@chakra-ui/react";
import SiteLink from "../SiteLink";

export default function Header() {
  return (
    <Center m={4}>
      <VStack>
        <Text align="center" pb={2}>
          experimental{" "}
          <Link href="https://twitter.com/metanivek">@metanivek</Link> hic et
          nunc gallery
        </Text>
        <Divider />
        <HStack spacing={6} pt={2}>
          <SiteLink href="/">All</SiteLink>
          <SiteLink href="/listed">Listed</SiteLink>
          <SiteLink href="/yours">Yours</SiteLink>
        </HStack>
      </VStack>
    </Center>
  );
}

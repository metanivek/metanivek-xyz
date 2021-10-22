import { Center, Link, VStack, Text, HStack, Divider } from "@chakra-ui/react";
import SiteLink from "../SiteLink";

function HeaderLink(props) {
  return <SiteLink boldCurrent {...props} />;
}

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
          <HeaderLink href="/">All</HeaderLink>
          <HeaderLink href="/listed">Listed</HeaderLink>
          <HeaderLink href="/yours">Yours</HeaderLink>
        </HStack>
      </VStack>
    </Center>
  );
}

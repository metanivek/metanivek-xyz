import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

function externalItemUrl(item, destination) {
  if (destination === "objkt") {
    return `https://objkt.com/asset/hicetnunc/${item.id}`;
  } else {
    return `https://hicetnunc.xyz/objkt/${item.id}`;
  }
}

export default function CollectButton({ item }) {
  const collect = (dest) => () =>
    window.open(externalItemUrl(item, dest), "_blank");
  const soldOut = item.swaps.length <= 0;
  const collectTxt = soldOut
    ? "Sold Out"
    : `Collect for ${item.swaps[0].price / 1000000} ꜩ`;
  return (
    <Menu>
      <MenuButton
        as={Button}
        fontSize="md"
        rounded="0px"
        fontWeight="normal"
        colorScheme="gray"
        variant="outline"
        disabled={soldOut}
      >
        {collectTxt}
      </MenuButton>
      <MenuList rounded="0px">
        <MenuItem size="xs" onClick={collect("hen")}>
          hic et nunc
        </MenuItem>
        <MenuItem size="xs" onClick={collect("objkt")}>
          objkt.com
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

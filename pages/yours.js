import { VStack, Button, Text, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { useState, useEffect } from "react";
import { filterOwnedObjkts } from "../lib/objkt";
import { fetchAllItemsHoc } from "../lib/pages";

function elidedAddress(address) {
  return `${address.slice(0, 5)}…${address.slice(
    address.length - 5,
    address.length
  )}`;
}

const Yours = ({ items }) => {
  const [address, setAddress] = useState(undefined);
  const [connecting, setConnecting] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);
  useEffect(() => {
    (async () => {
      const { activeAddress } = await import("../lib/tezos");
      const addr = await activeAddress();
      if (addr) {
        setAddress(addr);
      }
    })();
  }, []);

  items = address ? filterOwnedObjkts(items, address) : [];

  const connect = async () => {
    const { activeAddress, connectAccount } = await import("../lib/tezos");
    try {
      setConnecting(true);
      await connectAccount();
      const addr = await activeAddress();
      if (addr) {
        setAddress(addr);
      }
    } catch (ex) {
      console.error("error pairing", ex);
    } finally {
      setConnecting(false);
    }
  };
  const disconnect = async () => {
    const { disconnectAccount } = await import("../lib/tezos");
    try {
      setDisconnecting(true);
      await disconnectAccount();
      setAddress(undefined);
    } finally {
      setDisconnecting(false);
    }
  };

  return (
    <VStack>
      <Header />
      {address && (
        <VStack width="100%">
          <Button
            variant="outline"
            isLoading={disconnecting}
            loadingText="Disconnecting"
            onClick={disconnect}
          >
            Disconnect Account
          </Button>
          <Box fontSize="xs">{elidedAddress(address)}</Box>
          {items.length > 0 && (
            <Text padding={[4, 4, 4, 8]} textAlign="center">
              You own {items.length} metanivek{" "}
              {items.length > 1 ? "pieces" : "piece"}. Thank you. I appreciate
              your support! 💛
            </Text>
          )}
          <Gallery
            items={items}
            empty="Hmm, you do not own any metanivek pieces. 👻"
            collectable={false}
          />
        </VStack>
      )}
      {!address && (
        <VStack>
          <Button
            variant="outline"
            isLoading={connecting}
            loadingText="Connecting"
            onClick={connect}
          >
            Connect Account
          </Button>
          <Text padding={[4, 4, 4, 8]}>
            Connect to view all metanivek pieces that you own. 🤝
          </Text>
        </VStack>
      )}
    </VStack>
  );
};

export default fetchAllItemsHoc(Yours);
export { getStaticProps } from "../lib/pages";

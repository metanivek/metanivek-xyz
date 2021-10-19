import { VStack, Button, Text, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

import { useState, useEffect } from "react";

import { fetchAllObjkts, filterOwnedObjkts } from "../lib/objkt";
import {
  activeAddress,
  connectAccount,
  disconnectAccount,
  elidedAddress,
} from "../lib/tezos";

export async function getStaticProps() {
  return {
    props: {
      // to have static props, just fetch all and filter later
      // TODO probably a better way

      items: await fetchAllObjkts(),
    },
  };
}

export default function Owned({ items }) {
  const [address, setAddress] = useState(undefined);
  const [connecting, setConnecting] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);
  useEffect(() => {
    (async () => {
      const addr = await activeAddress();
      if (addr) {
        setAddress(addr);
      }
    })();
  }, []);

  items = address ? filterOwnedObjkts(items, address) : [];

  const connect = async () => {
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
        <VStack>
          <Button
            variant="outline"
            isLoading={disconnecting}
            loadingText="Disconnecting"
            onClick={disconnect}
          >
            Disconnect Account
          </Button>
          <Box fontSize="xs">{elidedAddress(address)}</Box>
          <Gallery
            items={items}
            empty="Hmm, you do not own any metanivek pieces. 👻"
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
            To view all metanivek pieces that you own.
          </Text>
        </VStack>
      )}
    </VStack>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: true },
  shadows: {
    dark: {
      base: "0 1px 3px 0 rgba(255, 255, 255, 0.01), 0 0px 2px 0 rgba(255, 255, 255, 0.1)",
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";

const customTheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: true },
  components: {
    Modal: {
      baseStyle: {
        dialogContainer: {
          //  work around mobile safari bug https://github.com/chakra-ui/chakra-ui/issues/4680
          "@supports(height: -webkit-fill-available)": {},
        },
      },
    },
  },
  colors: {
    gray: {
      neutral: "#fafafa",
    },
  },
  shadows: {
    dark: {
      base: "0 1px 3px 0 rgba(255, 255, 255, 0.01), 0 0px 2px 0 rgba(255, 255, 255, 0.1)",
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>metanivek hic et nunc gallery</title>
      </Head>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

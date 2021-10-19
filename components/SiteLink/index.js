import { useRouter } from "next/router";
import { Link as ChakraLink } from "@chakra-ui/react";
// from https://github.com/chakra-ui/chakra-ui/issues/3690
export default function SiteLink({ href, ...rest }) {
  const router = useRouter();
  const onClick = () => router.push({ pathname: href });
  return (
    <ChakraLink
      fontWeight={router.pathname === href ? "900" : "500"}
      href={href}
      onClick={onClick}
      {...rest}
    />
  );
}

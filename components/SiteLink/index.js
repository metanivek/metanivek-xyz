import { useRouter } from "next/router";
import { Link as ChakraLink } from "@chakra-ui/react";
// from https://github.com/chakra-ui/chakra-ui/issues/3690
export default function SiteLink({ href, boldCurrent, ...rest }) {
  boldCurrent = boldCurrent || false;
  const router = useRouter();
  const onClick = () => router.push({ pathname: href });
  return (
    <ChakraLink
      href={href}
      fontWeight={boldCurrent && router.pathname === href ? "900" : "500"}
      onClick={onClick}
      {...rest}
    />
  );
}

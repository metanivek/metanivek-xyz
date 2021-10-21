import { fetchAllObjkts } from "../lib/objkt";
import useSWR from "swr";

export async function getStaticProps() {
  return {
    props: {
      items: await fetchAllObjkts(),
    },
  };
}

export function fetchAllItemsHoc(component) {
  return ({ items }) => {
    const { data } = useSWR("/fetchAllObjkts", fetchAllObjkts);
    if (data) {
      items = data;
    }
    return component({ items });
  };
}

import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import GalleryItem from "../GalleryItem";

export default function Gallery({ items, empty, collectable }) {
  empty = empty || "No items.";
  return (
    <Container maxWidth="100vw" padding={[4, 4, 4, 8]}>
      <>
        {items.length > 0 && (
          <SimpleGrid spacing={6} columns={[1, 2, 3, 4, 5]}>
            {items.map((item) => {
              return (
                <GalleryItem
                  key={item.id}
                  item={item}
                  collectable={collectable}
                />
              );
            })}
          </SimpleGrid>
        )}
        {items.length === 0 && <Text align="center">{empty}</Text>}
      </>
    </Container>
  );
}

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => (
  <Box width="300px" borderRadius="10px" overflow="hidden">
    {children}
  </Box>
);

export default GameCardContainer;

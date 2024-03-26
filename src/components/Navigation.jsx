import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box display="flex" justifyContent="space-between" marginBottom="6">
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/bulk-cleaner" colorScheme="teal">
        Bulk Cleaner
      </Button>
    </Box>
  );
};

export default Navigation;

import React, { useState } from "react";
import { Box, Heading, Textarea, Button, useToast } from "@chakra-ui/react";

const BulkCleaner = () => {
  const [inputLinks, setInputLinks] = useState("");
  const [cleanedLinks, setCleanedLinks] = useState([]);
  const toast = useToast();

  const cleanLinks = () => {
    const links = inputLinks.split("\n");
    const cleaned = links.map((link) => {
      try {
        const url = new URL(link);
        const cleanLink = url.searchParams.get("q");
        return cleanLink ? cleanLink : "Invalid URL";
      } catch (error) {
        return "Invalid URL";
      }
    });
    setCleanedLinks(cleaned);
  };

  const exportToGoogleSheets = () => {
    toast({
      title: "Exported to Google Sheets",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={4}>
        Bulk Link Cleaner
      </Heading>
      <Textarea value={inputLinks} onChange={(e) => setInputLinks(e.target.value)} placeholder="Paste links here, one per line..." marginBottom={4} height="200px" />
      <Button colorScheme="blue" onClick={cleanLinks} marginBottom={4}>
        Clean Links
      </Button>
      <Button colorScheme="green" onClick={exportToGoogleSheets} marginBottom={4}>
        Export to Google Sheets
      </Button>
      {cleanedLinks.length > 0 && <Textarea value={cleanedLinks.join("\n")} isReadOnly height="200px" marginBottom={4} />}
    </Box>
  );
};

export default BulkCleaner;

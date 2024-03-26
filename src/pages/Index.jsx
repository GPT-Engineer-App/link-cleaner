import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Button, useToast } from "@chakra-ui/react";

const Index = () => {
  const [inputLink, setInputLink] = useState("");
  const [cleanedLink, setCleanedLink] = useState("");
  const toast = useToast();

  const cleanLink = () => {
    try {
      const url = new URL(inputLink);
      const cleanLink = url.searchParams.get("q");
      if (cleanLink) {
        setCleanedLink(cleanLink);
      } else {
        toast({
          title: "No link found",
          description: "Could not extract a clean link from the input.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cleanedLink);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={4}>
        Link Cleaner
      </Heading>
      <Text marginBottom={4}>Paste a messy YouTube redirect link below to extract the clean, direct link:</Text>
      <Textarea value={inputLink} onChange={(e) => setInputLink(e.target.value)} placeholder="Paste link here..." marginBottom={4} />
      <Button colorScheme="blue" onClick={cleanLink} marginBottom={4}>
        Clean Link
      </Button>
      {cleanedLink && (
        <Box borderWidth={1} borderRadius="md" padding={4}>
          <Text>Cleaned link:</Text>
          <Text as="a" href={cleanedLink} target="_blank" rel="noopener noreferrer" color="blue.500" wordBreak="break-all">
            {cleanedLink}
          </Text>
          <Button size="sm" colorScheme="green" marginTop={2} onClick={copyToClipboard}>
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Index;

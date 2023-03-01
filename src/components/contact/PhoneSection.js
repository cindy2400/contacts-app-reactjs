import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneSection = ({ marginTop, phoneNumbers }) => {
  return (
    <Accordion mt={marginTop} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Flex>
                <Center>
                  <FaPhoneAlt />
                </Center>
                <Text ml="10px">Phone number</Text>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack mt="20px" divider={<StackDivider />} spacing="4">
            {phoneNumbers.map((number) => {
              return (
                <Box key={number}>
                  <Text fontSize="sm">{number}</Text>
                </Box>
              );
            })}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PhoneSection;

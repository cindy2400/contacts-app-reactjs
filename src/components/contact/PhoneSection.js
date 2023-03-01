import { PhoneIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const PhoneSection = ({ marginTop, phoneNumbers }) => {
  return (
    <Accordion mt={marginTop} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Phone number
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack mt="20px" divider={<StackDivider />} spacing="4">
            {phoneNumbers.map((number) => {
              return (
                <Box>
                  <Text fontSize="sm">
                    <PhoneIcon /> <b>{number}</b>
                  </Text>
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

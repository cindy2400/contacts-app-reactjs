import { Box, Stack, StackDivider, Text } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

const FamilyMemberCard = ({ familyMemberData }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Family Member
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack mt="20px" divider={<StackDivider />} spacing="4">
            {familyMemberData.map((member) => {
              return (
                <Box>
                  <Text fontSize="sm">
                    Name : <b>{member.familyMemberName}</b>
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Date of birth : <b>{member.familyMemberDateOfBirth}</b>
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Status : <b>{member.familyMemberStatus}</b>
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

export default FamilyMemberCard;

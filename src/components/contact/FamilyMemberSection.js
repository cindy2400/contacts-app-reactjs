import {
  Box,
  Center,
  Flex,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaBirthdayCake, FaUserFriends } from "react-icons/fa";
import DetailContact from "./DetailContact";

const FamilyMemberSection = ({ familyMemberData }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Flex>
                <Center>
                  <FaUserFriends />
                </Center>
                <Text ml="10px">Family Member</Text>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack mt="20px" divider={<StackDivider />} spacing="4">
            {familyMemberData.map((member) => {
              return (
                <Box>
                  <Text fontSize="md" fontWeight="400">
                    {member.familyMemberName}
                  </Text>
                  <DetailContact
                    icon={<FaBirthdayCake />}
                    text={member.familyMemberDateOfBirth}
                  />
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

export default FamilyMemberSection;

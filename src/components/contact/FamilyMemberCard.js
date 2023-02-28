import { Box, Text } from "@chakra-ui/layout";

const FamilyMemberCard = ({ name, dob, status }) => {
  return (
    <Box>
      <Text fontSize="sm">
        Name : <b>{name}</b>
      </Text>
      <Text pt="2" fontSize="sm">
        Date of birth : <b>{dob}</b>
      </Text>
      <Text pt="2" fontSize="sm">
        Status : <b>{status}</b>
      </Text>
    </Box>
  );
};

export default FamilyMemberCard;

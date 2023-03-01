import { Center, Flex, Text } from "@chakra-ui/react";

const DetailContact = ({ icon, text }) => {
  return (
    <Flex mt="5px">
      <Center>{icon}</Center>
      <Text ml="10px" fontWeight="400">
        {text}
      </Text>
    </Flex>
  );
};

export default DetailContact;

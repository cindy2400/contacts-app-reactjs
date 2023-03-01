import { Center, Flex, Heading } from "@chakra-ui/layout";
import FormContact from "../components/FormContact";

const NewContact = () => {
  return (
    <>
      <Center>
        <Flex direction="column">
          <Heading mt="40px" mb="20px" size="md" textTransform="uppercase">
            Contact form
          </Heading>
          <FormContact />
        </Flex>
      </Center>
    </>
  );
};

export default NewContact;

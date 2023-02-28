import { Box, Card, CardBody, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Card>
      <CardBody>
        <Flex>
          <Heading as="h4" size="md">
            Contacts app
          </Heading>
          <Spacer />
          <Box w="75px">
            <Link to="/">Home</Link>
          </Box>
          <Box w="100px">
            <Link to="/new-contact">New contact</Link>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Header;

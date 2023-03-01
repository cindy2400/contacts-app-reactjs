import { Box, Card, CardBody, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Card className={styles.header}>
      <CardBody>
        <Flex>
          <Heading as="h4" size="md" textTransform="uppercase">
            <Link to="/">Contacts app</Link>
          </Heading>
          <Spacer />
          <Box w="75px">
            <NavLink to="/" activeClassName={styles.activeLink} exact>
              Home
            </NavLink>
          </Box>
          <Box w="120px">
            <NavLink to="/new-contact" activeClassName={styles.activeLink}>
              New contact
            </NavLink>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Header;

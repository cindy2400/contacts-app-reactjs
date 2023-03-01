import { Card, CardBody } from "@chakra-ui/card";
import {
  Center,
  Flex, Spacer, Text
} from "@chakra-ui/layout";
import FamilyMemberCard from "./FamilyMemberCard";
import PhoneCard from "./PhoneCard";

const ContactCard = ({
  name,
  ektpNumber,
  address,
  job,
  dateOfBirth,
  phoneNumber,
  familyMember,
}) => {
  return (
    <Center>
      <Card
        w="70%"
        m="20px"
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.200)",
        ]}
      >
        <CardBody>
          <Flex mb="10px">
            <Text>
              Name : <b>{name}</b>
            </Text>
            <Spacer />
            <Text>
              eKTP number : <b>{ektpNumber}</b>
            </Text>
          </Flex>
          <Flex mb="10px">
            <Text>
              Date of birth : <b>{dateOfBirth}</b>
            </Text>
            <Spacer />
            <Text>
              Job : <b>{job}</b>
            </Text>
          </Flex>
          <Text>
            Address : <b>{address}</b>
          </Text>
          <Flex mt="10px">
            {phoneNumber.map((phone) => {
              return <PhoneCard phoneNumber={phone} />;
            })}
          </Flex>
          <FamilyMemberCard familyMemberData={familyMember} />
        </CardBody>
      </Card>
    </Center>
  );
};

export default ContactCard;

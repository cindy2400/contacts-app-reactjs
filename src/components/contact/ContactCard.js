import { Card, CardBody } from "@chakra-ui/card";
import { Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import FamilyMemberSection from "./FamilyMemberSection";
import PhoneSection from "./PhoneSection";

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
      <Card w="70%" m="20px">
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
          <PhoneSection marginTop="10px" phoneNumbers={phoneNumber} />
          <FamilyMemberSection familyMemberData={familyMember} />
        </CardBody>
      </Card>
    </Center>
  );
};

export default ContactCard;

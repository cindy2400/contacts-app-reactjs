import { Card, CardBody } from "@chakra-ui/card";
import { Center, Text } from "@chakra-ui/layout";
import {
  FaAddressCard,
  FaBirthdayCake,
  FaBriefcase,
  FaHome,
} from "react-icons/fa";
import DetailContact from "./DetailContact";
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
          <Text fontWeight="500" fontSize="18px">
            {name}
          </Text>
          <DetailContact icon={<FaAddressCard />} text={ektpNumber} />
          <DetailContact icon={<FaBirthdayCake />} text={dateOfBirth} />
          <DetailContact icon={<FaBriefcase />} text={job} />
          <DetailContact icon={<FaHome />} text={address} />
          <PhoneSection marginTop="10px" phoneNumbers={phoneNumber} />
          <FamilyMemberSection familyMemberData={familyMember} />
        </CardBody>
      </Card>
    </Center>
  );
};

export default ContactCard;

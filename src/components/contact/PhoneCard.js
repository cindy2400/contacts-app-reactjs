import { Card, CardBody } from "@chakra-ui/card";
import { PhoneIcon } from "@chakra-ui/icons";

const PhoneCard = ({ phoneNumber }) => {
  return (
    <Card w="fit-content" h="fit-content" mr="10px">
      <CardBody p="10px">
        <PhoneIcon /> {phoneNumber}
      </CardBody>
    </Card>
  );
};

export default PhoneCard;

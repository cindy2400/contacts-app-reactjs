import { Center, Heading } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import ContactCard from "../components/contact/ContactCard";

const Home = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <>
      <Center>
        <Heading size="md" mt="30px" textTransform="uppercase">
          All Contacts
        </Heading>
      </Center>
      {contacts.length === 0 ? (
        <Center>
          <Heading size="md" mt="30px">
            No contact available
          </Heading>
        </Center>
      ) : (
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.name}
              name={contact.name}
              ektpNumber={contact.ektpNumber}
              address={contact.address}
              job={contact.job}
              dateOfBirth={contact.dateOfBirth}
              phoneNumber={contact.phoneNumber}
              familyMember={contact.familyMember}
            />
          );
        })
      )}
    </>
  );
};

export default Home;

import { Card } from "@chakra-ui/card";
import { Flex, Spacer } from "@chakra-ui/layout";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { contactsActions } from "../store/contacts/contacts-slice";
import ButtonForm from "./formContact/ButtonForm";
import InputForm from "./formContact/InputForm";
import SelectForm from "./formContact/SelectForm";
import TextareaForm from "./formContact/TextareaForm";

const { FormControl, FormLabel } = require("@chakra-ui/form-control");

const initialValues = {
  name: "",
  ektpNumber: "",
  address: "",
  job: "",
  dateOfBirth: "",
  phoneNumber: "",
  familyMemberName: "",
  familyMemberDateOfBirth: "",
  familyMemberStatus: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "This field is required";
  }
  if (!values.ektpNumber) {
    errors.ektpNumber = "This field is required";
  } else if (!/^[0-9]+$/.test(values.ektpNumber)) {
    errors.ektpNumber = "Only numbers are allowed";
  } else if (!/^\d{16}$/.test(values.ektpNumber)) {
    errors.ektpNumber = "Must be 16 digits";
  }
  if (!values.address) {
    errors.address = "This field is required";
  }
  if (!values.job) {
    errors.job = "This field is required";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "This field is required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "This field is required";
  } else if (!/^[0-9]+$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Only numbers are allowed";
  }
  if (!values.familyMemberName) {
    errors.familyMemberName = "This field is required";
  }
  if (!values.familyMemberDateOfBirth) {
    errors.familyMemberDateOfBirth = "This field is required";
  }
  if (!values.familyMemberStatus) {
    errors.familyMemberStatus = "This field is required";
  }

  return errors;
};

const FormContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [numberPhones, setNumberPhones] = useState([]);
  const [familyMemberData, setFamilyMemberData] = useState([]);
  const status = useSelector((state) => state.contacts.contactStatus);

  const handleDeleteNumberPhone = (i) => {
    const deleteNumberPhone = [...numberPhones];
    deleteNumberPhone.splice(i, 1);
    setNumberPhones(deleteNumberPhone);
  };

  const handleAddNumberPhone = () => {
    const addNumberPhone = [...numberPhones, []];
    setNumberPhones(addNumberPhone);
  };

  const handleChangeNumberPhone = (e, i) => {
    const changeAllPhone = [...numberPhones];
    changeAllPhone[i] = e.target.value;
    setNumberPhones(changeAllPhone);
  };

  const handleAddFamilyMemberData = () => {
    const addFamilyMemberData = [...familyMemberData, []];
    setFamilyMemberData(addFamilyMemberData);
  };

  const handleDeleteFamilyMemberData = (i) => {
    const deleteFamilyData = [...familyMemberData];
    deleteFamilyData.splice(i, 1);
    setFamilyMemberData(deleteFamilyData);
  };

  const handleChangeFamilyMemberData = (e, i) => {
    const { name, value } = e.target;
    const changeFamilyData = [...familyMemberData];
    changeFamilyData[i] = {
      ...changeFamilyData[i],
      [name]: value,
    };
    setFamilyMemberData(changeFamilyData);
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      dispatch(
        contactsActions.addNewContact({
          tempContact: values,
          addedPhoneNumbers: numberPhones,
          addedFamilyMemberData: familyMemberData,
        })
      );
      history.push("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputForm
          name="Name"
          inputType="text"
          inputName="name"
          handleChange={formik.handleChange}
          value={formik.values.name}
          handleBlur={formik.handleBlur}
          touched={formik.touched.name}
          errors={formik.errors.name}
        />
        <InputForm
          name="eKTP number"
          inputType="text"
          inputName="ektpNumber"
          handleChange={formik.handleChange}
          value={formik.values.ektpNumber}
          handleBlur={formik.handleBlur}
          touched={formik.touched.ektpNumber}
          errors={formik.errors.ektpNumber}
        />
        <TextareaForm
          name="Address"
          inputName="address"
          placeholder="Address"
          handleChange={formik.handleChange}
          value={formik.values.address}
          handleBlur={formik.handleBlur}
          touched={formik.touched.address}
          errors={formik.errors.address}
        />
        <InputForm
          name="Job"
          inputType="text"
          inputName="job"
          handleChange={formik.handleChange}
          value={formik.values.job}
          handleBlur={formik.handleBlur}
          touched={formik.touched.job}
          errors={formik.errors.job}
        />
        <InputForm
          name="Date of birth"
          inputType="date"
          inputName="dateOfBirth"
          handleChange={formik.handleChange}
          value={formik.values.dateOfBirth}
          handleBlur={formik.handleBlur}
          touched={formik.touched.dateOfBirth}
          errors={formik.errors.dateOfBirth}
        />
        <Flex>
          <InputForm
            marginRight="10px"
            name="Phone number"
            inputType="text"
            inputName="phoneNumber"
            handleChange={formik.handleChange}
            value={formik.values.phoneNumber}
            handleBlur={formik.handleBlur}
            touched={formik.touched.phoneNumber}
            errors={formik.errors.phoneNumber}
          />
          <ButtonForm
            marginTop="50px"
            backgroundColor="green.300"
            onClick={handleAddNumberPhone}
            name="Add more"
          />
        </Flex>

        {numberPhones.map((number, i) => {
          return (
            <div key={i}>
              <Flex>
                <InputForm
                  marginRight="10px"
                  inputType="text"
                  inputName="phoneNumber"
                  placeholder="Phone number"
                  handleChange={(e) => handleChangeNumberPhone(e, i)}
                  value={numberPhones[i]}
                />
                <ButtonForm
                  marginTop="20px"
                  backgroundColor="red.400"
                  onClick={() => handleDeleteNumberPhone(i)}
                  name="X"
                />
              </Flex>
            </div>
          );
        })}

        <Flex mt="20px" mb="10px">
          <FormLabel>Family member</FormLabel>
          <Spacer />
          <ButtonForm
            backgroundColor="green.300"
            onClick={handleAddFamilyMemberData}
            name="Add more"
          />
        </Flex>

        <InputForm
          inputType="text"
          inputName="familyMemberName"
          placeholder="Name"
          handleChange={formik.handleChange}
          value={formik.values.familyMemberName}
          handleBlur={formik.handleBlur}
          touched={formik.touched.familyMemberName}
          errors={formik.errors.familyMemberName}
        />
        <InputForm
          inputType="date"
          inputName="familyMemberDateOfBirth"
          placeholder="Date of birth"
          handleChange={formik.handleChange}
          value={formik.values.familyMemberDateOfBirth}
          handleBlur={formik.handleBlur}
          touched={formik.touched.familyMemberDateOfBirth}
          errors={formik.errors.familyMemberDateOfBirth}
        />

        <SelectForm
          marginTop="10px"
          placeholder="Select option"
          inputName="familyMemberStatus"
          handleChange={formik.handleChange}
          status={status}
          value={formik.values.familyMemberStatus}
          handleBlur={formik.handleBlur}
          touched={formik.touched.familyMemberStatus}
          errors={formik.errors.familyMemberStatus}
        />

        {familyMemberData.map((data, i) => {
          return (
            <Card variant="outline" p="10px" mt="10px" key={i}>
              <InputForm
                inputType="text"
                inputName="familyMemberName"
                placeholder="Name"
                value={familyMemberData[i].familyMemberName}
                handleChange={(e) => handleChangeFamilyMemberData(e, i)}
              />
              <InputForm
                inputType="date"
                inputName="familyMemberDateOfBirth"
                placeholder="Date of birth"
                value={familyMemberData[i].familyMemberDateOfBirth}
                handleChange={(e) => handleChangeFamilyMemberData(e, i)}
              />
              <SelectForm
                marginTop="10px"
                placeholder="Select option"
                inputName="familyMemberStatus"
                handleChange={(e) => handleChangeFamilyMemberData(e, i)}
                status={status}
                value={familyMemberData[i].familyMemberStatus}
              />
              <ButtonForm
                marginTop="10px"
                width="full"
                backgroundColor="red.400"
                onClick={() => handleDeleteFamilyMemberData(i)}
                name="Delete"
              />
            </Card>
          );
        })}

        <ButtonForm
          marginTop="50px"
          marginBottom="50px"
          type="submit"
          width="full"
          colorScheme="teal"
          name="Submit"
        />
      </FormControl>
    </form>
  );
};

export default FormContact;

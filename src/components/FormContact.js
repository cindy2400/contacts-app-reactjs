import { Button } from "@chakra-ui/button";
import { Center, Flex, Spacer } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { useFormik } from "formik";
import { useState } from "react";

const {
  FormControl,
  FormLabel,
  FormHelperText,
} = require("@chakra-ui/form-control");
const { Input } = require("@chakra-ui/input");

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
  } else if (!/^[0-9]+$/.test(values.ektpNumber)) {
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

const onSubmit = (values) => {
  console.log(values);
};

const FormContact = () => {
  const [numberPhones, setNumberPhones] = useState([]);
  const [familyMemberData, setFamilyMemberData] = useState([]);
  const status = ["Brother", "Sister", "Parent", "Child", "Spouse"];

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

  console.log(familyMemberData);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Center>
      <form w="50%" onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel mt="20px">Name</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <FormHelperText color="red">{formik.errors.name}</FormHelperText>
          ) : (
            ""
          )}
          <FormLabel mt="20px">eKTP number</FormLabel>
          <Input
            type="text"
            name="ektpNumber"
            onChange={formik.handleChange}
            value={formik.values.ektpNumber}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ektpNumber && formik.errors.ektpNumber ? (
            <FormHelperText color="red">
              {formik.errors.ektpNumber}
            </FormHelperText>
          ) : (
            ""
          )}
          <FormLabel mt="20px">Address</FormLabel>
          <Textarea
            placeholder="Address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <FormHelperText color="red">{formik.errors.address}</FormHelperText>
          ) : (
            ""
          )}
          <FormLabel mt="20px">Job</FormLabel>
          <Input
            type="text"
            name="job"
            onChange={formik.handleChange}
            value={formik.values.job}
            onBlur={formik.handleBlur}
          />
          {formik.touched.job && formik.errors.job ? (
            <FormHelperText color="red">{formik.errors.job}</FormHelperText>
          ) : (
            ""
          )}
          <FormLabel mt="20px">Date of birth</FormLabel>
          <Input
            type="date"
            name="dateOfBirth"
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <FormHelperText color="red">
              {formik.errors.dateOfBirth}
            </FormHelperText>
          ) : (
            ""
          )}
          <FormLabel mt="20px">Phone number</FormLabel>
          <Flex>
            <Input
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
            />
            <Button color="blue" onClick={handleAddNumberPhone}>
              Add more
            </Button>
          </Flex>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <FormHelperText color="red">
              {formik.errors.phoneNumber}
            </FormHelperText>
          ) : (
            ""
          )}

          {/* -------------------------------------- */}

          {numberPhones.map((number, i) => {
            return (
              <div key={i}>
                <Flex>
                  <Input
                    mt="10px"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    onChange={(e) => handleChangeNumberPhone(e, i)}
                    value={numberPhones[i]}
                    onBlur={formik.handleBlur}
                  />
                  <Button
                    mt="10px"
                    color="red"
                    onClick={() => handleDeleteNumberPhone(i)}
                  >
                    X
                  </Button>
                </Flex>
              </div>
            );
          })}

          {/* -------------------------------------------- */}

          <Flex mt="20px" mb="10px">
            <FormLabel>Family member</FormLabel>
            <Spacer />
            <Button color="blue" onClick={handleAddFamilyMemberData}>
              Add more
            </Button>
          </Flex>

          <Input
            type="text"
            name="familyMemberName"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.familyMemberName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.familyMemberName && formik.errors.familyMemberName ? (
            <FormHelperText color="red">
              {formik.errors.familyMemberName}
            </FormHelperText>
          ) : (
            ""
          )}
          <Input
            type="date"
            name="familyMemberDateOfBirth"
            placeholder="Date of birth"
            onChange={formik.handleChange}
            value={formik.values.familyMemberDateOfBirth}
            onBlur={formik.handleBlur}
          />
          {formik.touched.familyMemberDateOfBirth &&
          formik.errors.familyMemberDateOfBirth ? (
            <FormHelperText color="red">
              {formik.errors.familyMemberDateOfBirth}
            </FormHelperText>
          ) : (
            ""
          )}
          <Select
            placeholder="Select option"
            onChange={formik.handleChange}
            value={formik.values.familyMemberStatus}
            onBlur={formik.handleBlur}
          >
            {status.map((sts) => {
              return (
                <option key={sts} value={sts}>
                  {sts}
                </option>
              );
            })}
          </Select>
          {formik.touched.familyMemberStatus &&
          formik.errors.familyMemberStatus ? (
            <FormHelperText color="red">
              {formik.errors.familyMemberStatus}
            </FormHelperText>
          ) : (
            ""
          )}

          {/* --------------------------------------------------------------- */}

          {familyMemberData.map((data, i) => {
            return (
              <div key={i}>
                <Input
                  mt="20px"
                  type="text"
                  name="familyMemberName"
                  placeholder="Name"
                  onChange={(e) => handleChangeFamilyMemberData(e, i)}
                />
                <Input
                  type="date"
                  name="familyMemberDateOfBirth"
                  placeholder="Date of birth"
                  onChange={(e) => handleChangeFamilyMemberData(e, i)}
                />
                <Select
                  placeholder="Select option"
                  name="familyMemberStatus"
                  onChange={(e) => handleChangeFamilyMemberData(e, i)}
                >
                  {status.map((sts) => {
                    return (
                      <option key={sts} value={sts}>
                        {sts}
                      </option>
                    );
                  })}
                </Select>
                <Button
                  w="full"
                  color="red"
                  onClick={() => handleDeleteFamilyMemberData(i)}
                >
                  Delete
                </Button>
              </div>
            );
          })}

          {/* --------------------------------------------------------------- */}

          <Button w="full" colorScheme="teal" mt="50px" mb="50px" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </Center>
  );
};

export default FormContact;

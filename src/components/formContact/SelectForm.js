import { FormControl, FormHelperText } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";

const SelectForm = ({
  inputName,
  placeholder,
  handleChange,
  value,
  handleBlur,
  touched,
  errors,
  status,
  marginTop,
}) => {
  return (
    <>
      <FormControl mt={marginTop}>
        <Select
          placeholder={placeholder}
          name={inputName}
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
        >
          {status.map((sts) => {
            return (
              <option key={sts} value={sts}>
                {sts}
              </option>
            );
          })}
        </Select>
        {touched && errors ? (
          <FormHelperText color="red">{errors}</FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
    </>
  );
};

export default SelectForm;

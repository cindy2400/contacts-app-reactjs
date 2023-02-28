import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

const InputForm = ({
  name,
  inputType,
  inputName,
  placeholder,
  handleChange,
  value,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel mt="20px">{name}</FormLabel>
        <Input
          type={inputType}
          name={inputName}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
        />
        {touched && errors ? (
          <FormHelperText color="red">{errors}</FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
    </>
  );
};

export default InputForm;

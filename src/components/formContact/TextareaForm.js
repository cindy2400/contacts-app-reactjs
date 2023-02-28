import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/textarea";

const TextareaForm = ({
  name,
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
        <Textarea
          placeholder={placeholder}
          name={inputName}
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

export default TextareaForm;

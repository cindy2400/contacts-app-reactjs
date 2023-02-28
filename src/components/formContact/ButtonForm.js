import { Button } from "@chakra-ui/button";

const ButtonForm = ({
  width,
  type,
  marginTop,
  marginBottom,
  backgroundColor,
  colorScheme,
  onClick,
  name,
}) => {
  return (
    <Button
      w={width}
      type={type}
      mt={marginTop}
      mb={marginBottom}
      colorScheme={colorScheme}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default ButtonForm;

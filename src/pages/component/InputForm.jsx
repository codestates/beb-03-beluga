import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

function InputForm({ item }) {
  return (
    <FormControl>
      <InputLabel htmlFor={item.id}>{item.content}</InputLabel>
      <Input
        id={item.id}
        type={item.type}
        onChange={(e) => {
          item.handler(e.target);
        }}
      ></Input>
      <FormHelperText>{item.helperText}</FormHelperText>
    </FormControl>
  );
}

export default InputForm;

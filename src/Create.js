import {
  FormControl,
  InputLabel,
  Input,
  Stack,
  FormHelperText,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";

function Create() {
  const [imgSrc, setImgSrc] = useState(
    "https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png"
  );

  const handleImagePreview = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <Stack
      sx={{ border: 1, width: 4 / 5 }}
      margin="auto"
      alignItems="center"
      component="form"
      marginBottom={10}
    >
      <img src={imgSrc} alt="preview-img" height={200} width={200} />

      <FormControl sx={{ width: 4 / 5 }}>
        <Input
          id="nft-image"
          type="file"
          onChange={(e) => {
            handleImagePreview(e.target.files[0]);
          }}
        ></Input>
        <FormHelperText id="nft-image-helper">
          이미지를 선택해주세요
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ width: 4 / 5 }}>
        <InputLabel htmlFor="nft-name">NFT-Name</InputLabel>
        <Input id="nft-name"></Input>
        <FormHelperText id="nft-name-helper">
          NFT의 이름을 입력해주세요
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ width: 4 / 5 }}>
        <InputLabel htmlFor="external-link">External-Link</InputLabel>
        <Input id="external-link"></Input>
        <FormHelperText id="external-link-helper">
          외부 링크를 입력해주세요
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ width: 4 / 5 }}>
        <InputLabel htmlFor="description">Description</InputLabel>
        <Input id="description" type=""></Input>
        <FormHelperText id="desciption-link-helper">
          설명을 입력해주세요
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ width: 4 / 5 }}>
        <InputLabel id="select-blockchain">Block-chain</InputLabel>
        <Select
          labelId="select-blockchain-label"
          id="demo-simple-select"
          label="Block-chain"
        >
          <MenuItem value={"Ethereum"}>Ethereum</MenuItem>
          <MenuItem value={"Klaytn"}>Klaytn</MenuItem>
        </Select>
        <FormHelperText id="blockchain-helper">
          블록체인(플랫폼)을 선택해주세요
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ width: 4 / 5 }}>
        <InputLabel id="select-token-type">Token-Type</InputLabel>
        <Select
          labelId="select-type-label"
          id="demo-simple-select"
          label="Block-chain"
        >
          <MenuItem value={"ERC-721"}>ERC-721</MenuItem>
          <MenuItem value={"ERC-20"}>ERC-20</MenuItem>
        </Select>
        <FormHelperText id="token-type-helper">
          토큰을 선택해주세요
        </FormHelperText>
      </FormControl>
      <Button>CREATE</Button>
    </Stack>
  );
}

export default Create;

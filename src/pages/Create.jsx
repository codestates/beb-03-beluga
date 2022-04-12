import {
  FormControl,
  InputLabel,
  Stack,
  FormHelperText,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import InputForm from "./component/InputForm";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

function Create() {
  const baseImage =
    "https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png";
  const [imgSrc, setImgSrc] = useState(baseImage);
  const [fileBlob, setFileBlob] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [nftName, setNftName] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [description, setDescription] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [tokenType, setTokenType] = useState("");

  const handleImagePreview = (target) => {
    const fileBlob = target.files[0];
    setFileBlob(fileBlob);
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  const handleChangeNftName = (target) => {
    setNftName(target.value);
  };
  const handleChangeExternalLink = (target) => {
    setExternalLink(target.value);
  };

  const handleChangeDescription = (target) => {
    setDescription(target.value);
  };

  const handleChangeBlockchain = (input) => {
    setBlockchain(input);
  };

  const handleChangeTokenType = (input) => {
    setTokenType(input);
  };
  const handleCreateButton = async () => {
    if (
      imgSrc === baseImage ||
      nftName === "" ||
      blockchain === "" ||
      tokenType === ""
    ) {
      // 빈칸 채우라고 띄움
    }
    try {
      const added = await client.add(fileBlob);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setImgUrl(url);
      console.log(url);
      const metaData = {
        name: nftName,
        description: description,
        image: url,
        attributes: [
          {
            external_link: externalLink,
            blockchain: blockchain,
            token_type: tokenType,
          },
        ],
      };
      console.log(metaData);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const contents = [
    {
      content: "",
      id: "nft-image",
      type: "file",
      handler: handleImagePreview,
      helperText: "이미지를 선택해주세요",
    },
    {
      content: "NFT-Name",
      id: "nft-name",
      type: "text",
      handler: handleChangeNftName,
      helperText: "NFT의 이름을 입력해주세요",
    },
    {
      content: "External-Link",
      id: "external-link",
      type: "url",
      handler: handleChangeExternalLink,
      helperText: "외부 링크를 입력해주세요",
    },
    {
      content: "Description",
      id: "description",
      type: "text",
      handler: handleChangeDescription,
      helperText: "간단한 설명을 입력해주세요",
    },
  ];

  return (
    <Stack
      sx={{ border: 1, width: 4 / 5 }}
      margin="auto"
      alignItems="center"
      component="form"
      marginBottom={10}
    >
      <img src={imgSrc} alt="preview-img" height={200} width={200} />

      <Stack sx={{ width: 4 / 5 }}>
        {contents.map((item, idx) => (
          <InputForm key={idx} item={item}></InputForm>
        ))}
      </Stack>

      <FormControl sx={{ width: 4 / 5 }}>
        <InputLabel id="select-blockchain">Block-chain</InputLabel>
        <Select
          labelId="select-blockchain-label"
          id="blockchain-select"
          label="Block-chain"
          onChange={(e) => {
            handleChangeBlockchain(e.target.value);
          }}
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
          id="token-select"
          label="Token"
          onChange={(e) => {
            handleChangeTokenType(e.target.value);
          }}
        >
          <MenuItem value={"ERC-721"}>ERC-721</MenuItem>
          <MenuItem value={"ERC-20"}>ERC-20</MenuItem>
        </Select>
        <FormHelperText id="token-type-helper">
          토큰을 선택해주세요
        </FormHelperText>
      </FormControl>
      <Button onClick={handleCreateButton}>CREATE</Button>
    </Stack>
  );
}

export default Create;

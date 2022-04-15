import {
  FormControl,
  InputLabel,
  Stack,
  FormHelperText,
  Select,
  MenuItem,
  Button,
  Alert,
  Input,
} from "@mui/material";
import { useState } from "react";
import InputForm from "./component/InputForm";
import { create } from "ipfs-http-client";
import { erc721Abi, erc721addr } from "../erc721/erc721";
import CircularProgress from "@material-ui/core/CircularProgress";
import SuccessMinting from "./component/SuccessMinting";
const client = create("https://ipfs.infura.io:5001/api/v0");

function Create({ account, web3, caver }) {
  const baseImage =
    "https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png";
  const [imgSrc, setImgSrc] = useState(baseImage);
  const [fileBlob, setFileBlob] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [nftName, setNftName] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [description, setDescription] = useState("");
  const [blockchain, setBlockchain] = useState("Ethereum");
  const [tokenType, setTokenType] = useState("ERC-721");
  const [alert, setAlert] = useState(false);
  const [waitNftMinting, setWaitNftMinting] = useState(false);
  const [successMinting, setSuccessMinting] = useState(false);

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
    if (account === "" || imgSrc === baseImage || nftName === "") {
      setAlert(true);
    } else {
      setAlert(false);
      try {
        const added = await client.add(fileBlob);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        setImgUrl(url);
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
        const metaRecv = JSON.stringify(metaData);
        const added2 = await client.add(metaRecv);
        const tokenURI = `https://ipfs.infura.io/ipfs/${added2.path}`;

        const tokenContract = await new web3.eth.Contract(
          erc721Abi,
          erc721addr
        );
        setWaitNftMinting(true);
        setSuccessMinting(false);
        const nft = await tokenContract.methods
          .mintNFT(account, tokenURI)
          .send({ from: account });
        setSuccessMinting(true);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  const resetWaitNftMinting = () => {
    setImgSrc(baseImage);
    setNftName("");
    setWaitNftMinting(false);
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

  return waitNftMinting ? (
    successMinting ? (
      <SuccessMinting reset={resetWaitNftMinting}></SuccessMinting>
    ) : (
      <Stack alignItems="center">
        <CircularProgress></CircularProgress>
        NFT 민팅 중... Please Wait...
      </Stack>
    )
  ) : (
    <Stack
      sx={{
        height: "100vh",
        maxWidth: 1200,
        width: "80%",
        mb: 5,
        mt: 2,
      }}
      margin="auto"
      alignItems="center"
      justifyContent="center"
      component="form"
    >
      <label>
        <FormControl>
          <img
            src={imgSrc}
            alt="preview-img"
            style={{ height: 200, width: 200 }}
          />
          <Input
            type="file"
            sx={{ display: "none" }}
            onChange={(e) => {
              handleImagePreview(e.target);
            }}
          ></Input>
        </FormControl>
      </label>

      <Stack
        sx={{
          height: "50%",
          width: "80%",
          mb: 6,
          mt: 3,
          justifyContent: "space-around",
        }}
      >
        {contents.map((item, idx) => (
          <InputForm key={idx} item={item} />
        ))}
      </Stack>

      <FormControl sx={{ width: "80%", marginBottom: 8 }}>
        <InputLabel id="select-blockchain">Block-chain</InputLabel>
        <Select
          labelId="select-blockchain-label"
          id="blockchain-select"
          label="Block-chain"
          defaultValue="Ethereum"
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

      <FormControl sx={{ width: "80%", marginBottom: 8 }}>
        <InputLabel id="select-token-type">Token-Type</InputLabel>
        <Select
          labelId="select-type-label"
          id="token-select"
          label="Token"
          defaultValue="ERC-721"
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
      {alert ? (
        <Alert
          severity="error"
          onClose={() => {
            setAlert(false);
          }}
        >
          로그인, 사진, 이름은 필수입니다.
        </Alert>
      ) : (
        ""
      )}
      <Button sx={{ fontSize: 20, mt: 2 }} onClick={handleCreateButton}>
        CREATE
      </Button>
    </Stack>
  );
}

export default Create;

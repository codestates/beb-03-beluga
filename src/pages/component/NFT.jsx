import { Stack } from "@mui/material";
import { Button, Input } from '@mui/material';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loading from "./Loading";
import { erc721Abi, erc721addr } from "../../erc721/erc721";
import fetchMetaData from "../../fetchMetaData/fetchMetaData";


const NFT = ({ web3, account }) => {
    const param = useParams().id;
    const [data, setData] = useState({});
    const [onModalImg, setOnModalImg] = useState(false);
    const [to, setTo] = useState("");

    useEffect(() => {
        async function fetchData() {
            const tokenContract = await new web3.eth.Contract(
                erc721Abi,
                erc721addr
            );
            let tokenOwner = await tokenContract.methods
                .ownerOf(param)
                .call();
            let tokenURI = await tokenContract.methods
                .tokenURI(param)
                .call();

            const tokenMetaData = fetchMetaData(tokenURI);
            tokenMetaData
                .then((el) => el.json())
                .then(ele => setData({ ...ele, tokenId: param, tokenOwner }));
        }
        fetchData();
      }, [web3, param]);

    const handleSend = async (tokenId) => {

        if(account !== data.tokenOwner){
            alert("당신은 이 NFT의 주인이 아닙니다!");
            return;
        }
        
        const tokenContractSend = await new web3.eth.Contract(
            erc721Abi,
            erc721addr,
            {
                from: account,
            }
        );

        try {
            tokenContractSend.methods
            .transferFrom(account, to, tokenId)
            .send({
                from: account,
            })
            .on("receipt", (receipt) => {
                setTo("");
            });
        } catch {
            if(account === ""){
                alert("이 서비스는 로그인이 필요합니다!");   
            } else if(account !== data.tokenOwner){
                alert("당신은 이 NFT의 주인이 아닙니다!");
            } else {
                alert("주소를 잘못 입력하신 게 아닐까요?");
            }
        }
      };

    return (data.name === undefined ?  <Loading/> :  
    <Stack>
        {onModalImg ? 
            <img src={data.image} alt={data.name} onClick={() => setOnModalImg(false)} 
                style={{position: "absolute",top:0, left:0, right:0, bottom:0, margin:"auto" ,zIndex: "1", border: "1px solid black"}}/> 
            : null}
        <Stack flexDirection="row" sx={{margin: 3, opacity: onModalImg ? 0.5 : 1}}>
            <Stack textAlign="center" sx={{margin: 3}}>
                <img src={data.image} style={{width: 600, height: 600, margin: 5}} alt={data.name} onClick={() => setOnModalImg(true)} />
                <span>이미지 클릭시 원본 이미지를 볼 수 있습니다.</span>
            </Stack>
            <Stack alignItems="center" textAlign="center" sx={{ width:"100%", border: 1, margin: 5, padding: 3, borderRadius: 5}}>
                <Stack sx={{padding: 1.5, borderRadius: 3, fontSize: 45}}>
                    NFT name : {data.name}
                </Stack>
                <Stack sx={{padding: 1.5, borderRadius: 3, fontSize: 15}}>
                    NFT owner : {data.tokenOwner}
                </Stack>
                <Stack sx={{padding: 3, margin: 3}}>
                    {data.description}
                </Stack>
                <Stack sx={{border: 1, padding: 4.5, marginTop:5, borderRadius: 3}}>
                    <Stack sx={{borderBottom: 1, width:"fit-content", marginRight:"auto", marginLeft:"auto", padding: 0.5}}>attributes</Stack>
                    <p style={{color: "purple"}}>{data.attributes[0].external_link}</p>
                    <p style={{color: "purple"}}>{data.attributes[0].blockchain}</p>
                    <p style={{color: "purple"}}>{data.attributes[0].token_type}</p>
                </Stack>
                <Stack flexDirection="row" sx={{margin: 3}}>
                    <Input placeholder="이 토큰을 전송할 주소" onChange={e => setTo(e.target.value)} sx={{marginRight: 3, width: 500}}/>
                    <Button variant="contained" sx={{width:110}} onClick={() => handleSend(data.tokenId)}>Send</Button>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
    );
}


export default NFT;
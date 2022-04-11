import { Stack } from "@mui/material";
import { Button, Input } from '@mui/material';
import dummydata from "../dummydata/dummydata";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const NFT = () => {
    const param = useParams().id;
    const data = dummydata.filter(el => el.id === param)[0];
    const [onModalImg, setOnModalImg] = useState(false);

    return (   
    <Stack>
        {onModalImg ? 
            <img src={data.image} alt={data.name} onClick={() => setOnModalImg(false)} 
                style={{position: "absolute",top:0, left:0, right:0, bottom:0, margin:"auto" ,zIndex: "1", border: "1px solid black"}}/> 
            : null}
        <Stack flexDirection="row" sx={{margin: 3}}>
            <Stack textAlign="center" sx={{margin: 3}}>
                <img src={data.image} style={{width: 600, height: 600, margin: 5}} alt={data.name} onClick={() => setOnModalImg(true)} />
                <span>이미지 클릭시 원본 이미지를 볼 수 있습니다.</span>
            </Stack>
            <Stack alignItems="center" textAlign="center" sx={{ width:"100%", border: 1, margin: 5, padding: 3, borderRadius: 5}}>
                <Stack flexDirection="row" sx={{margin: 3}}>
                    <Input placeholder="토큰을 전송할 주소" sx={{marginRight: 3, width: 500}}/>
                    <Button variant="contained" sx={{width:110}}>Send</Button>
                </Stack>
                <Stack sx={{padding: 1.5, borderRadius: 3, fontSize: 45}}>
                    NFT name : {data.name}
                </Stack>
                <Stack sx={{border: 1, padding: 4.5, marginTop:5, borderRadius: 3}}>
                    <Stack sx={{borderBottom: 1, width:"fit-content", marginRight:"auto", marginLeft:"auto", padding: 0.5}}>거래 히스토리</Stack>
                    {data.history.map((el, idx) => <p key={idx} style={{color: "purple"}}>{`${idx+ 1}번째 소유자 : ${el}`}</p>)}
                </Stack>
                <Stack sx={{padding: 3, margin: 3}}>
                    {data.description}
                </Stack>
                <Stack sx={{border: 1, borderRadius: 5, width:"100%"}}>
                    {data.detail.map((el, idx) => <p key={idx}>{el}</p>)}
                </Stack>
            </Stack>
        </Stack>
    </Stack>
    );
}


export default NFT;
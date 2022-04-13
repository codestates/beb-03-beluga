import { Stack } from "@mui/material";
import Header from "./pages/component/Header";
import Footer from "./pages/component/Footer";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NFTList from "./pages/NFTList";
import Web3 from "web3";
import NFT from "./pages/component/NFT";
import Create from "./pages/Create";
import Caver from "caver-js";
import { erc721Abi, erc721addr } from "./erc721/erc721";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [web3, setWeb3] = useState();
  const [caver, setCaver] = useState();
  const [account, setAccount] = useState("");

  //web3 객체 생성
  useEffect(() => {
    //window.ethereum이 있다면
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum); //새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  //caber 객체 생성
  useEffect(() => {
    if (typeof window.klaytn !== "undefined") {
      try {
        const newCaver = new Caver(window.klaytn);
        setCaver(newCaver);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(async () => {
    if (web3 !== undefined) {
      const tokenContract = await new web3.eth.Contract(erc721Abi, erc721addr);
      const name = await tokenContract.methods.name().call();
      const symbol = await tokenContract.methods.symbol().call();
      const totalSupply = await tokenContract.methods.totalSupply().call();
    }
  }, [web3]);

  const connectMetaMask = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
    setIsLogin(true);
  };

  const connectKaikas = async () => {
    let accounts = await window.klaytn.enable();

    setAccount(accounts[0]);
    setIsLogin(true);
  };

  const handleLogOut = () => {
    setIsLogin(false);
    setAccount("");
  };

  return (
    <>
      <Switch>
        <Stack
          sx={{
            minHeight: "100vh",
            width: "100%",
            position: "relative",
          }}
        >
          <Header
            isLogin={isLogin}
            handleLogOut={handleLogOut}
            connectMetaMask={connectMetaMask}
            connectKaikas={connectKaikas}
          />
          <Stack
            alignItems="center"
            sx={{
              height: "auto",
              minHeight: "80%",
              width: "100%",
              marginTop: 4,
              marginBottom: 30,
            }}
          >
            <Route exact path="/">
              <NFTList web3={web3} caver={caver} />
            </Route>
            <Route path="/create">
              <Create account={account} web3={web3} caver={caver} />
            </Route>
            <Route path="/list/:id">
              <NFT web3={web3} account={account}/>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/profile/list">
              <NFTList account={account} web3={web3} caver={caver} />
            </Route>
          </Stack>
          <Footer />
        </Stack>
      </Switch>
    </>
  );
}

export default App;

import { Stack } from "@mui/material";
import Header from "./pages/component/Header";
import Footer from "./pages/component/Footer";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NFTList from "./pages/NFTList";
import Web3 from "web3";
import NFT from "./pages/component/NFT";
import Create from "./pages/Create";
import Caver from "caver-js";

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
              <NFTList />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/list/:id">
              <NFT />
            </Route>
            <Route path="/profile">프로필 컴포넌트</Route>
          </Stack>
          <Footer />
        </Stack>
      </Switch>
    </>
  );
}

export default App;
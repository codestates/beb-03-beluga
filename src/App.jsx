import { Stack } from "@mui/material";
import Header from "./pages/component/Header";
import Footer from "./pages/component/Footer";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NFTList from "./pages/NFTList";
import Web3 from "web3";
import NFT from './pages/component/NFT';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
    setIsLogin(true);
  };

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

  return (
    <Switch>
      <Stack>
        <Header isLogin={isLogin} connectWallet={connectWallet} />
        <Stack
          sx={{ height: "85vh", marginTop: 4, marginBottom: 2, border: 1 }}
        >
          <Route exact path="/">
            <NFTList />
          </Route>
          <Route path="/:id">
                    <NFT/>
          </Route>
          <Route path="/create">생성 컴포넌트 넣기</Route>
          <Route path="/profile">프로필 컴포넌트</Route>
        </Stack>
        <Footer />
      </Stack>
    </Switch>
  );
}

export default App;

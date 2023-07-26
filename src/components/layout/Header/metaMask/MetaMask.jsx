import { useState, React, useEffect } from "react";
import BTN from "../../../common/BTN/BTN";
import detectEthereumProvider from "@metamask/detect-provider";

const provider = await detectEthereumProvider();

function MetaMask() {
  const [logIn, setLogIn] = useState("");
  useEffect(() => {
    checkIsLogged();
  }, []);

  async function checkIsLogged() {
    if (provider) {
      const checkAccount = await window.ethereum.request({
        method: "eth_accounts",
        params: [],
      });
      console.log(checkAccount);
      if (checkAccount.length > 0) {
        setLogIn(<div>{checkAccount}</div>);
      } else {
        setLogIn(
          <BTN isable={true} whenClicked={() => onClick()}>
            Connect to Metamask
          </BTN>
        );
      }
    } else {
      console.log("install metamask!");
    }
  }

  async function onClick() {
    const price = await window.ethereum.request({
      method: "eth_gasPrice",
      params: [],
    });
    console.log(price);
    setLogIn(
      <BTN isable={false} whenClicked={onClick}>
        Connect to Metamask
      </BTN>
    );
    await getAccount();

    checkIsLogged();
  }

  async function getAccount() {
    const accounts = await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];

    console.log(account);
  }
  return <>{logIn}</>;
}

export default MetaMask;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Mint a HD worm`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState([
    {
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    },
    {
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    },
  ]);

  const claimNFTs = (i) => {
    let cost = CONFIG[i].WEI_COST;
    let gasLimit = CONFIG[i].GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG[i].NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG[i].CONTRACT_ADDRESS,
        type: "0x0",
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(`LETS GO! You just wormed up!`);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  });

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const bg = () => {
    let date = new Date();
    let hours = date.getHours();
    let bg;

    if (hours < 6) {
      bg = "./images/bg1.png";
    } else if (hours >= 6 && hours < 12) {
      bg = "./images/bg2.png";
    } else if (hours >= 12 && hours < 18) {
      bg = "./images/bg3.png";
    } else if (hours >= 18 && hours < 24) {
      bg = "./images/bg4.png";
    }

    return bg;
  };

  const setBgColor = () => {
    let date = new Date();
    let hours = date.getHours();
    let bgColor;

    if (hours < 6) {
      bgColor = "#362FBB";
    } else if (hours >= 6 && hours < 12) {
      bgColor = "#FFB845";
    } else if (hours >= 12 && hours < 18) {
      bgColor = "#F97698";
    } else if (hours >= 18 && hours < 24) {
      bgColor = "#712275";
    }

    return bgColor;
  };

  let bwprices = [
    "0",
    "1000000000000000000",
    "5000000000000000000",
    "10000000000000000000",
  ];
  const [bwprice, setBwprice] = useState("10000000000000000000");
  const handlePriceChange = (e) => {
    setBwprice(e.target.value);
  };

  CONFIG[1].WEI_COST = bwprice;

  const hideLog = () => {
    let overlay = document.querySelector(".log");
    overlay.style.display = "none";
  };

  return (
    <div className="App" style={{ backgroundColor: setBgColor() }}>
      <img id="sun" src="./images/sun.png" />
      <div id="City">
        <img src={bg()} />
        <img src="./images/city.png" />
        <div id="glow" style={{ backgroundColor: setBgColor() }}></div>
      </div>
      <div className="log">
        {blockchain.account === "" || blockchain.smartContract === null ? (
          <>
            <button
              id="connect-btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect(0));
                getData();
              }}
            >
              DIG IN
            </button>
            <p style={{ color: "white" }}>
              One must operate in the Fantom network to enter.
            </p>
          </>
        ) : (
          <>{hideLog()}</>
        )}
      </div>
      <div className="site">
        <div className="controls">
          <a id="controlslink" href="https://twitter.com/crypto_wormz">
            <img src="./images/twitter.png" alt="" />
          </a>
          <a id="controlslink" href="https://discord.com/invite/b4Vt847Peg">
            <img src="./images/discord.png" alt="" />
          </a>
          <a id="controlslink" href="https://linktr.ee/cryptowormz">
            <img src="./images/market.png" alt="" />
          </a>
          {/* {blockchain.account === "" || blockchain.smartContract === null ? (
            <button
              id="connect-btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect(0));
                getData();
              }}
            >
              LOG
            </button>
          ) : (
            <p>
              {blockchain.account.slice(0, 4) +
                "..." +
                blockchain.account.substr(-4)}
            </p>
          )} */}
        </div>

        <div className="site-container">
          <div id="Mintery">
            <div id="Masthead" className="note">
              <fieldset>
                <legend>Pay what you want!</legend>
                <p>(keep in mind we like beer)</p>
                <div className="toggle">
                  {bwprices.map((result) => (
                    <>
                      <input
                        type="radio"
                        name="paywhatuwant"
                        checked={bwprice === result}
                        onChange={(e) => handlePriceChange(e)}
                        value={result}
                        id={result}
                      />
                      <label for={result}>
                        {" "}
                        {result / 1000000000000000000} <br />
                        ftm
                      </label>
                    </>
                  ))}
                </div>
              </fieldset>
              <button
                href=""
                className="claimbutton"
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect(1));
                  claimNFTs(1);
                  getData();
                }}
              >
                {claimingNft ? "BUSY" : "Claim whats yours!"}
              </button>
            </div>
            <div id="Actions">
              <div className="note">
                <header>
                  <p>
                    <strong>
                      1 free mint per wallet for wormz who are still alive.
                    </strong>
                  </p>
                </header>
                <div className="divide" />

                <main>
                  <img id="Cage" src="../images/cage.png" width="56px" />
                  <p>
                    <strong>We are minting 25 Wormz.</strong> The Wormnation is
                    generous, and will hand these over to brave members.
                  </p>
                </main>
                <div className="divide" />
                <footer>
                  <p>
                    No roadmap. No utility. Holders might be rewarded in the
                    future. CC0.{" "}
                  </p>
                </footer>
                <div id="Follow">
                  <span>#BEYONDWORMZ</span>
                </div>
              </div>
            </div>
          </div>
          <div id="Actions">
            <img
              id="Logo"
              className="unselectable"
              loading="lazy"
              src="./images/logo.gif"
              width="400"
            />
            <div className="note">
              <header>
                <p>
                  <strong>
                    Digging in just now? Get some Wormz to claim a Beyond Worm.
                  </strong>{" "}
                </p>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG[0].NETWORK.NAME} network{" "}
                    </s.TextDescription>
                    <s.StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect(0));
                        getData();
                      }}
                    >
                      CONNECT
                    </s.StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <p>{feedback}</p>
                    <p>
                      {CONFIG[0].MAX_SUPPLY - data.totalSupply} left,{" "}
                      {CONFIG[0].DISPLAY_COST} FTM each
                    </p>
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <s.StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </s.StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <s.StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </s.StyledRoundButton>
                    </s.Container>
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <s.StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect(0));
                          claimNFTs(0);
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </s.StyledButton>
                    </s.Container>
                  </>
                )}
              </header>
              <div className="divide" />

              <main>
                <p>
                  <strong>Get Wormz from the flea market:</strong>
                  <br />
                  <a href="https://nftkey.app/collections/cryptowormz/">
                    OG wormz nftkey
                  </a>
                  <br />
                  <a href="https://nftkey.app/collections/cryptowormzhd/">
                    HD wormz nftkey
                  </a>
                </p>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div id="Underground">
        <div id="WormFamily">
          <img id="Sign" src="../images/sign.png" />
          <img id="Family" src="../images/family.png" />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const Mint = () => {
  const ownerWallet = null;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(
    `Click MINT to donate and to Get your bracelet. `
  );
  const [feedback2, setFeedback2] = useState(
    `How much ETH do you want to donate? (min- 0.01ETH)`
  );
  const [dontated, setDonated] = useState();
  const mintAmount = 1;
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 5,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = dontated * 10 ** 18;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);

    if (blockchain.account == ownerWallet) {
      blockchain.smartContract.methods
        .Mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: 1,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    } else {
      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
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
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    }
  };

  const donationFund = (e) => {
    setDonated(e.target.value);
  };

  useEffect(() => {
    console.log(dontated);
  }, [dontated]);

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
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="mintWeb">
      <div className="main">
        <h1>Stand with Ukraine</h1>

        <div className="contractAdd">
          <a target={"_blank"} href={CONFIG.SCAN_LINK}>
            {truncate(CONFIG.CONTRACT_ADDRESS, 5)}
          </a>
        </div>
        {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
          <>
            <div>Sold out!!!</div>
            <div>You can still find {CONFIG.NFT_NAME} on</div>
            <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
              {CONFIG.MARKETPLACE}
            </a>
          </>
        ) : (
          <>
            <div>Help Ukraine, Mint your NFT today, Lets make a change!!!</div>

            {blockchain.account === "" || blockchain.smartContract === null ? (
              <div>
                <div>Connect your {CONFIG.NETWORK.NAME} wallet.</div>
                <button
                  className="connectBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  CONNECT
                </button>
                {blockchain.errorMsg !== "" ? (
                  <>
                    <div>{blockchain.errorMsg}</div>
                  </>
                ) : null}
              </div>
            ) : (
              <>
                <div>
                  {feedback}
                  {feedback2}
                </div>
                <div>
                  <input
                    type="number"
										min="0.01"
                    value={dontated}
                    onChange={donationFund}
                    placeholder="Eth amount"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <button
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    //hi
                    e.preventDefault();
                    claimNFTs();
                    getData();
                  }}
                >
                  {claimingNft ? "BUSY" : "MINT"}
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Mint;

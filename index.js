const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const { ethers } = require("ethers");

(async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/<INFURA_PROJECT_ID>"
  );

  const sf = new SuperfluidSDK.Framework({
    ethers: provider,
  });
  await sf.initialize();
})();

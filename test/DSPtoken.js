const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DSP", function () {
  it("Checks DSP values", async function () {
    const DSP = await ethers.getContractFactory("DSP");
    const dspAddr = process.env.CONTRACT_ADDR
    const dsp = DSP.attach(dspAddr);
    const owner = dsp.signer.address;
    console.log(dsp)

    const dspName = await dsp.name() 
    const dspSymbol = await dsp.symbol
    const dspDecimals = await dsp.decimals()
    const dspTotalSupply = await dsp.totalSupply()
    const ownersBalance = await dsp.balanceOf(owner)

    expect(dspName.to.equal("Decentralized Swap Platform token");
    expect(dspSymbol).to.equal("DSP");
    expect(dspDecimals).to.equal(6);
    expect(dspTotalSupply).to.equal(10**12);
    expect(ownersBalance).to.equal(dspTotalSupply);   

  });
});

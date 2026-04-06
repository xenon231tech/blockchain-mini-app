async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    document.getElementById("wallet").innerText =
      "Connected: " + accounts[0];
  } else {
    alert("Install MetaMask!");
  }
}

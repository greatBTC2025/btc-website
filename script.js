/* script.js */

const btcAddress = "bc1q39s54pjztxgy873kuhxyy0hh98sqczc4h8wtwu";  // Your BTC address
const balanceElement = document.getElementById("btc-balance");

async function fetchBTCBalance() {
    try {
        const response = await fetch(`https://blockchain.info/q/addressbalance/${btcAddress}?confirmations=1`);
        const satoshis = await response.text();
        const btcAmount = (parseInt(satoshis) / 100000000).toFixed(8);
        balanceElement.innerText = btcAmount + " BTC";
    } catch (error) {
        balanceElement.innerText = "Error fetching balance";
        console.error("Error fetching BTC balance:", error);
    }
}

fetchBTCBalance();

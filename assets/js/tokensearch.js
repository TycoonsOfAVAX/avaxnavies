// THIS SECTION SEARCHES FOR AND DISPLAYS SHIPS COMMITTED FOR EACH MISSION ON MISSION CONTROL PAGE 
// Load Token Search 
window.addEventListener('DOMContentLoaded', () => {
  const tokenMAShipCountElement = document.getElementById('tokenMAShipCount');
  const tokenMBShipCountElement = document.getElementById('tokenMBShipCount');
  const tokenMCShipCountElement = document.getElementById('tokenMCShipCount');

  // Fetch MA token count in mission wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x9d836227d209280D5Defa3341Ad595AB9eA010d4&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenMAShipCount = data.result  / 10 ** 18;
      tokenMAShipCountElement.textContent = `${tokenMAShipCount.toFixed(2)} $SHIPs`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenMAShipCountElement.textContent = 'Error occurred while fetching A team mission Ship count.';
    });

  // Fetch M5B token count in Mission wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x6e0B00443D8160DEb02ccDdACDc66194da7B3444&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
  .then(response => response.json())
  .then(data => {
    const tokenMBShipCount = data.result  / 10 ** 18;
    tokenMBShipCountElement.textContent = `${tokenMBShipCount.toFixed(2)} $SHIPs`;
  })
  .catch(error => {
    console.error('Error:', error);
    tokenMBShipCountElement.textContent = 'Error occurred while fetching B team mission Ship count.';
  });

    // Fetch M6 token count in Mission wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x5E131330d743575E26114897C3C06e38A41052EC&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenMCShipCount = data.result  / 10 ** 18;
      tokenMCShipCountElement.textContent = `${tokenMCShipCount.toFixed(2)} $SHIPs`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenMCShipCountElement.textContent = 'Error occurred while fetching C team mission Ship count.';
    });
});

// Token Search Upon Wallet input: Get the elements for wallet address, check balance button, and token balance display
const walletAddressInput = document.getElementById('walletAddress');
const checkBalanceBtn = document.getElementById('checkBalanceBtn');
const token1BalanceElement = document.getElementById('token1Balance');
const token1bBalanceElement = document.getElementById('token1bBalance');
const token2BalanceElement = document.getElementById('token2Balance');
const token3BalanceElement = document.getElementById('token3Balance');
const token6BalanceElement = document.getElementById('token6Balance');
const tokenM2BalanceElement = document.getElementById('tokenM2Balance');
const tokenM2ShipPercentElement = document.getElementById('tokenM2ShipPercent');
const tokenLastMBalanceElement = document.getElementById('tokenLastMBalance');
const tokenM6balanceElement = document.getElementById('tokenM6balance');

// Event listener for the check balance button
checkBalanceBtn.addEventListener('click', () => {
  const walletAddress = walletAddressInput.value.trim();

  // Make API requests to get the account balances for the tokens in Tab 1
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token1Balance = Number(data.result) / 10 ** 18;
      token1BalanceElement.textContent = `$SHIP Balance: ${token1Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token1BalanceElement.textContent = 'Failed to fetch $SHIP balance';
    });

    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token1bBalance = Number(data.result) / 10 ** 18;
      token1bBalanceElement.textContent = `$SHIP Balance: ${token1bBalance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token1bBalanceElement.textContent = 'Failed to fetch $SHIP balance';
    });


  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xDC9bF9d44236460fd989178e8bD2C0a4f3f33646&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token2Balance = Number(data.result) / 10 ** 18;
      token2BalanceElement.textContent = `$RP Balance: ${token2Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token2BalanceElement.textContent = 'Failed to fetch $RP balance';
    });

  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x52d8dC263aCede5a566bd6094f66aD49f7387c26&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token3Balance = Number(data.result) / 10 ** 18;
      token3BalanceElement.textContent = `$RP-AVAX LP Balance: ${token3Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token3BalanceElement.textContent = 'Failed to fetch $RP-AVAX LP balance';
    });

  // Make API requests to get the account balances for the tokens in Tab 2
  // Provide M6 balance in your wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x3eF1086D34a6134Cf114B9Af4A635Cb79F6deb63&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token6Balance = Number(data.result) / 10 ** 18;
      token6BalanceElement.textContent = `$M7 Balance: ${token6Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token6BalanceElement.textContent = 'Failed to fetch $M7 balance';
    });

    // Provide M2 balance in your wallet 
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x24B74a5632C22377A196ceF3Ff62252411865B19&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM2Balance = data.result / 10 ** 18;
      tokenM2BalanceElement.textContent = `Your $M2 Count: ${tokenM2Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM2BalanceElement.textContent = 'Failed to fetch $M2 balance';
    });
    
    // Provide Last month Mission balance in your wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xAbcE686571FAe20a18d9E62C548be611F81D1D11&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenLastMBalance = data.result / 10 ** 18;
      tokenLastMBalanceElement.textContent = `Your $M6 Count: ${tokenLastMBalance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenLastMBalanceElement.textContent = 'Failed to fetch $M6 balance';
    });    
    
    // Provide This Month Mission balance in your wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x3eF1086D34a6134Cf114B9Af4A635Cb79F6deb63&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM6balance = data.result / 10 ** 18;
      tokenM6balanceElement.textContent = `Your $M7 Count: ${tokenM6balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM6balanceElement.textContent = 'Failed to fetch $M7 balance';
    });  

});
//0x000000000000000000000000000000000000dead
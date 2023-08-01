// Load Token Search
window.addEventListener('DOMContentLoaded', () => {
  const tokenM2ShipCountElement = document.getElementById('tokenM2ShipCount');
  const tokenM3ShipCountElement = document.getElementById('tokenM3ShipCount');
  const tokenM4ShipCountElement = document.getElementById('tokenM4ShipCount');

  // Fetch M2 token count in mission wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x24B74a5632C22377A196ceF3Ff62252411865B19&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM2ShipCount = data.result  / 10 ** 18;
      tokenM2ShipCountElement.textContent = `${tokenM2ShipCount.toFixed(2)} $SHIPs`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM2ShipCountElement.textContent = 'Error occurred while fetching M2 Ship count.';
    });

  // Fetch M3 token count in Mission wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x22b2ada02756599EEBEEC06a6d810A3c4ba92bA5&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
  .then(response => response.json())
  .then(data => {
    const tokenM3ShipCount = data.result  / 10 ** 18;
    tokenM3ShipCountElement.textContent = `${tokenM3ShipCount.toFixed(2)} $SHIPs`;
  })
  .catch(error => {
    console.error('Error:', error);
    tokenM3ShipCountElement.textContent = 'Error occurred while fetching M3 Ship count.';
  });

    // Fetch M4 token count in Mission wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x24b0cd8eA16497cFEf47B6c953999D57F7b91a6d&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM4ShipCount = data.result  / 10 ** 18;
      tokenM4ShipCountElement.textContent = `${tokenM4ShipCount.toFixed(2)} $SHIPs`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM4ShipCountElement.textContent = 'Error occurred while fetching M4 Ship count.';
    });
});

// Token Search Upon Wallet input: Get the elements for wallet address, check balance button, and token balance display
const walletAddressInput = document.getElementById('walletAddress');
const checkBalanceBtn = document.getElementById('checkBalanceBtn');
const token1BalanceElement = document.getElementById('token1Balance');
const token1bBalanceElement = document.getElementById('token1bBalance');
const token2BalanceElement = document.getElementById('token2Balance');
const token3BalanceElement = document.getElementById('token3Balance');
const token4BalanceElement = document.getElementById('token4Balance');
const tokenM2BalanceElement = document.getElementById('tokenM2Balance');
const tokenM2ShipPercentElement = document.getElementById('tokenM2ShipPercent');
const tokenM3BalanceElement = document.getElementById('tokenM3Balance');
const tokenM3ShipPercentElement = document.getElementById('tokenM3ShipPercent');
const tokenM4BalanceElement = document.getElementById('tokenM4Balance');

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
  // Provide M4 balance in your wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x24B74a5632C22377A196ceF3Ff62252411865B19&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token4Balance = Number(data.result) / 10 ** 18;
      token4BalanceElement.textContent = `$M4 Balance: ${token4Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token4BalanceElement.textContent = 'Failed to fetch $M4 balance';
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
    
    // Provide M3 balance in your wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x22b2ada02756599EEBEEC06a6d810A3c4ba92bA5&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM3Balance = data.result / 10 ** 18;
      tokenM3BalanceElement.textContent = `Your $M3 Count: ${tokenM3Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM3BalanceElement.textContent = 'Failed to fetch $M3 balance';
    });    
    
    // Provide M4 balance in your wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x24b0cd8eA16497cFEf47B6c953999D57F7b91a6d&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM4Balance = data.result / 10 ** 18;
      tokenM4BalanceElement.textContent = `Your $M4 Count: ${tokenM4Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM4BalanceElement.textContent = 'Failed to fetch $M4 balance';
    });  

});
//0x000000000000000000000000000000000000dead
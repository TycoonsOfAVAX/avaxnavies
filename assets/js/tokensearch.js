// Load Token Search
window.addEventListener('DOMContentLoaded', () => {
  const tokenM5AShipCountElement = document.getElementById('tokenM5AShipCount');
  const tokenM5BShipCountElement = document.getElementById('tokenM5BShipCount');
  const tokenM6ShipCountElement = document.getElementById('tokenM6ShipCount');

  // Fetch M5a token count in mission wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x69606B126cc876Ab7222D9347f5381095190Cc10&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM5AShipCount = data.result  / 10 ** 18;
      tokenM5AShipCountElement.textContent = `${tokenM5AShipCount.toFixed(2)} $SHIPs`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM5AShipCountElement.textContent = 'Error occurred while fetching M5A Ship count.';
    });

  // Fetch M5B token count in Mission wallet
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x9d049d71b7c5d1FBF237cF6dbd9E922FF04B257A&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
  .then(response => response.json())
  .then(data => {
    const tokenM5BShipCount = data.result  / 10 ** 18;
    tokenM5BShipCountElement.textContent = `${tokenM5BShipCount.toFixed(2)} $SHIPs`;
  })
  .catch(error => {
    console.error('Error:', error);
    tokenM5BShipCountElement.textContent = 'Error occurred while fetching M5B Ship count.';
  });

    // Fetch M6 token count in Mission wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0xAbcE686571FAe20a18d9E62C548be611F81D1D11&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM6ShipCount = data.result  / 10 ** 18;
      tokenM6ShipCountElement.textContent = `${tokenM6ShipCount.toFixed(2)} $SHIPs`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM6ShipCountElement.textContent = 'Error occurred while fetching M6 Ship count.';
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
const tokenM5ABalanceElement = document.getElementById('tokenM5ABalance');
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
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xAbcE686571FAe20a18d9E62C548be611F81D1D11&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const token6Balance = Number(data.result) / 10 ** 18;
      token6BalanceElement.textContent = `$M6 Balance: ${token6Balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      token6BalanceElement.textContent = 'Failed to fetch $M6 balance';
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
    
    // Provide $M5A balance in your wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x69606B126cc876Ab7222D9347f5381095190Cc10&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM5ABalance = data.result / 10 ** 18;
      tokenM5ABalanceElement.textContent = `Your $M5A Count: ${tokenM5ABalance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM5ABalanceElement.textContent = 'Failed to fetch $M5A balance';
    });    
    
    // Provide $M6 balance in your wallet
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xAbcE686571FAe20a18d9E62C548be611F81D1D11&address=${walletAddress}&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const tokenM6balance = data.result / 10 ** 18;
      tokenM6balanceElement.textContent = `Your $M6 Count: ${tokenM6balance.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      tokenM6balanceElement.textContent = 'Failed to fetch $M6 balance';
    });  

});
//0x000000000000000000000000000000000000dead
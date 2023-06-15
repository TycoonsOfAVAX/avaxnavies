window.addEventListener('DOMContentLoaded', () => {
// Token Search Upon Wallet input: check balance button, and token balance display
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const messageElement = document.getElementById('message');
const commander_contentElement = document.getElementById('commander_content');
const islandStakedElement = document.getElementById('islandStaked');
const navybaseStakedElement = document.getElementById('navybaseStaked');
const seasteadStakedElement = document.getElementById('seasteadStaked');
const islandOutputElement = document.getElementById('islandOutput');
const navybaseOutputElement = document.getElementById('navybaseOutput');
const seasteadOutputElement = document.getElementById('seasteadOutput');
const totalOutputElement = document.getElementById('totalOutput');
const resistanceHPElement = document.getElementById('resistanceHP');

submitButton.addEventListener('click', () => {
  const password = passwordInput.value.trim();

  if (password === 'AVAX') {
    messageElement.textContent = 'WELCOME COMMANDER';
    messageElement.style.opacity = '1';

    setTimeout(() => {
      messageElement.style.opacity = '0';
      setTimeout(() => {
        messageElement.textContent = '';
        commander_contentElement.style.opacity = '1';
      }, 1000);
    }, 2000);

      // Make API requests to get the Islands staked Balance and monthly output
      fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xf21a42e203db80593478f2e7ed8f97a8db9b3391&address=0x1b96d77f957e15847c68d6daa760f8d1a8e476f2&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
        .then(response => response.json())
        .then(data => {
          const islandStaked = Number(data.result);
          const islandOutput = islandStaked * 4.3;
          islandOutputElement.textContent = `${islandOutput.toFixed(2)}`;
          islandStakedElement.textContent = `${islandStaked.toFixed(2)}`;

          // Make API requests to get the Navy base staked Balance and monthly output
          fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x6b7a1d6094e2d2472168a7903f0ae3681cfdb973&address=0xc65f4ba646b0fb7ccf2f17a283215b6f4129f46e&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
          .then(response => response.json())
          .then(data => {
            const navybaseStaked = Number(data.result);
            const navybaseOutput = Number(data.result) * 4.3;
            navybaseOutputElement.textContent = `${navybaseOutput.toFixed(2)}`;
            navybaseStakedElement.textContent = `${navybaseStaked.toFixed(2)}`;

            // Make API requests to get the Seastead Staked Balance and monthly output
            fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x2E428b5e3D67c8Eb50368610a828c99148FAa319&address=0x3a5038b7ac7c7a59c0d4dcd5fcd420f8ed6fcd43&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
            .then(response => response.json())
            .then(data => {
              const seasteadStaked = Number(data.result);
              const seasteadOutput = Number(data.result) * 8.6;
              const totalOutput = (islandOutput + navybaseOutput + seasteadOutput);
              totalOutputElement.textContent = `${totalOutput.toFixed(2)}`;
              seasteadOutputElement.textContent = `${seasteadOutput.toFixed(2)}`;
              seasteadStakedElement.textContent = `${seasteadStaked.toFixed(2)}`;

               // Make API requests to get Resistance HP
              fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7&address=0x52d8dc263acede5a566bd6094f66ad49f7387c26&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
              .then(response => response.json())
              .then(data => {
                const resistanceHP = Number(data.result) / 10 ** 16 ;
                resistanceHPElement.textContent = `${resistanceHP.toFixed(2)} / 100000`;
              })
              .catch(error => {
                console.error('Error:', error);
                resistanceHPElement.textContent = 'Failed to fetch Resistance HP balance';
              });
            
            })
            .catch(error => {
              console.error('Error:', error);
              seasteadStakedElement.textContent = 'Failed to fetch Seastead Staked balance';
            });

          })
          .catch(error => {
            console.error('Error:', error);
            navybaseStakedElement.textContent = 'Failed to fetch Navy Base staked balance';
          });

        })
        .catch(error => {
          console.error('Error:', error);
          islandStakedElement.textContent = 'Failed to fetch Islands Staked balance';
        });
    } else {
      messageElement.textContent = 'UNAUTHORIZED ENTRY';
      islandStakedElement.textContent = '';
      islandOutputElement.textContent = '';
      navybaseStakedElement.textContent = '';
      navybaseOutputElement.textContent = '';
      seasteadOutputElement.textContent = '';
      seasteadStakedElement.textContent = '';
      totalOutputElement.textContent = '';      
      commander_contentElement.style.opacity = '0';
      messageElement.style.opacity = '1';

    }

  });
    
});
//0x000000000000000000000000000000000000dead
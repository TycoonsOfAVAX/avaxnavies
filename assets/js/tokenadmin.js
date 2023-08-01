// Load Token Search
window.addEventListener('DOMContentLoaded', () => {
  const islandShipCountElement = document.getElementById('islandShipCount');
  const navyShipCountElement = document.getElementById('navyShipCount');
  const seasteadShipCountElement = document.getElementById('seasteadShipCount');

  // Fetch SHIP token count in Islands Vault
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x1b96d77f957e15847c68d6daa760f8d1a8e476f2&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const islandShipCount = data.result  / 10 ** 18;
      islandShipCountElement.textContent = `${islandShipCount.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      islandShipCountElement.textContent = 'Error occurred while fetching island Ship count.';
    });


    setTimeout(() => {
    }, 1000);

  // Fetch SHIP token count in Navy Vault
  fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0xc65f4ba646b0fb7ccf2f17a283215b6f4129f46e&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
  .then(response => response.json())
  .then(data => {
    const navyShipCount = data.result  / 10 ** 18;
    navyShipCountElement.textContent = `${navyShipCount.toFixed(2)}`;
  })
  .catch(error => {
    console.error('Error:', error);
    navyShipCountElement.textContent = 'Error occurred while fetching navy Ship count.';
  });

    // Fetch SHIP token count in Seastead Vault
    fetch(`https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xbC877a247f7386b6F2EE9c7a476dfbA43b265e80&address=0x3a5038b7ac7c7a59c0d4dcd5fcd420f8ed6fcd43&apikey=V23H5AIX434U8RKM41WDQ8YHQGD2WRUWS9`)
    .then(response => response.json())
    .then(data => {
      const seasteadShipCount = data.result  / 10 ** 18;
      seasteadShipCountElement.textContent = `${seasteadShipCount.toFixed(2)}`;
    })
    .catch(error => {
      console.error('Error:', error);
      seasteadShipCountElement.textContent = 'Error occurred while fetching seastead Ship count.';
    });
});
//0x000000000000000000000000000000000000dead
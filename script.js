console.log("Hello Vision and/or kris! I know one of you want my discord token ;)");
window.onbeforeunload = function() {
  return "";
}
  const userAgent = navigator.userAgent;
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      console.log(`public IP address is: ${data.ip}`);
    })
    .catch(error => {
      console.error("Error fetching IP address:", error);
    });
  console.log(`User Agent: ${userAgent}`);
  console.log(`Device and/or VM: ${navigator.platform}`);

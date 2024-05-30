console.log("Hello Vision and/or kris!");
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
      console.error("Error fetching IP address, Not Real IP address.:", error);
    });
  console.log(`User Agent: ${userAgent}`);
  console.log(`Device and/or VM: ${navigator.platform}`);





  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      const videoUrl = 'https://www.youtube.com/embed?v=w5m0_HLaaAU';
      const videoPlayer = document.createElement('iframe');
      videoPlayer.src = videoUrl;
      videoPlayer.width = '640';
      videoPlayer.height = '360';
      videoPlayer.allowFullscreen = true;
      document.body.appendChild(videoPlayer);
    }
  });

document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var oneMonthFromNow = (new Date().getTime() / 1000) + (86400 * 30) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(oneMonthFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme

  let body = document.body;
  body.classList.toggle('light-theme');
  body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});

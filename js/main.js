document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var aprilFirst = 1648803600

  // Set up FlipDown
  var flipdown = new FlipDown(aprilFirst)

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

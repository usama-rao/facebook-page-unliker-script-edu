(async () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const buttons = Array.from(document.querySelectorAll('div[aria-label="Following"]'));
  console.log(`Found ${buttons.length} pages to unlike.`);

  for (let i = 0; i < buttons.length; i++) {
    try {
      buttons[i].click();
      console.log(`Unliked page ${i + 1}`);
      await delay(1500); // delay to avoid detection
    } catch (err) {
      console.error(`Error at page ${i + 1}:`, err);
    }
  }

  console.log('Waiting 100 seconds before reloading the page...');
  await delay(100000); // wait for 100 seconds
  location.reload();
})();

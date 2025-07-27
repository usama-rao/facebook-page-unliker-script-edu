(async () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const scrollToBottom = async () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    await delay(2000);
  };

  const getButtons = () =>
    Array.from(document.querySelectorAll('div[aria-label="Following"]'))
      .filter(btn => !btn.dataset.clicked); // Skip already clicked

  // Set hard refresh after 500 seconds
  setTimeout(() => {
    console.log('500 seconds passed. Hard refreshing page...');
    location.reload(true); // Hard refresh (Ctrl + F5 equivalent)
  }, 500000);

  console.log('Waiting 5 seconds before starting...');
  await delay(5000);

  // Initial scroll (once)
  console.log('Initial scroll 1/1...');
  await scrollToBottom();

  let unlikedCount = 0;

  while (unlikedCount < 250) {
    const buttons = getButtons();

    if (buttons.length === 0) {
      console.log('No new buttons found. Scrolling again...');
      await scrollToBottom();
      await delay(5000);
      continue;
    }

    for (let i = 0; i < buttons.length && unlikedCount < 250; i++) {
      try {
        const btn = buttons[i];
        btn.dataset.clicked = 'true'; // Mark before action
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await delay(500);
        btn.click();
        console.log(`Unliked page ${unlikedCount + 1}`);
        unlikedCount++;
        await delay(1500);

        if (unlikedCount % 20 === 0 && unlikedCount < 250) {
          console.log(`Reached ${unlikedCount} unlikes. Scrolling for more...`);
          await scrollToBottom();
          await delay(10000); // Wait for new content to load
        }
      } catch (err) {
        console.error(`Error unliking at index ${i}:`, err);
        await delay(1000);
      }
    }
  }

  console.log('Done unliking 250 pages. Waiting for hard refresh if not already triggered...');
})();

(async () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const scrollToBottom = async () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    await delay(2000);
  };

  const getButtons = () =>
    Array.from(document.querySelectorAll('div[aria-label="Following"]'))
      .filter(btn => !btn.dataset.clicked); // skip already clicked

  // Set hard refresh after 150 seconds from script start
  setTimeout(() => {
    console.log('150 seconds passed. Hard refreshing page...');
    window.location.href = window.location.href;
  }, 150000);

  console.log('Waiting 5 seconds before starting...');
  await delay(5000);

  // Initial scroll (once)
  console.log('Initial scroll 1/1...');
  await scrollToBottom();

  let unlikedCount = 0;

  while (unlikedCount < 100) {
    const buttons = getButtons();

    if (buttons.length === 0) {
      console.log('No new buttons found. Scrolling again...');
      await scrollToBottom();
      await delay(5000);
      continue;
    }

    for (let i = 0; i < buttons.length && unlikedCount < 100; i++) {
      try {
        const btn = buttons[i];
        btn.dataset.clicked = 'true';
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        btn.click();
        console.log(`Unliked page ${unlikedCount + 1}`);
        unlikedCount++;
        await delay(1500);

        if (unlikedCount % 20 === 0 && unlikedCount < 100) {
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

  console.log('Done unliking 100 pages. Waiting for hard refresh if not already triggered...');
})();

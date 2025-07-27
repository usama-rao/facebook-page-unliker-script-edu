(async () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const scrollToBottom = async () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    await delay(2000);
  };

  const getButtons = () =>
    Array.from(document.querySelectorAll('div[aria-label="Following"]'))
      .filter(btn => !btn.dataset.clicked);

  let unlikedCount = 0;
  const maxUnlikes = 250;
  const startTime = Date.now();
  let lastScroll = Date.now();

  // Hard refresh after 70 seconds
  setTimeout(() => {
    console.log('70 seconds passed. Hard refreshing page...');
    window.location.href = window.location.href;
  }, 70000);

  console.log('Waiting 5 seconds before starting...');
  await delay(5000);

  console.log('Initial scroll...');
  await scrollToBottom();

  while (unlikedCount < maxUnlikes) {
    const now = Date.now();

    if ((now - lastScroll) >= 30000) {
      console.log('30 seconds passed. Scrolling to load more pages...');
      await scrollToBottom();
      await delay(10000);
      lastScroll = Date.now();
    }

    const buttons = getButtons();

    if (buttons.length === 0) {
      console.log('No new buttons found. Scrolling again...');
      await scrollToBottom();
      await delay(5000);
      continue;
    }

    for (let i = 0; i < buttons.length && unlikedCount < maxUnlikes; i++) {
      try {
        const btn = buttons[i];
        btn.dataset.clicked = 'true';
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        btn.click();
        console.log(`Unliked page ${unlikedCount + 1}`);
        unlikedCount++;
        await delay(1500);
      } catch (err) {
        console.error(`Error at index ${i}:`, err);
        await delay(1000);
      }
    }
  }

  console.log(`Unliked ${unlikedCount} pages. Script complete or waiting for refresh.`);
})();

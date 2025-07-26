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
    console.log('⏰ 150 seconds passed. Hard refreshing page...');
    window.location.href = window.location.href;
  }, 150000);

  console.log('⌛ Waiting 5 seconds before starting...');
  await delay(5000);

  // Initial scroll (once)
  console.log('🔽 Initial scroll 1/1...');
  await scrollToBottom();

  let unlikedCount = 0;

  while (unlikedCount < 100) {
    const buttons = getButtons();

    if (buttons.length === 0) {
      console.log('🔄 No new buttons found. Scrolling again...');
      await scrollToBottom();
      await delay(5000);

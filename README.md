# Facebook Page Auto-Unliker (Educational Use Only)

This script automates unliking Facebook pages by simulating clicks on the **"Following"** buttons on your Liked Pages or Activity Log.

## Features

- Waits **5 seconds** before starting
- Scrolls down **1 time initially** to load more pages
- Unlikes up to **250 pages automatically**
- After every **20 unlikes**:
  - Scrolls down to load more
  - Waits **10 seconds** before resuming
- Automatically triggers a **hard refresh (Ctrl + F5)** after **500 seconds** from script start to handle stuck/slow pages

## How to Use

1. **Go to:**
   - [https://www.facebook.com/pages](https://www.facebook.com/pages) or
   - Your **Activity Log > Likes and Reactions** section
2. Open the browser **Developer Console**:
   - Right-click the page → Click **Inspect**
   - Go to the **Console** tab
3. **Paste the full script** into the console and press **Enter**
4. The script will:
   - Wait 5 seconds
   - Scroll once
   - Begin unliking pages
   - Refresh the page after 500 seconds (if needed)

## Notes

- If Facebook pages or buttons are not loading properly, the script will **refresh the page automatically** after a timeout
- It avoids clicking the same buttons twice by marking already processed elements

## Disclaimer

- This script is for **educational purposes only**
- Misuse may violate Facebook's Terms of Service
- You are fully responsible for any actions taken using this script

## License

MIT License – Free to use for personal and educational purposes with attribution.

# Facebook Page Auto-Unliker (Educational Use Only)

This script automates the process of unliking Facebook pages by clicking the "Following" buttons on your **Liked Pages** or **Activity Log**.

> ⚠️ For educational use only. Use at your own risk.

---

## Features

- Waits 5 seconds before starting
- Scrolls down 1 time initially to load more content
- Unlikes up to 100 pages automatically
- After every 20 unlikes:
  - Scrolls down
  - Waits 10 seconds to load new content
- Automatically triggers a **hard refresh (Ctrl + F5)** after 150 seconds from script start

---

## How to Use

1. **Open Facebook** and go to:
   - `facebook.com/pages/?category=liked` *(Liked Pages)*  
   - or your **Activity Log** → **Likes and Reactions** section  
2. **Open Developer Console** in your browser:
   - Right-click anywhere on the page → Click **Inspect**
   - Navigate to the **Console** tab
3. **Paste the full script** into the console and press **Enter**
4. The script will:
   - Scroll once
   - Start unliking pages
   - Refresh the page automatically after 150 seconds

---

## Notes

- If nothing is being unliked, ensure you are on a page where the buttons say **"Following"**
- If Facebook changes its UI, the script may require updates
- If the page is stuck, the script will **auto-refresh after 150 seconds**

---

## Disclaimer

- This script is provided **for educational purposes only**
- Misuse may violate Facebook’s [Terms of Service](https://www.facebook.com/terms.php)
- You are solely responsible for how you use this script

---

## License

MIT License – Free for personal and educational use with attribution.

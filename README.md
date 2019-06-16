## WHAT DOES THIS CSS/JAVASCRIPT DO

- adds a button at the bottom right of the screen when you're in a Support Session
- selecting the button will make the screen "normal" for 10 seconds (remove the orange bar and all buttons that are part of the support session), so you can take a screenshot for the customer


## REQUIREMENTS:

### Stylus 
- CHROME: https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en
- FIREFOX: https://addons.mozilla.org/en-GB/firefox/addon/styl-us/

### Tampermonkey
- CHROME: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
- FIREFOX: https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/?src=search

With Stylus, you can add your own custom CSS code to any site, to modify the look/feel.
Tampermonkey does the same, but for Javascript, to modify functionality.


## INSTALLATION:

1. Install Stylus extension
2. Add a new style, with name "_Hide Support Session Indicators_"
3. Paste the contents of **stylus.css** into the code field
4. Ensure that "Applies to" is set to "**URLS starting with**" / **https://wordpress.com/**
5. **SAVE**
6. Install Tampermonkey
7. Create a new script, with name "_Hide Support Session Indicators_"
8. Paste the contents of **tampermonkey.js** into the code field
9. **SAVE**

## MORE INFORMATION:
https://heinvestigations.wordpress.com/2019/01/14/happy-suite-of-happiness-hacks/

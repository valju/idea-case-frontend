# FRONTEND TOOL SET
 - Git for Windows (latest, we used Aug 2018), including the Git Bash
 - VS Code 1.38.1
 - Node v8.11.4
 - npm 5.6.0
 - (GIMP, free image editor, was used to create the logo that has transparent background)  
 - (many node packages installed based on package.json, See below)
 - (React Dev Tools for Firefox and Chrome, We didn't use that much, used Redux Dev Tools)
 - Redux Dev Tools 2.17.0 (Install for all browsers, e.g. for Firefox and Chrome!) (See below)
 
# FRONTEND INSTALLATION GUIDE
0. Possibly create a common root folder "Case" or "Case2018S" for both backend and frontend repos to be moved or clone there
(Benefit: If you want to open both in same editor with the "Open folder" command)
1. run command `pwd` to make sure you are in the common root folder. 
Then (if not already done) clone this repo while in that common root folder
2. run `npm install` in the frontend repo folder to automatically install all dependencies mentioned in package.json
 
3. change/check the used port number to be **8686** from **package.json**, 
 
4. change/check the backend URL (apiRoot) to be e.g. **"http://localhost:8787/api"** (both 8787 at backend and this url in frontend) it's defined in **src/utils/api.config.js**
5. `npm start`
6. You should/might get the "TypeError: xxx is undefined" React error page it's because Redux store cannot be built, because Redux devtools are missing from your browser, and our code tries to wrap those tools around our store (see /src/index.js). 
7. Add to Firefox the Add-On:    Redux DevTools by Zalmoxisus
8. Add to Chrome the Extension:    Redux DevTools by remotedevio
9. `npm start`
10. Test the page again. E.g. http://localhost:8686/ideas or whatever views are available.
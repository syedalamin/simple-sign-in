/**
 * 1 visit: console.firebase.google.com 
 * 2. create project ( skip google analytics )
 * 3. register app ( create config )
 * 4. install firebase: npm install firebase
 * 5. add config file to your project 
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 * 7. Visite: Go To Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app.
 * 9. Login.jsx: import getAuth from firebase/auth 
 * 10. create auth = getAuth(app)
 * 11. import googleAuthProvider and create new a provider
 * 12. use signInWithPopup and pass auth and provider
 * 13. activate sign-in mathod (google, facebook, github , etc)
 * 14. [vite] : change 127.0.0.1 to localhost
*/
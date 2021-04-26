let admin = require("firebase-admin");

let serviceAccount = require("../vue-auth-and-test-firebase-adminsdk-jbh7m-d0607c1100.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-auth-and-test-default-rtdb.firebaseio.com"
});

export {admin}
import { initializeApp, database, auth } from "firebase";

const config = {
  apiKey: "AIzaSyAw1aBYzmJYe-yi_KAjyHC51PGn6vQqrX4",
  authDomain: "evox-1d3da.firebaseapp.com",
  databaseURL: "https://evox-1d3da.firebaseio.com",
  projectId: "evox-1d3da",
  storageBucket: "evox-1d3da.appspot.com",
  messagingSenderId: "623461597085",
  appId: "1:623461597085:web:8cba1b83373279e1"
};

initializeApp(config);

export default {
  database: database(),
  auth
};

import firebase from "firebase";

import { firebaseConfig } from "./config";
import defaultView from "..";

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {}

export const fsDatabase = firebase.database();

export default defaultView;

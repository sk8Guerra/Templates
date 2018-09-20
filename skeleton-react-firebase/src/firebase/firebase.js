import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var devConfig = {
    // fb dev config
};

var prodConfig = {
    // fb prod config
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};

firestore.settings(settings);

export {
  auth,
  firestore
};

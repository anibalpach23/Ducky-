import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyA9gd8EFCaTipOFN7mr2zzltvC_u_1PZK8",
    authDomain: "duckoverflow.firebaseapp.com",
    databaseURL: "https://duckoverflow.firebaseio.com",
    projectId: "duckoverflow",
    storageBucket: "duckoverflow.appspot.com",
    messagingSenderId: "616977149883"
  };

  const devConfig = {
    apiKey: "AIzaSyA9gd8EFCaTipOFN7mr2zzltvC_u_1PZK8",
    authDomain: "duckoverflow.firebaseapp.com",
    databaseURL: "https://duckoverflow.firebaseio.com",
    projectId: "duckoverflow",
    storageBucket: "duckoverflow.appspot.com",
    messagingSenderId: "616977149883"
  };

  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
      auth,
  };
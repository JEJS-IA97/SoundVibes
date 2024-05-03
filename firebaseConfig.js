import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYznvM_fPUXsphIBT-NpQjJ7lol5Nofw0",
  authDomain: "soundvibe-db939.firebaseapp.com",
  projectId: "soundvibe-db939",
  storageBucket: "soundvibe-db939.appspot.com",
  messagingSenderId: "334588308406",
  appId: "1:334588308406:web:7e1c5baf6b03acc3c66f17",
  measurementId: "G-5DB25MHMC1"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
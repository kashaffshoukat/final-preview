const firebaseConfig = {
  apiKey: "AIzaSyAZ80LEUZ4UNaellmtD0tQrVpU8KJlVp7o",
  authDomain: "lexo-care.firebaseapp.com",
  projectId: "lexo-care",
  storageBucket: "lexo-care.firebasestorage.app",
  messagingSenderId: "196847513507",
  appId: "1:196847513507:web:1dab741fdfad77817f3416",
  measurementId: "G-98ZCS082JQ"
};

// Initialize Firebase securely (agar pehle initialize nahi hai tabhi karega)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
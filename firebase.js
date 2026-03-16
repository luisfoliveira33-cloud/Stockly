
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "COLE_SUA_API_KEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJETO",
storageBucket: "SEU_PROJETO.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

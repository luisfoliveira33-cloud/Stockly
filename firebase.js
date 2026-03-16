
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCePoVqVJakkxhtYbyBybu1ErPZXUUyibs",
authDomain: "stocky-53f07.firebaseapp.com",
projectId: "stocky-53f07",
storageBucket: "stocky-53f07.firebasestorage.app",
messagingSenderId: "904523452324",
appId: "1:904523452324:web:5b44b780b55f5f265a7b31",
measurementId: "G-PNF8EYR81G"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

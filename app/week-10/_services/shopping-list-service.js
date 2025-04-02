import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId, updateItemList) {
    const dbList = [];

    const collectionReference = collection(db, "users", userId, "items");
    const snapshot = await getDocs(query(collectionReference));


    snapshot.forEach((doc) => {
        dbList.push({ id: doc.id, ...doc.data() });
    });
    
    return dbList;
  }
  
  export async function addItem(userId, newItem) {
    try {
      const collectionReference = collection(db, "users", userId, "items");
      const addedItemPromise = await addDoc(collectionReference, newItem);
      return addedItemPromise.id;
    } catch (error) {
      console.log(error);
    }
  }
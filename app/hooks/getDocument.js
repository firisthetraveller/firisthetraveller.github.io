import { projectFirestore } from "../firebase/config";

const getDocument = async (collection, id) => {
    var docRef = projectFirestore.collection(collection).doc(id);
    let doc = await docRef.get();

    if (doc.exists) {
        console.log("data", doc.data());
        return doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.error("No such document!");
    }
}

export default getDocument;
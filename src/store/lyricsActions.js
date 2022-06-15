import { collection, onSnapshot, where, query } from "firebase/firestore"; 

const q = query(collection(db, "lyrics"), where("song_title", "==", "gurenge"));
onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New city: ", change.doc.data());
        }

        const source = snapshot.metadata.fromCache ? "local cache" : "server";
        console.log("Data came from " + source);
    });
});

export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };
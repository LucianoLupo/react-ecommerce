import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcoh68k1q9JpBajKV8jCkp2U3yTXcktQQ",
  authDomain: "react-ecommerce-3d55c.firebaseapp.com",
  databaseURL: "https://react-ecommerce-3d55c.firebaseio.com",
  projectId: "react-ecommerce-3d55c",
  storageBucket: "react-ecommerce-3d55c.appspot.com",
  messagingSenderId: "632553601539",
  appId: "1:632553601539:web:40ce0143db0107e164ac36"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  
  // use this function only once to put the data into firestore 

  // const collectionRef = firestore.collection(collectionKey);

  // const batch = firestore.batch();
  // objectsToAdd.forEach(obj => {
  //   const newDocRef = collectionRef.doc();
  //   batch.set(newDocRef, obj);

  // });

  // return await batch.commit();
  return
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

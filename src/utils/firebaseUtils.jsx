import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  // sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";

const firebaseApp = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseApp);

const auth = getAuth(app);

//register sayfasından email ve password gelecek
export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredantial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
    navigate("/");
    console.log(userCredantial);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredantial = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredantial);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      // const uid = user.uid; // profil fotosu için kullanılabilir?
      // ...
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

//! --- firebase data ------ 

// Bilgi ekleme
export const AddBlog = (info) => {
  const db = getDatabase();
  const blogRef = ref(db, "blogs");
  const newBlogRef = push(blogRef);

  set(newBlogRef, {
    title: info.title,
    imgUrl: info.imgUrl,
    content: info.content,
  });
};

//Bilgi çağırma
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const blogRef = ref(db, "blogs");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogsArray = [];

      for (let id in data) {
        blogsArray.push({ id, ...data[id] });
      }
      setBlogList(blogsArray);
      setIsLoading(false);
      console.log("boglist : ", blogList)
    });
  }, []);
  return { isLoading, blogList };
};

//Bilgi silme
export const DeleteBlog = (id) => {
  const db = getDatabase();
  // const blogRef = ref(db, "blogs");
  remove(ref(db, "baglanti/" + id));

  // Toastify("Kullanıcı bilgisi silindi");
};

//Bilgi Değiştirme
export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["blogs/" + info.id] = info;
  return update(ref(db), updates);
};

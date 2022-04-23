import firebase from "./firebase";
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
    const [contactList, setContactList] = useState();
  
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
        setContactList(blogsArray);
        setIsLoading(false);
      });
    }, []);
    return { isLoading, contactList };
  };


  //Bilgi silme
  export const DeleteBlog = (id) => {
    const db = getDatabase();
    const blogRef = ref(db, "blogs");
    remove(ref(db, "baglanti/" + id));
  
    Toastify("Kullanıcı bilgisi silindi");
  };


  //Bilgi Değiştirme
  export const EditUser = (info) => {
    const db = getDatabase();
    const updates = {};
  
    updates["blogs/" + info.id] = info;
    return update(ref(db), updates);
  };
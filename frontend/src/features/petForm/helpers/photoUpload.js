import { storage } from "../../../firebase";

export const handleUpload = (setUrl, image, setProgress) => {
  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          setUrl(url);
        });
    }
  );
};

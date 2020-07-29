import React, { useState } from "react";
import { storage } from "../../firebase";


const PetForm = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    // const fileInput = React.createRef()

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = (e) => {
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress)
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              })
          }
        );
      };
      console.log("image: ", image);

      return (
        <div>

        <h1> Hello </h1>

            <div>
            <form>
                <progress value={progress} max="100"/>
                <br/>
                <input type="file"  
                    onChange={handleChange}/>
                {/* ref={fileInput} */}

                <button onClick={handleUpload}> Upload Your Pet's Photo </button>
                <br/>

            </form>
            </div>

            <div>
                <img src={url} alt="firebase-image"/>
            </div>



          </div>

      )
}


export default PetForm
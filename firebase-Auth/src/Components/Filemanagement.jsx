import React, { useState } from 'react'
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase';

const UploadFile = () => {
    const [file,setFile] = useState(null);
    const [url,setUrl] = useState("");

    const handleUpload = async(e)=>{
        e.preventDefault();

        if(!file){
            alert('Please upload image.!')
            return;
        }

        const storageRef = ref(storage,`uploads/${file.name}`);

        await uploadBytes(storageRef,file);

        const imageUrl = await getDownloadURL(storageRef);
        setUrl(imageUrl);
        alert('File upload successfully.!');

    }
  return (
    <div>
        <input type="file" onChange={(e)=>setFile(e.target.value)} />
        <button onClick={handleUpload}>Upload</button>

        <a href={url} download>Download</a>
    </div>
  )
}

export default UploadFile
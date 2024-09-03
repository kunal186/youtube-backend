import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET  // Your Cloudinary API secret
  });

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if(!localfilepath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })
        //file has been uploaded successfully
      //  console.log("file is uploaded on cloudinary", response.url)
      fs.unlinkSync(localfilepath)
        return response
    } catch (error) {
        fs.unlinkSync(localfilepath)
        return null
    }
}


 export{uploadOnCloudinary}
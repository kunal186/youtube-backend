import { v2 } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if(!localfilepath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localfilepath)
        return null
    }
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET  // Your Cloudinary API secret
  });
  module.exports = cloudinary;
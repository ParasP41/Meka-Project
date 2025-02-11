import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudnary = async (localFilePath) => {
    try {
        if (!localFilePath) return null; //if there has no local path then return null
        //upload on cloudnary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file upload successfully  
        console.log("file upload successfully on cloudinary", response.url)
        return response;
    } catch (error) { 
        fs.unlinkSync(localFilePath)//remove the locally saves files temporary file as the upload operation got failed
    }
}

export {uploadOnCloudnary}

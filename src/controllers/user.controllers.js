import { asyncHandler } from '../utils/asyncHandler.js'

const registerHandler = asyncHandler(async (req, res) => {
    //get user detail from frontend
    //validation - not empty
    //check if user already exists : check from username , email
    //check for images check for avatar
    //upload them to cloudinary, avatar
    //create user object - cretate entry in db
    //remove password and refresh token filed from responce
    //check for user creation
    //return responce

    const { fullname, email, username, password } = req.body
    console.log(fullname,email,username,password)
})

export { registerHandler };
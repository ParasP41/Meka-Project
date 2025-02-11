import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiErrors.js'
import { User } from '../models/user.model.js'
import {uploadOnCloudnary} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'

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

    const { fullname, email, username, password } = req.body //if data is coming from form or json so we use res.bosy
    // if(fullname ==="")
    // {
    //     throw new ApiError(400,"fullname is required") 
    // }

    if ([fullname, email, username, password].some((field) => {
        return field?.trim() === ""
    })) {
        throw new ApiError(400, "fullname is required")
    }

    const extendedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if (extendedUser) {
        throw new ApiError(409, "Username or email already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file not found")
    }

    const avatar=await uploadOnCloudnary(avatarLocalPath)
    const coverImage = await uploadOnCloudnary(avatarLocalPath)

    if(!avatar) {
        throw new ApiError(400, "Avatar file not found")
    }

    const user = await User.create({
        fullname,
        email,
        password,
        username: username.toLowercase,
        avatar: avatar.url,
        coverImage: coverImage?.url || ""
    })
    
    const cretatedUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!cretatedUser)
    {
        throw new ApiError(500, "something went wrong while registering the user")
    }

    return res.status(201).json(new ApiResponse(
        200,"user registered successfully",cretatedUser
    ))
})

export { registerHandler };
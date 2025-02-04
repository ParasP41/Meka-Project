import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const videoSchema = new mongoose.Schema({
    videoFile:
    {
        type: String,
        required: true,
        unique: true
    },
    thumbnail:
    {
        type: String,
        required: true,
    },
    title:
    {
        type: String,
        required: true,
    },
    description:
    {
        type: String,
        required: true,
    },
    duration:
    {
        type: Number,
        required: true,
    },
    views:
    {
        type: Number,
        required: true,
        default: 0,
    },
    isPublished:
    {
        type: Boolean,
        default: true,
    },
    owner:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });




export const Video = mongoose.model("Video", videoSchema);
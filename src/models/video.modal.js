import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2";
const videoSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      trim: true,
    },
    description: {
      required: true,
      type: String,
      trim: true,
    },
    videofile: {
      required: true,
      type: String,
    },
    thumbnail: {
      required: true,
      type: String,
    },
    duration: {
      required: true,
      type: Number,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

videoSchema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("video", videoSchema);

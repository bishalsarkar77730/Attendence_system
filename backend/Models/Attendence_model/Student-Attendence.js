import mongoose from "mongoose";

const StudentAttendenceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    UserUuid: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      require: true,
    },
    TeacherUserId: {
      type: String,
      require: true,
    },
    TeacherUuid: {
      type: String,
      require: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    day: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    attendence: {
      type: Boolean,
      default: false,
    },
    dayType: {
      type: String,
      enum: ["holiday", "weekend", "halfday", "workday"],
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

export default mongoose.model("StudentAttendence", StudentAttendenceSchema);

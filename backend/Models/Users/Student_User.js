import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    UuId: {
      type: String,
      require: true,
      unique: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    number: {
      type: Number,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      enum: ["BSC(CS)", "plane(Bsc)", "Biotechnology", "BCA", "BA", "Bcom"],
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    verified: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

export default mongoose.model("StudentUser", StudentSchema);

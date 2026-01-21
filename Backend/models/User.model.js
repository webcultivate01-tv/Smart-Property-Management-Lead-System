import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    photoUrl: {
      type: String,
      default: "",
    },

    /* 🔐 OTP for Login / Forgot Password */
    otp: {
      type: String,
    },

    otpExpires: {
      type: Date,
    },
    isOtpVerifed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", adminSchema);
export default User;

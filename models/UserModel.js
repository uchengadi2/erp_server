const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name}"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Provide a password"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [false, "Please confirm your password"],
    //this only works on save or create
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not the same",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  staffUserDetail: {
    staffNumber: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    maritalStatus: {
      type: String,
      enum: ["married", "divorced", "single", "custom-union", "widowed"],
    },
    dateOfBirth: {
      type: Date,
    },
    highestLevelOfEducationAttained: {
      type: String,
      enum: [
        "PhD",
        "Masters",
        "Bachelors",
        "Higher Diploma",
        "Diploma",
        "OLevel",
        "Others",
      ],
    },
    courseOfStudy: {
      type: String,
      trim: true,
    },
    References: [String],
    yearsOfExperience: {
      type: Number,
    },
    houseAddress: {
      type: String,
    },
    nextOfKin: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      relationship: {
        type: String,
        enum: [
          "sibling",
          "uncle",
          "aunt",
          "spouse",
          "friend",
          "parent",
          "others",
        ],
      },
    },
    guarantor: [
      {
        name: {
          type: String,
        },
        address: {
          type: String,
          trim: true,
        },
        gender: {
          type: String,
          enum: ["male", "female"],
        },
        relationship: {
          type: String,
          enum: [
            "sibling",
            "uncle",
            "aunt",
            "spouse",
            "friend",
            "parent",
            "others",
          ],
        },
      },
    ],
    currentServiceOutlet: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceOutlet",
    },
    servedServiceOutlet: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "ServiceOutlet",
      },
    ],
  },
  customerDetails: {},
  partnerDetails: {},
});

userSchema.pre("save", async function (next) {
  //only run this function if password is actually modified
  if (!this.isModified("password")) return next();
  //hash the password with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

//create an instance function
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimeStamp;
  }

  return false;
};

userSchema.pre(/^find/, function (next) {
  //this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  //encrypt this reset token
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

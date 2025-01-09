const User = require("../../models/user.model");
const { otpPhoneSender } = require("../../utils/otp.phone");
const { otpEmailSender } = require("../../utils/otp.email");
const otp = require("../../models/otp.model");
const { createJwtToken, verifyJwtToken } = require("../../utils/token.util");
const imageUploader = require("../../utils/image.uploader");
const catchAsync = require("../../utils/catch.async");
const jwt = require("jsonwebtoken");
const AppError = require("../../utils/app.error");
const nodemailer = require("nodemailer");
const OTP = require("../../models/otp.model");

function generateSixDigitNumber() {
  // Generate a random number between 0 and 999999
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return randomNumber;
}

exports.sendOtpOnNumber = async (req, res, next) => {
  try {
    // const {name, city, gender , dob , profileImage , phone, email ,  role}  = req.body;
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpResponse = await otpPhoneSender(phone, otp.toString());

    //otp send successfully
    if (otpResponse.success) {
      const user = await User.findOne({ phone });
      //user not exist
      if (!user) {
        const otpData = new otp({
          phone: phone,
          otp: otp,
        });
        await otpData.save();
      }

      res.status(200).json({ message: "OTP sent to your phone", otp: otp });
    } else {
      res.status(400).json({ message: "OTP not sent" });
    }

    // await otpData.save();
  } catch (error) {
    res.status(500).json({ message: error.message.data });
  }
};

exports.sendOtpOnEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpResponse = await otpEmailSender({ email, otp });
    if (otpResponse) {
      res.status(200).json({ message: "OTP sent to your email", otp: otp });
    } else {
      res.status(400).json({ message: "OTP not sent" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendOtp = catchAsync(async (req, res, next) => {
  const otp = generateSixDigitNumber();
  let transporter = nodemailer.createTransport({
    service: "gmail", // Use your email provider
    auth: {
      user: process.env.SERVER_EMAIL,
      pass: process.env.SERVER_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.SERVER_EMAIL,
    to: req.body.email,
    subject: "OTP for adding on JBMR Cricket",
    text: `OTP - ${otp}`,
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      return next(new AppError(error));
    } else {
      await OTP.deleteMany({ email: req.body.email });
      const result = await OTP.create({ email: req.body.email, otp: otp });
      res.status(201).json({
        status: "success",
        data: [],
      });
    }
  });
});

exports.alreadyPlayer = catchAsync(async (req, res, next) => {
  let phone = req.body.phone;
  console.log(req.body);

  const alreadyPlayer = await User.findOne({ phone });

  if (!alreadyPlayer) {
    res.status(202).json({
      status: "success",
      data: {
        user: null,
        isFound: false,
      },
    });
  } else {
    res.status(202).json({
      status: "success",
      data: {
        user: alreadyPlayer,
        isFound: true,
      },
    });
  }
});

exports.alreadyPlayerWithEmail = catchAsync(async (req, res, next) => {
  let email = req.body.email;
  console.log(req.body);

  const alreadyPlayer = await User.findOne({ email });

  const token = createJwtToken({ userId: alreadyPlayer._id });

  if (!alreadyPlayer) {
    res.status(202).json({
      status: "success",
      data: {
        user: null,
        isFound: false,
      },
    });
  } else {
    res.status(202).json({
      status: "success",
      data: {
        user: alreadyPlayer,
        isFound: true,
        jwt:token
      },
    });
  }
});

exports.verifyOTP = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;
  const tempUser = await OTP.findOne({ email: email });

  if (Number(tempUser.otp) === Number(otp)) {
    await OTP.deleteMany({ email });
    res.status(200).json({
      status: "Success",
      data: [],
    });
  } else {
    return next(new AppError("Invalid OTP", 400));
  }
});

exports.createOrUpdateProfile = async (req, res, next) => {
  try {
    const userDetails = req.body;

    // Check if a file was uploaded
    let imageUrl = null;
    // let oldImagePublicId = null;
    // let uploadResponse = null;

    // Check if the user already exists
    // const existingUser = await User.findOne({ email: userDetails.email });

    // If the user exists and has an image, store the public ID
    // if (existingUser && existingUser.profileImage) {
    //     oldImagePublicId = existingUser.profileImage.public_id; // Assuming profileImage stores the public_id
    // }

    // If a new file is uploaded
    // if (req.file) {
    //     // If there is an old image, delete it from Cloudinary
    //     if (oldImagePublicId) {
    //         try {
    //             await cloudinary.uploader.destroy(oldImagePublicId); // Delete the old image
    //             console.log('Old image deleted from Cloudinary:', oldImagePublicId);
    //         } catch (err) {
    //             console.error('Error deleting old image from Cloudinary:', err);
    //             return res.status(500).json({ message: 'Failed to delete old image.' });
    //         }
    //     }

    // Upload the new image and await the result
    try {
      uploadResponse = await imageUploader(req.file.buffer); // Assuming imageUploader returns the URL and public_id
      imageUrl = uploadResponse.url; // Store the new image URL
      console.log("New image uploaded to Cloudinary:", imageUrl);
    } catch (err) {
      console.error("Error uploading new image:", err);
      return res.status(500).json({ message: "Failed to upload new image." });
    }
    // } else {
    //     console.log('No new file uploaded.');
    // }

    // Update user details in the database
    const user = await User.findOneAndUpdate(
      { email: userDetails.email },
      {
        ...userDetails,
        profitournamentIdleImage: {
          url: imageUrl,
          public_id: uploadResponse.public_id,
        }, // Store the new image URL and public_id
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      }
    );

    // Create jwt
    const token = createJwtToken({ userId: user._id });

    // Determine if this was a new user or an update
    const message =
      user.createdAt.getTime() === user.updatedAt.getTime()
        ? "Profile created successfully"
        : "Profile updated successfully";

    // Return token & user
    res.status(200).json({ message, user, token });
  } catch (error) {
    console.error("Error creating/updating user:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res
      .status(500)
      .json({ message: "An error occurred while processing the user." });
  }
};

exports.createByEmailAndPhone = catchAsync(async (req, res, next) => {
  const { email, phone, firstName, lastName } = req.body;
  const newUser = await User.create({ email, phone, firstName, lastName });
  if (!newUser) {
    return next(new AppError("Something Wrong Occured"));
  }

  return res.status(201).json({
    status: "Success",
    data: newUser,
  });
});

// exports.protect = async (req, res,next) => {
//     try{
//         let token;
//         //get token
//         if(
//             req.headers.authorization &&
//             req.headers.authorization.startsWith("Bearer")
//         ){
//             token = req.headers.authorization.split(" ")[1]
//         }

//         if(!token){
//             res.stauts
//         }

//         //2 Verificaton token
//         const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

//         //3 check if user exist
//          if (!decoded) {
//             return next(
//             new AppError(
//             "The user belonging to this token does no longer exist.",401
//          )
//         );
//      }
//         const currentUser = await User.findById(decoded.id);

//         if (!currentUser) {
//     return next(
//       new AppError(
//         "The user belonging to this token does no longer exist.",
//         401
//       )
//     );
//   }

//   req.user = currentUser;
//   res.locals.user = currentUser;
//   next();

//     }catch(error){
//         res.status(500).json({ message: error.message });
//     }
// }

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //get token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.stauts;
  }

  //2 Verificaton token
  const decoded = jwt.verify(token, process.env.JWT_SECRET); // Directly use jwt.verify

  //3 check if user exist
  if (!decoded) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }
  const currentUser = await User.findById(decoded.userId);

  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.getMe = catchAsync(async (req, res) => {
  res.status(400).json({ user: req.user });
});

exports.logout = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyMatches = catchAsync(async (req, res, next) => {
  const userData = await User.findById(req.user._id)
    .select("matches")
    .populate({
      path: "matches.matchID",
      populate: {
        path: "teamA teamB",
        select: "teamName",
      },
    })
    .exec();

  res.status(201).json({
    status: "Success",
    data: userData,
  });
});

exports.getAllMatches = catchAsync(async (req, res, next) => {
  //  const userCity = await User.find(req.user._id).city
  //  const matches = await Matches.
});

exports.getMyTournaments = catchAsync(async (req, res, next) => {
  const userData = await User.findById(req.user._id)
    .populate({
      path: "Tournament.tournamentId",
    })
    .exec();

  res.status(201).json({
    status: "Success",
    data: userData,
  });
});

exports.getMyTeams = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const data = await User.findById(userId).populate({
    path: "teams.teamId",
  });

  if (!data) {
    return next(new AppError("User Not Found", 400));
  }

  res.status(201).json({
    status: "Success",
    data,
  });
});

exports.getPlayerInd = catchAsync(async (req, res, next) => {
  const playerId = req.params.playerId;

  const data = await User.findById(playerId);

  if (!data) {
    return next(new AppError("Cannot find player", 400));
  }

  res.status(201).json({
    status: "Success",
    data,
  });
});

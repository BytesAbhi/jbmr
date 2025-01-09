// const { Tournament } = require("../../models/tournament.model");

const { findByIdAndUpdate, findById } = require("../../models/otp.model");
const Team = require("../../models/team.model");
const User = require("../../models/user.model");
const AppError = require("../../utils/app.error");
const catchAsync = require("../../utils/catch.async");
const imageUploader = require("../../utils/image.uploader");

exports.createTeam = catchAsync(async (req, res, next) => {
  let teamDetails = req.body;

  uploadResponse = await imageUploader(req.file.buffer, "teamLogo"); // Assuming imageUploader returns the URL and public_id
  imageUrl = uploadResponse.url; // Store the new image URL

  const { file, ...rest } = req.body; // Destructure to get the file and the rest of the body

  const teamObj = {
    ...rest,
    teamLogo: imageUrl,
  };

  const teamRes = await Team.create(teamObj);
  const teamId = teamRes._id;

  //if addMyself is true
  if (teamDetails.addMyself) {
    const userId = req.user._id;
    const currUser = await User.findById(userId);
    currUser.teams.addToSet({ teamId: teamId, owner: true });
    teamRes.teamPlayer.addToSet(userId);
    await currUser.save();
    await teamRes.save();

    if (!currUser) {
      return next(new AppError("User not found", 404));
    }
  }
  res.status(201).json({
    status: "success",
    data: {
      team: teamRes,
    },
  });
});

exports.addTeamMember = catchAsync(async (req, res, next) => {
  const {
    teamId,
    userId,
    phone,
    email,
    firstName,
    lastName,
    alreadyPlayer,
    pin,
  } = req.body;
  const team = await Team.findById(teamId);
  let user;

  

let alreadyInTeam = team.teamPlayer.find(player => player.toString() === userId);

  if( alreadyInTeam){
    return next(new AppError('All ready a player'))
  }

  if (!alreadyPlayer) {
    if (pin === "1234") {
      user = await User.create({ firstName, lastName, phone, email });
    }
  } else {
    user = await User.findById(userId);
  }
  team.teamPlayer.addToSet(userId);
  user.teams.addToSet({ teamID: team._id });

  await team.save();
  await user.save();
  res.status(200).json({ status: "success" });
});

exports.getPlayers = catchAsync(async (req, res, next) => {
  const teamId = req.params.teamId;
  console.log(teamId);

  const data = await Team.findById(teamId)
    .select("teamPlayer teamName") // Fields for the main `Team` document
    .populate({
      path: "teamPlayer", // Path for population
      select: "_id email city firstName lastName gender profileImage phone", // Fields for `teamPlayer` documents
    });

  res.status(200).json({
    status: "success",
    data,
  });
});
//sa

exports.getAllTeams = catchAsync(async (req, res, next) => {

  const teams = await Team.find();
  if (!teams) {
    return next(new AppError("Team does not exists", 400));
  }

  res.status(200).json({
    status: "Success",
    data: teams,
  });
});

exports.getIndTeam = catchAsync(async (req, res, next) => {
  const teamId = req.params.teamId.toString();

  const resp = await Team.findById(teamId);

  if (!resp) {
    return next(new AppError("Cannot find any team", 400));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: resp,
    },
  });
});

exports.getAllTeamsCity = catchAsync(async (req, res, next) => {
  const teamCity = req.body.teamCity;

  const teams = await Team.find({
    teamCity: { $regex: teamCity, $options: "i" },
  });
  if (!teams) {
    return next(new AppError("Team does not exists", 400));
  }

  res.status(200).json({
    status: "Success",
    data: teams,
  });
});

const Team = require("../../models/team.model");
const Tournament = require("../../models/tournament.model");
const User = require("../../models/user.model");
const AppError = require("../../utils/app.error");
const catchAsync = require("../../utils/catch.async");
const imageUploader = require("../../utils/image.uploader");

exports.createTournament = catchAsync(async (req, res, next) => {
  const data = {
    ...req.body,
    ownerId: req.user._id,
  };

  uploadImg1 = await imageUploader(
    req.files.tournamentBanner[0].buffer,
    "tournamentLogo"
  );
  uploadImg2 = await imageUploader(
    req.files.tournamentLogo[0].buffer,
    "tournamentLogo"
  );

  data.tournamentBanner = uploadImg1.url;
  data.tournamentLogo = uploadImg2.url;

  const resp = await Tournament.create(data);

  const tournamentOwner = await User.findById(req.user._id);

  tournamentOwner.Tournament.push({
    tournamentId: resp._id,
    owner: true,
  });

  await tournamentOwner.save();

  console.log(resp);

  res.status(200).json({
    status: "success",
    data: {
      data: resp,
    },
  });
  // Create a new tournament using the request body
  // const tournament = await Tournament.create(req.body);
  // Send a success response with the created tournament
  // res.status(201).json({ tournament }); // Use the correct variable name
});

exports.getIndTournament = catchAsync(async (req, res, next) => {
  const indTournamentId = req.params.tournamentId;
  console.log(indTournamentId);
  
  const indTournament = await Tournament.findById(indTournamentId);

  if (!indTournament) {
    return next(new AppError("No tournament found by this ID", 400));
  }

  res.status(200).json({
    status: "Success",
    data: {
      data: indTournament,
    },
  });
});

exports.addTeam = catchAsync(async (req, res, next) => {
  const { tournamentId, teamIds } = req.body;
  console.log(tournamentId);

  const tournament = await Tournament.findById(tournamentId);
  if (!tournament) {
    return next(new AppError("Tournament not found", 400));
  }

    // Validate and add teamIds while ensuring uniqueness
    for (const teamId of teamIds) {
      console.log(teamId);

      const team = await Team.findById(teamId);
      if (!team) {
        return next(new AppError(`Team with ID ${teamId} not found`, 400));
      }

      // Check if the teamId already exists
      if (!tournament.team.includes(teamId)) {
        tournament.team.push(teamId); // Add only unique values
      }
    }

  // tournament.team = []

  await tournament.save();

  res.status(201).json({
    status: "Success",
    data: {
      data: tournament,
    },
  });
});

exports.getAllTournamentsByCity = catchAsync(async(req,res,next)=>{


  const tournamentCity = req.body.tournamentCity;

    const data = await Tournament.find({
      tournamentCity:{$regex: tournamentCity , $options:"i"}
    })

    if(!data){
        return next(new AppError('Tournament not found',400))
    }

    res.status(200).json({
        status:"Success",
        data:data
    })

})

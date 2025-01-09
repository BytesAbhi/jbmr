const Match = require("../../models/match.model");
const Team = require("../../models/team.model");
const User = require("../../models/user.model");
const AppError = require("../../utils/app.error");
const catchAsync = require("../../utils/catch.async");

exports.createMatch = catchAsync(async (req, res, next) => {
  const ownerId = req.user._id;

  const match = {
    ...req.body,
    ownerId,
  };

  const teamId1 = req.body.teamA;
  const teamId2 = req.body.teamB;

  // Create the match
  const resp = await Match.create(match);
  console.log(resp);

  // Fetch the teams
  const team1 = await Team.findById(teamId1);
  const team2 = await Team.findById(teamId2);

  if (!team1 || !team2) {
    return next(new Error("One or both teams not found"));
  }

  team1.matches.addToSet(resp._id);
  team2.matches.addToSet(resp._id);

  // if (!Array.isArray(req.body.teamAsquad) || !Array.isArray(req.body.teamBsquad)) {
  // throw new Error('teamAsquad and teamBsquad must be arrays');
  // }

  // Update players in team A squad
  const teamAsquadPromises = req.body.teamAsquad.map(async (indPlayer) => {
    const player = await User.findById(indPlayer);
    if (!player) throw new Error(`Player with ID ${indPlayer} not found`);

    player.matches.push({
      matchID: resp._id,
      owner: ownerId.toString() === indPlayer.toString(),
    });

    return player.save();
  });

  // Update players in team B squad
  const teamBsquadPromises = Array(req.body.teamBsquad).map(
    async (indPlayer) => {
      const player = await User.findById(indPlayer);
      if (!player) throw new Error(`Player with ID ${indPlayer} not found`);

      player.matches.push({
        matchID: resp._id,
        owner: ownerId.toString() === indPlayer.toString(),
      });

      return player.save();
    }
  );

  // Wait for all players and teams to be saved
  await Promise.all([...teamAsquadPromises, ...teamBsquadPromises]);

  await team1.save();
  await team2.save();

  let ownerMatch = false;
  const ownerDetails = await User.findById(ownerId);

  ownerDetails.matches.map((matchIndDet) => {
    if (matchIndDet.matchID && matchIndDet.matchID === resp._id) {
      matchIndDet.owner = true;
      ownerMatch = true;
    }
  });
  if (!ownerMatch) {
    ownerDetails.matches.push({
      matchID: resp._id,
      owner: true,
    });
  }

  await ownerDetails.save();

  res.status(201).json({
    status: "Success",
    data: {
      data: resp,
    },
  });
});

exports.getAllMatches = catchAsync(async (req, res, next) => {
  const data = await Match.find();

  res.status(201).json({
    status: "Success",
    data,
  });
});

exports.getIndMatch = catchAsync(async (req, res, next) => {
  const matchId = req.params.matchId;

  const data = await Match.findById(matchId).populate("teamA teamB");

  if (!data) {
    return next("No Match Found By This Id", 400);
  }

  res.status(201).json({
    status: "Success",
    data,
  });
});

exports.getAllMatchCity = catchAsync(async (req, res, next) => {
  const city = req.body.city;

  const data = await Match.find({ city }).populate({
    path: "teamA teamB",
    select: "teamName",
  });

  if (!data) {
    return next(new AppError("City not found", 400));
  }

  res.status(200).json({
    status: "Success",
    data: data,
  });
});

exports.setCaptainAndWicketKeeper = catchAsync(async (req, res, next) => {
  const matchId = req.params.matchId;
  const { team, captain, wicketKeeper } = req.body;

  const match = await Match.findById(matchId);
  console.log(match.teamA.toString(), team);

  if (match.teamA.toString() === team) {
    console.log("sas");

    match.teamACaptain = captain;
    match.teamAWC = wicketKeeper || null;
  } else if (match.teamB.toString() === team) {
    match.teamBCaptain = captain;
    match.teamBWC = wicketKeeper;
  } else {
    console.log("sahil");
  }

  await match.save();

  res.status(201).json({
    status: "Success",
  });
});

exports.tossWon = catchAsync(async (req, res, next) => {
  const { matchId, teamId, inningChoose } = req.body;

  // Use findById or findOne to fetch a single document
  const match = await Match.findById(matchId); // Fetch match by its ID

  if (!match) {
    return next(new AppError("Match Not Found", 400));
  }

  let otherTeam;

  if (match.teamA === teamId) {
    otherTeam = match.teamB;
  } else {
    otherTeam = match.teamA;
  }

  if (inningChoose === "batting") {
    match.currentState.currentBattingTeam = teamId;
    match.currentState.currentBowlingTeam = otherTeam;
  } else if (inningChoose === "bolwing") {
    match.currentState.currentBowlingTeam = teamId;
    match.currentState.currentBattingTeam = otherTeam;
  }

  // Update the tossWon field
  match.tossWon = teamId;

  // Save the updated match document
  await match.save();

  // Send success response
  res.status(200).json({
    status: "Success",
    data: match,
  });
});

exports.setIntailPlayers = catchAsync(async (req, res, next) => {
  const {
    striker,
    nonStriker,
    wicketKeeper,
    bowler,
    battingTeam,
    bowlingTeam,
  } = req.body;
  const matchId = req.params.matchId;

  const match = await Match.findById(matchId).populate("teamAsquad teamBsquad");

  if (!match) {
    return next(new AppError("Cannot find the match", 400));
  }

  match.currentState.striker = striker;
  match.currentState.nonStriker = nonStriker;
  match.currentState.currentWicketKeeper = wicketKeeper;
  match.currentState.currentBowler = bowler;
  match.currentState.currentBattingTeam = battingTeam;
  match.currentState.currentBowlingTeam = bowlingTeam;
  match.status = "continue";

  await match.save();

  res.status(201).json({
    status: "Success",
    data: match,
  });
});

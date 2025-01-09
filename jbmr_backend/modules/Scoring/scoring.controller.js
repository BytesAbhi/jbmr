const Match = require("../../models/match.model");
const playerScore = require("../../models/playerScore.model");
const AppError = require("../../utils/app.error");
const catchAsync = require("../../utils/catch.async");

exports.addRun = catchAsync(async (req, res, next) => {});

exports.addBoundary = catchAsync(async (req, res, next) => {});

exports.addWicket = catchAsync(async (req, res, next) => {});

exports.otherBalls = catchAsync(async (req, res, next) => {});

exports.overUpdate = catchAsync(async (req, res, next) => {
  const matchId = req.params.matchId;
  const overUpdate = req.body.score;
  const match = await Match.findById(matchId);

  overUpdate.forEach(async (perBallUpdate) => {
    // console.log(perBallUpdate);
    const bowlerId = perBallUpdate.bowler.bowlerId;
    const strikerId = perBallUpdate.batsMen.strikerId;
    const nonStrikerId = perBallUpdate.batsMen.nonStrikerId;
    const battingTeam = match.currentState.currentBattingTeam.toString();
    const bowlingTeam = match.currentState.currentBowlingTeam.toString();

    if (perBallUpdate.wicket) {
      const wicketType = perBallUpdate.wicketType;
      const wicketOtherPlayer = perBallUpdate.wicketOtherPlayer || null;
      const newBatsmen = perBallUpdate.newBatsmen;
      //teamUpdate
      match.teamScores.map((obj) => {
        if (obj.teamId.toString() === battingTeam.toString()) {
          obj.wickets += 1;
        }
      });

      //playerUpdate
      match.playerScores.map((pl) => {
        switch (wicketType) {
          case "Bowled":
            if (pl.playerId.toString() === strikerId.toString()) {
              pl.wicketTakenBy = bowlerId;
              pl.WicketType = "Bowled";
            } else if (pl.playerId.toString() === bowlerId.toString()) {
              pl.wicketTaken = {
                bowlerId,
                batsmanId: strikerId,
                typeOfWicket: "Bowled",
              };
            }

            break;

          case "Caught":
            if (pl.playerId.toString() === strikerId.toString()) {
              pl.wicketTakenBy = bowlerId;
              pl.wicketTakenByOtherPlayer = wicketOtherPlayer;
              pl.WicketType = "Caught";
            } else if (pl.playerId.toString() === bowlerId.toString()) {
              pl.wicketTaken = {
                bowlerId,
                batsmanId: strikerId,
                typeOfWicket: "Caught",
                fielderId: wicketOtherPlayer,
              };
            }

            break;

          case "LBW":
            if (pl.playerId.toString() === strikerId.toString()) {
              pl.wicketTakenBy = bowlerId;
              pl.WicketType = "LBW";
            } else if (pl.playerId.toString() === bowlerId.toString()) {
              pl.wicketTaken = {
                bowlerId,
                batsmanId: strikerId,
                typeOfWicket: "LBW",
              };
            }
            break;

          case "Run Out":
            if (pl.playerId.toString() === strikerId.toString()) {
              pl.wicketTakenBy = bowlerId;
              pl.wicketTakenByOtherPlayer = wicketOtherPlayer;
              pl.WicketType = "Run Out";
            } else if (pl.playerId.toString() === bowlerId.toString()) {
              pl.wicketTaken = {
                bowlerId,
                batsmanId: strikerId,
                typeOfWicket: "Run Out",
                fielderId: wicketOtherPlayer,
              };
            }
            break;

          case "Stumped":
            if (pl.playerId.toString() === strikerId.toString()) {
              pl.wicketTakenBy = bowlerId;
              pl.wicketTakenByOtherPlayer = wicketOtherPlayer;
              pl.WicketType = "Stumped";
            } else if (pl.playerId.toString() === bowlerId.toString()) {
              pl.wicketTaken = {
                bowlerId,
                batsmanId: strikerId,
                typeOfWicket: "Stumped",
                fielderId: wicketOtherPlayer,
              };
            }
            break;

          case "Hit Wicket":
            if (pl.playerId.toString() === strikerId.toString()) {
              pl.wicketTakenBy = bowlerId;
              pl.WicketType = "Hit Wicket";
            } else if (pl.playerId.toString() === bowlerId.toString()) {
              pl.wicketTaken = {
                bowlerId,
                batsmanId: strikerId,
                typeOfWicket: "Hit Wicket",
              };
            }
            break;
          default:
            console.log(`Player ${strikerId} is out by other means`);
            break;
        }

        //ballByball
        //ballByballUpdate
        match.ballByBall.push({
          bowlerId,
          batsMen: {
            strikerId,
            nonStrikerId,
          },
          wicket: true,
          wicketType,
          wicketOtherPlayer,
        });
        //currentState Change
        match.currentState.striker = newBatsmen;
      });
    } else if (perBallUpdate.run) {
      //teamScore Update

      //if scoring first time
      if (match.teamScores.length === 0) {
        match.teamScores.push({
          teamId: battingTeam,
        });
        match.teamScores.push({
          teamId: bowlingTeam,
        });
      }

      match.teamScores.map((obj) => {
        if (obj.teamId.toString() === battingTeam) {
          if (perBallUpdate.four) {
            obj.runs += 4;
            obj.totalFours += 1;
          } else if (perBallUpdate.six) {
            obj.runs += 6;
            obj.totalSixes += 1;
          } else {
            obj.runs += perBallUpdate.run;
          }
        }
      });

      //playerScore

      //if first over
      if (match.playerScores.length === 0) {
        match.teamAsquad.map((pl) => {
          match.playerScores.push({
            playerId: pl,
          });
        });

        match.teamBsquad.map((pl) => {
          match.playerScores.push({
            playerId: pl,
          });
        });
      }

      match.playerScores.map((pl) => {
        if (pl.playerId.toString() === strikerId.toString()) {
          if (perBallUpdate.four) {
            pl.fours += 1;
          } else if (perBallUpdate.six) {
            pl.sixes += 1;
          }
          pl.runScore += perBallUpdate.run;
        } else if (pl.playerId.toString() === bowlerId.toString()) {
          pl.run += perBallUpdate.run;
          if (perBallUpdate.four) {
            pl.foursGiven += 1;
          } else if (perBallUpdate.six) {
            pl.sixesGiven += 1;
          }
        }
      });

      //ballByBall
      match.ballByBall.push({
        bowlerId,
        batsMen: {
          strikerId,
          nonStrikerId,
        },
        run: perBallUpdate.run,
        four: perBallUpdate.four || false,
        six: perBallUpdate.six || false,
      });
    } else if (perBallUpdate.otherBall) {
      if (perBallUpdate.otherBallType === "wideBall") {
        //teamUpdate
        console.log("wideWall");

        match.teamScores.map((obj) => {
          if (obj.teamId.toString() === battingTeam.toString()) {
            obj.runs += 1;
          } else if (obj.teamId.toString() === bowlingTeam.toString()) {
            console.log("bowling Team");

            obj.totalWides = obj.totalWides + 1;
          }
        });

        //playerUpdate

        match.playerScores.map((pl) => {
          if (pl.playerId.toString() === bowlerId.toString()) {
            pl.runGiven += perBallUpdate.run || 1;
            pl.wideBall += 1;
          }
        });

        //ballByball Update

        match.ballByBall.push({
          bowlerId,
          batsMen: {
            strikerId,
            nonStrikerId,
          },
          run: perBallUpdate.run,
          wideBall: true,
        });
      } else if (perBallUpdate.otherBallType === "noBall") {
        //teamUpdate

        match.teamScores.map((obj) => {
          if (obj.teamId.toString() === battingTeam.toString()) {
            obj.runs += 1;
          } else if (obj.teamId.toString() === bowlingTeam.toString()) {
            obj.totalNoBalls += 1;
          }
        });

        //playerUpdate

        match.playerScores.map((pl) => {
          if (pl.playerId.toString() === bowlerId.toString()) {
            pl.runGiven += perBallUpdate.run || 1;
            pl.noBalls += 1;
          }
        });

        //ballByball Update

        match.ballByBall.push({
          bowlerId,
          batsMen: {
            strikerId,
            nonStrikerId,
          },
          run: perBallUpdate.run,
          noBall: true,
        });
      }
    }
  });
  await match.save();

  res.status(201).json({
    status: "Success",
    data: match,
  });
});

exports.setIntialValues = catchAsync(async (req, res, next) => {
  const matchId = req.params.matchId;

  const matchData = await Match.findById(matchId);

  if (!matchData) {
    return next(new AppError("Cannot find match!", 400));
  }

  const teamA = matchData.teamA;
  const teamB = matchData.teamB;

  if (!matchData.playerScores || matchData.playerScores.length === 0)
    matchData.teamAsquad.map((plId) =>
      matchData.playerScores.push({ playerId: plId })
    );

  if (
    !matchData.playerScores ||
    matchData.playerScores.length === matchData.teamAsquad.length
  )
    matchData.teamBsquad.map((plId) =>
      matchData.playerScores.push({ playerId: plId })
    );

  if (!matchData.teamScores || matchData.teamScores.length === 0)
    matchData.teamScores.push({ teamId: teamA });

  if (!matchData.teamScores || matchData.teamScores.length === 1)
    matchData.teamScores.push({ teamId: teamB });

  await matchData.save();

  res.status(201).json({
    status: "Success",

    data: matchData,
  });
});

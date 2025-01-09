const authRoutes = require('../modules/auth/auth.route');
const tournamentRouter = require('../modules/Tournament/tournament.routes');
const teamRouter = require('../modules/Team/team.routes');
const matchRouter = require('../modules/Match/match.routes');
const scoreRouter = require('../modules/Scoring/scoring.routes')


var v1Routes = (app) => {
    app.use("/api/v1/auth",authRoutes)
    app.use("/api/v1/cricket/tournament",tournamentRouter);
    app.use("/api/v1/cricket/team",teamRouter);
    app.use("/api/v1/cricket/match",matchRouter);
    app.use("/api/v1/cricket/score",scoreRouter);
}

module.exports = v1Routes;
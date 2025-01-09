import pandas as pd

# Data for routes and their functionalities
routes_data = [
    {
        "Route": "/api/v1/auth/signupByNumber",
        "Method": "POST",
        "Functionality": "Send OTP to phone number for signup"
    },
    {
        "Route": "/api/v1/auth/createOrUpdateProfile",
        "Method": "POST",
        "Functionality": "Create or update user profile"
    },
    {
        "Route": "/api/v1/auth/createUser",
        "Method": "POST",
        "Functionality": "Create user with email and phone"
    },
    {
        "Route": "/api/v1/auth/getMe",
        "Method": "GET",
        "Functionality": "Fetch details of the logged-in user"
    },
    {
        "Route": "/api/v1/auth/signupByEmail",
        "Method": "POST",
        "Functionality": "Send OTP to email for signup"
    },
    {
        "Route": "/api/v1/auth/sendOtp",
        "Method": "POST",
        "Functionality": "Send OTP to user for verification"
    },
    {
        "Route": "/api/v1/auth/verifyOtp",
        "Method": "POST",
        "Functionality": "Verify the OTP entered by the user"
    },
    {
        "Route": "/api/v1/auth/logout",
        "Method": "GET",
        "Functionality": "Logout the user"
    },
    {
        "Route": "/api/v1/auth/checkPlayerExist",
        "Method": "POST",
        "Functionality": "Check if player exists by phone number"
    },
    {
        "Route": "/api/v1/auth/checkPlayerExistByEmail",
        "Method": "POST",
        "Functionality": "Check if player exists by email"
    },
    {
        "Route": "/api/v1/auth/getMyMatches",
        "Method": "GET",
        "Functionality": "Get all matches for the logged-in user"
    },
    {
        "Route": "/api/v1/auth/getAllMatches",
        "Method": "GET",
        "Functionality": "Get all matches"
    },
    {
        "Route": "/api/v1/auth/getMyTournaments",
        "Method": "GET",
        "Functionality": "Get all tournaments for the logged-in user"
    },
    {
        "Route": "/api/v1/auth/getMyTeams",
        "Method": "GET",
        "Functionality": "Get all teams for the logged-in user"
    },
    {
        "Route": "/api/v1/auth/getPlayerInd/:playerId",
        "Method": "GET",
        "Functionality": "Get individual player details by player ID"
    },
    # Add other routes similarly for all route files
    {
        "Route": "/api/v1/cricket/tournament/createTournament",
        "Method": "POST",
        "Functionality": "Create a new cricket tournament"
    },
    {
        "Route": "/api/v1/cricket/tournament/getIndTournament/:tournamentId",
        "Method": "GET",
        "Functionality": "Get details of a specific tournament"
    },
    {
        "Route": "/api/v1/cricket/tournament/getAllTournaments",
        "Method": "POST",
        "Functionality": "Get all tournaments by city"
    },
    {
        "Route": "/api/v1/cricket/tournament/addTeam",
        "Method": "POST",
        "Functionality": "Add a team to the tournament"
    },
    {
        "Route": "/api/v1/cricket/team/createTeam",
        "Method": "POST",
        "Functionality": "Create a new cricket team"
    },
    {
        "Route": "/api/v1/cricket/team/addPlayer",
        "Method": "POST",
        "Functionality": "Add a player to the team"
    },
    {
        "Route": "/api/v1/cricket/team/getPlayers/:teamId",
        "Method": "GET",
        "Functionality": "Get all players of a specific team"
    },
    {
        "Route": "/api/v1/cricket/team/getAllTeamCity",
        "Method": "POST",
        "Functionality": "Get all teams by city"
    },
    {
        "Route": "/api/v1/cricket/team/getAllTeam",
        "Method": "GET",
        "Functionality": "Get all teams"
    },
    {
        "Route": "/api/v1/cricket/team/getIndTeam/:teamId",
        "Method": "GET",
        "Functionality": "Get individual team details"
    },
    {
        "Route": "/api/v1/cricket/match/createMatch",
        "Method": "POST",
        "Functionality": "Create a new cricket match"
    },
    {
        "Route": "/api/v1/cricket/match/getAllMatches",
        "Method": "GET",
        "Functionality": "Get all cricket matches"
    },
    {
        "Route": "/api/v1/cricket/match/getIndMatch/:matchId",
        "Method": "GET",
        "Functionality": "Get details of a specific match"
    },
    {
        "Route": "/api/v1/cricket/match/getAll",
        "Method": "POST",
        "Functionality": "Get all matches by city"
    },
    {
        "Route": "/api/v1/cricket/match/setCaptainAndWC/:matchId",
        "Method": "POST",
        "Functionality": "Set captain and wicket keeper for a match"
    },
    {
        "Route": "/api/v1/cricket/match/tossResult",
        "Method": "POST",
        "Functionality": "Set toss result for a match"
    },
    {
        "Route": "/api/v1/cricket/match/setIntailPlayers/:matchId",
        "Method": "POST",
        "Functionality": "Set initial players for a match"
    },
    {
        "Route": "/api/v1/cricket/score/addScore/:matchId",
        "Method": "POST",
        "Functionality": "Add score for a match"
    },
    {
        "Route": "/api/v1/cricket/score/addBoundary/:matchId",
        "Method": "POST",
        "Functionality": "Add boundary score for a match"
    },
    {
        "Route": "/api/v1/cricket/score/addWicket/:matchId",
        "Method": "POST",
        "Functionality": "Add wicket score for a match"
    },
    {
        "Route": "/api/v1/cricket/score/otherBalls/:matchId",
        "Method": "POST",
        "Functionality": "Add other balls score for a match"
    },
    {
        "Route": "/api/v1/cricket/score/overUpdate/:matchId",
        "Method": "POST",
        "Functionality": "Update over score for a match"
    },
    {
        "Route": "/api/v1/cricket/score/setIntailData/:matchId",
        "Method": "GET",
        "Functionality": "Set initial data for a match"
    }
]

# Convert to DataFrame
df = pd.DataFrame(routes_data)

# Save to Excel
df.to_excel("routes_functionalities.xlsx", index=False)

print("Excel file created successfully: routes_functionalities.xlsx")

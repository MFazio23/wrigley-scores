import {Game, getBlankGame, League, Team} from './Game';

interface ScoreboardProps {
    games: Game[]
    selectedDate: string;
    onSelectedDateChange: (date: string) => void;
}

export function Scoreboard({games, selectedDate, onSelectedDateChange}: ScoreboardProps) {

    const getGamesForLeague = (league: League) => {
        const leagueGames = games.filter(game => game.homeTeam.league === league);

        console.log("League games", leagueGames);

        while (leagueGames.length < 6) {
            console.log("Adding blank games", league.length);
            leagueGames.push(getBlankGame(league));
        }
        return leagueGames;
    }

    const nlGames = getGamesForLeague('NL');
    const alGames = getGamesForLeague('AL');

    const handleSelectedDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectedDateChange(event.target.value)
    }

    return (
        <>
            <div id="scoreboard">
                <div id="header-1-frame">
                    <div id="header-1">
                    </div>
                </div>
                <div id="header-2-frame">
                    <div id="header-2">
                    </div>
                </div>
                <div id="scoreboard-main">
                    <div id="games-left">
                        <GameListingView games={nlGames}/>
                    </div>
                    <div id="games-right">
                        <GameListingView games={alGames}/>
                    </div>
                    <div id="clock">
                        <ClockView/>
                    </div>
                </div>
                <div id="date">
                    <input type="date" id="date" name="date" value={selectedDate} onChange={handleSelectedDateChange}/>
                </div>
            </div>
        </>
    )
}


function GameListingView({games}: { games: Game[] }) {
    return (
        <>
            {games ? games.slice(0, 6).map(game => <GameView key={game.gameId} game={game}/>) : null}
        </>
    );
}

function GameView({game}: { game: Game }) {
    return (
        <>
            <div className="game">
                <TeamGameView key={game.awayTeam.id} team={game.awayTeam} inningRuns={game.awayInningRuns}/>
                <TeamGameView key={game.homeTeam.id} team={game.homeTeam} inningRuns={game.homeInningRuns}/>
            </div>
        </>
    )
}

function TeamGameView({team, inningRuns}: { team: Team, inningRuns: number[] }) {
    const score = team.id === '' ? '' :
        inningRuns.reduce((acc, run) => acc + (isNaN(run) ? 0 : run), 0);
    return (
        <>
            <div className="tile wide">{team.startingPitcherNumber}</div>
            <div className="tile wide"></div>
            <div className="tile name">{team.id}</div>
            {inningRuns.slice(0, 9).map((run, index) => <div key={index} className="tile narrow">{run}</div>)}
            <div className="tile narrow">{score}</div>
        </>
    )
}

function ClockView() {
    return (
        <>
            <svg viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="67" className="dotted"/>
            </svg>
        </>
    )
}

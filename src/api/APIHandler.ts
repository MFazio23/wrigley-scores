import {Game, League, Team} from '../Game';
import {MLBAPIGame, MLBAPIInning, MLBAPIResponse, MLBAPITeamInfo} from './MLBTypes';
import {MLBTeam, MLBTeams} from '../MLBTeams';

const mlbURL = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=<selected-date>&endDate=<selected-date>&timeZone=America/Chicago&gameType=E&gameType=S&gameType=R&gameType=F&gameType=D&gameType=L&gameType=W&gameType=A&gameType=C&language=en&leagueId=103&leagueId=104&leagueId=159&sortBy=gameDate,gameStatus,gameType&hydrate=person,probablePitcher,linescore()'

function convertToGames(apiResponse: unknown): Game[] {
    const response = apiResponse as MLBAPIResponse;

    if (!response || !response['dates'] || response['dates'].length === 0) {
        return [];
    }
    const mlbGames = response.dates[0].games;

    return mlbGames.map((mlbGame) => convertMLBGameToGame(mlbGame)).filter(game => !!game);
}

function convertMLBGameToGame(mlbGame: MLBAPIGame): Game | undefined {
    const awayTeam = convertAPITeamToTeam(mlbGame.teams.away);
    const homeTeam = convertAPITeamToTeam(mlbGame.teams.home);

    if (!awayTeam || !homeTeam) return undefined

    return {
        gameId: mlbGame.gamePk,
        awayTeam: awayTeam,
        homeTeam: homeTeam,
        homeInningRuns: getInningRuns(mlbGame.linescore.innings, 'home'),
        awayInningRuns: getInningRuns(mlbGame.linescore.innings, 'away'),
    }
}

function getInningRuns(apiInnings: MLBAPIInning[], teamType: 'home' | 'away'): number[] {
    const innings = apiInnings.reduce((acc, inning) => {
        acc[inning.num - 1] = inning[teamType].runs ?? 'X';
        return acc;
    }, [] as number[]);

    while (innings.length < 9) {
        innings.push(0);
    }

    return innings;
}

function convertAPITeamToTeam(mlbAPITeam: MLBAPITeamInfo): Team | undefined {
    const idPlusTeam: [string, MLBTeam] | undefined = Object.entries(MLBTeams).find(([_, team]) => team.name === mlbAPITeam.team.name);

    if (!idPlusTeam) return undefined;

    const [teamId, mlbTeam] = idPlusTeam;

    return {
        id: teamId,
        name: mlbTeam.name,
        league: mlbTeam.league as League,
        startingPitcherNumber: mlbAPITeam.probablePitcher.primaryNumber ?? ''
    }
}

export async function loadGames(date: string): Promise<Game[]> {
    console.log("loading games for date", date);
    try {
        const url = mlbURL.replace(/<selected-date>/gi, date);
        const response = await fetch(url, {});
        const data = await response.json();

        return convertToGames(data);
    } catch (e) {
        console.error("Error loading games", e);
        return []
    }
}

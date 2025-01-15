export interface Game {
    gameId: number;
    awayTeam: Team;
    homeTeam: Team;
    homeInningRuns: number[];
    awayInningRuns: number[];
}

export function getBlankGame(league: League) {
    const homeTeam: Team = {
        id: '',
        name: '',
        league: league,
        startingPitcherNumber: ''
    }

    const awayTeam: Team = {
        id: '',
        name: '',
        league: league,
        startingPitcherNumber: ''
    }

    return ({
        gameId: Math.random() * 1_000_000,
        awayTeam: awayTeam,
        homeTeam: homeTeam,
        homeInningRuns: Array<number>(9),
        awayInningRuns: Array<number>(9),
    });
}

export type League = 'AL' | 'NL' | 'MLB';

export interface Team {
    id: string;
    name: string;
    league: League;
    startingPitcherNumber: string;
}

export const getLeagueFromId = (id: number): League => {
    switch (id) {
        case 103:
            return 'AL';
        case 104:
            return 'NL';
        default:
            return 'MLB';
    }
}

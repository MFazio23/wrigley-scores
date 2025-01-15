export interface MLBTeam {
    id: string
    name: string;
    league: string;
}

export const MLBTeams: Record<string, MLBTeam> = {
    ARI: {
        id: 'ARI',
        name: 'Arizona Diamondbacks',
        league: 'NL',
    },
    ATL: {
        id: 'ATL',
        name: 'Atlanta Braves',
        league: 'NL',
    },
    CHC: {
        id: 'CHC',
        name: 'Chicago Cubs',
        league: 'NL',
    },
    CIN: {
        id: 'CIN',
        name: 'Cincinnati Reds',
        league: 'NL',
    },
    COL: {
        id: 'COL',
        name: 'Colorado Rockies',
        league: 'NL',
    },
    LAD: {
        id: 'LAD',
        name: 'Los Angeles Dodgers',
        league: 'NL',
    },
    MIA: {
        id: 'MIA',
        name: 'Miami Marlins',
        league: 'NL',
    },
    MIL: {
        id: 'MIL',
        name: 'Milwaukee Brewers',
        league: 'NL',
    },
    NYM: {
        id: 'NYM',
        name: 'New York Mets',
        league: 'NL',
    },
    PHI: {
        id: 'PHI',
        name: 'Philadelphia Phillies',
        league: 'NL',
    },
    PIT: {
        id: 'PIT',
        name: 'Pittsburgh Pirates',
        league: 'NL',
    },
    SD: {
        id: 'SD',
        name: 'San Diego Padres',
        league: 'NL',
    },
    SF: {
        id: 'SF',
        name: 'San Francisco Giants',
        league: 'NL',
    },
    STL: {
        id: 'STL',
        name: 'St. Louis Cardinals',
        league: 'NL',
    },
    WAS: {
        id: 'WAS',
        name: 'Washington Nationals',
        league: 'NL',
    },
    BAL: {
        id: 'BAL',
        name: 'Baltimore Orioles',
        league: 'AL',
    },
    BOS: {
        id: 'BOS',
        name: 'Boston Red Sox',
        league: 'AL',
    },
    CWS: {
        id: 'CWS',
        name: 'Chicago White Sox',
        league: 'AL',
    },
    CLE: {
        id: 'CLE',
        name: 'Cleveland Indians',
        league: 'AL',
    },
    DET: {
        id: 'DET',
        name: 'Detroit Tigers',
        league: 'AL',
    },
    HOU: {
        id: 'HOU',
        name: 'Houston Astros',
        league: 'AL',
    },
    KCR: {
        id: 'KCR',
        name: 'Kansas City Royals',
        league: 'AL',
    },
    LAA: {
        id: 'LAA',
        name: 'Los Angeles Angels',
        league: 'AL',
    },
    MIN: {
        id: 'MIN',
        name: 'Minnesota Twins',
        league: 'AL',
    },
    NYY: {
        id: 'NYY',
        name: 'New York Yankees',
        league: 'AL',
    },
    OAK: {
        id: 'OAK',
        name: 'Oakland Athletics',
        league: 'AL',
    },
    SEA: {
        id: 'SEA',
        name: 'Seattle Mariners',
        league: 'AL',
    },
    TBR: {
        id: 'TBR',
        name: 'Tampa Bay Rays',
        league: 'AL',
    },
    TEX: {
        id: 'TEX',
        name: 'Texas Rangers',
        league: 'AL',
    },
    TOR: {
        id: 'TOR',
        name: 'Toronto Blue Jays',
        league: 'AL',
    },
}

import './App.css'
import {Scoreboard} from './Scoreboard';
import {useCallback, useEffect, useState} from 'react';
import {Game} from './Game';
import {loadGames} from './api/APIHandler';

function App() {
    const [selectedDate, setSelectedDate] = useState<string>("2024-08-16")
    const [games, setGames] = useState<Game[]>([])

    const handleSelectedDateChange = (date: string) => {
        setSelectedDate(date)
    }

    const loadAndSetGames = useCallback(() => {
        loadGames(selectedDate).then((games) => {
            setGames(games)
        });
    }, [selectedDate]);

    useEffect(() => {
        loadAndSetGames();
        const interval = setInterval(() => {
            loadAndSetGames();
        }, 10_000)

        return () => clearInterval(interval);
    }, [loadAndSetGames]);

    return (
        <>
            <Scoreboard games={games} selectedDate={selectedDate} onSelectedDateChange={handleSelectedDateChange}/>
        </>
    )
}

export default App

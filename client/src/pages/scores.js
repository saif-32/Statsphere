import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

export const Scores = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://api-nba-v1.p.rapidapi.com/games/',
                params: {
                    season: '2023',
                },
                headers: {
                    'X-RapidAPI-Key': '#',
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const sortedGames = response.data.response.sort((a, b) => {
                    return new Date(b.date.start) - new Date(a.date.start);
                });
                setGames(sortedGames);
            } catch (error) {
                console.error('Error fetching games:', error);
                setError(`Failed to fetch games: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    return (
        <div>
            <Header />
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Latest NBA Scores</p>
                                <h1>Scores</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-12 text-center" style={{paddingTop: 10, paddingLeft: 250, paddingRight: 250}}>
                <div className="game-scores-container">
                    {games.map(game => (
                        <div key={game.gameId} className="game-score-card">
                            <div className="score-box">
                                <div className="team">
                                    <img src={game.teams.home.logo} alt={game.teams.home.name} />
                                </div>
                                <div className="score-info">
                                    <div className="game-progress">{game.status.long}</div>
                                    <div className="date">{formatDate(game.date.start)}</div>
                                    <div className="score">{game.scores.home.points} - {game.scores.visitors.points}</div>
                                    <div className="home-visitor">{game.teams.home.name} vs {game.teams.visitors.name}</div>
                                </div>
                                <div className="team">
                                    <img src={game.teams.visitors.logo} alt={game.teams.visitors.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Scores;

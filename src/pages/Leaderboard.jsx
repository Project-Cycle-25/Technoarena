import React from 'react';
import './Leaderboard.css';

const mockTeams = [
  { pos: 1, team: "JAKARTA CITY FC", played: 12, wins: 12, draws: 0, losses: 0, goalsFor: 48, goalsAgainst: 8, points: 36 },
  { pos: 2, team: "BALI CITY FC", played: 12, wins: 10, draws: 2, losses: 0, goalsFor: 44, goalsAgainst: 12, points: 32 },
  { pos: 3, team: "BANDUNG CITY FC", played: 12, wins: 9, draws: 2, losses: 1, goalsFor: 41, goalsAgainst: 15, points: 29 },
  { pos: 4, team: "SOLO CITY FC", played: 12, wins: 8, draws: 2, losses: 2, goalsFor: 38, goalsAgainst: 18, points: 26 },
  { pos: 5, team: "SURABAYA CITY FC", played: 12, wins: 8, draws: 1, losses: 3, goalsFor: 35, goalsAgainst: 22, points: 25 },
  { pos: 6, team: "MEDAN CITY FC", played: 12, wins: 7, draws: 3, losses: 2, goalsFor: 36, goalsAgainst: 25, points: 24 },
  { pos: 7, team: "MALANG CITY FC", played: 12, wins: 7, draws: 2, losses: 3, goalsFor: 33, goalsAgainst: 28, points: 23 },
  { pos: 8, team: "CIMAHI CITY FC", played: 12, wins: 5, draws: 4, losses: 3, goalsFor: 31, goalsAgainst: 26, points: 19 },
  { pos: 9, team: "MADIUN CITY FC", played: 12, wins: 5, draws: 3, losses: 4, goalsFor: 32, goalsAgainst: 29, points: 18 },
  { pos: 10, team: "SAMARINDA CITY FC", played: 12, wins: 4, draws: 5, losses: 3, goalsFor: 28, goalsAgainst: 27, points: 17 },
  { pos: 11, team: "BEKASI CITY FC", played: 12, wins: 3, draws: 6, losses: 3, goalsFor: 25, goalsAgainst: 30, points: 15 },
  { pos: 12, team: "YOGYAKARTA CITY FC", played: 12, wins: 3, draws: 6, losses: 3, goalsFor: 24, goalsAgainst: 28, points: 15 },
  { pos: 13, team: "CIREBON CITY FC", played: 12, wins: 3, draws: 5, losses: 4, goalsFor: 22, goalsAgainst: 31, points: 14 },
  { pos: 14, team: "PADANG CITY FC", played: 12, wins: 2, draws: 8, losses: 2, goalsFor: 20, goalsAgainst: 25, points: 14 },
  { pos: 15, team: "JAYAPURA CITY FC", played: 12, wins: 2, draws: 6, losses: 4, goalsFor: 19, goalsAgainst: 33, points: 12 },
  { pos: 16, team: "LAMPUNG CITY FC", played: 12, wins: 2, draws: 4, losses: 6, goalsFor: 18, goalsAgainst: 35, points: 10 },
  { pos: 17, team: "TANGERANG CITY FC", played: 12, wins: 2, draws: 3, losses: 7, goalsFor: 17, goalsAgainst: 38, points: 9 },
  { pos: 18, team: "MANADO CITY FC", played: 12, wins: 1, draws: 3, losses: 8, goalsFor: 15, goalsAgainst: 41, points: 6 },
  { pos: 19, team: "BALIKPAPAN CITY FC", played: 12, wins: 1, draws: 2, losses: 9, goalsFor: 14, goalsAgainst: 44, points: 5 },
  { pos: 20, team: "DEPOK CITY FC", played: 12, wins: 0, draws: 3, losses: 9, goalsFor: 12, goalsAgainst: 47, points: 3 },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-wrapper">
        {/* Header */}
        <div className="leaderboard-header-section">
          <h1 className="leaderboard-title">
            LEADERBOARD
          </h1>
          
        </div>

        {/* Leaderboard Table */}
        <div className="leaderboard-table-container">
          {/* Desktop Table */}
          <div className="desktop-table">
            <table className="leaderboard-table">
              <thead>
                <tr className="table-header">
                  <th className="header-cell pos-header">POS</th>
                  <th className="header-cell team-header">TEAM</th>
                  <th className="header-cell stat-header">P</th>
                  <th className="header-cell stat-header">W</th>
                  <th className="header-cell stat-header">D</th>
                  <th className="header-cell stat-header">L</th>
                  <th className="header-cell stat-header">GF</th>
                  <th className="header-cell stat-header">GA</th>
                  <th className="header-cell pts-header">PTS</th>
                </tr>
              </thead>
              <tbody>
                {mockTeams.map((team, index) => (
                  <tr
                    key={team.pos}
                    className={`table-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}
                  >
                    <td className="table-cell pos-cell">
                      <span className={`position-number ${team.pos <= 3 ? 'top-position' : ''}`}>
                        {team.pos}
                      </span>
                    </td>
                    <td className="table-cell team-cell">
                      <span className="team-name">
                        {team.team}
                      </span>
                    </td>
                    <td className="table-cell stat-cell">{team.played}</td>
                    <td className="table-cell stat-cell wins-cell">{team.wins}</td>
                    <td className="table-cell stat-cell draws-cell">{team.draws}</td>
                    <td className="table-cell stat-cell losses-cell">{team.losses}</td>
                    <td className="table-cell stat-cell">{team.goalsFor}</td>
                    <td className="table-cell stat-cell">{team.goalsAgainst}</td>
                    <td className="table-cell pts-cell">
                      <span className="points-number">
                        {team.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="mobile-cards">
            {mockTeams.map((team, index) => (
              <div
                key={team.pos}
                className={`mobile-card ${index % 2 === 0 ? 'card-even' : 'card-odd'}`}
              >
                <div className="card-header">
                  <div className="card-team-info">
                    <span className={`card-position ${team.pos <= 3 ? 'top-position' : ''}`}>
                      #{team.pos}
                    </span>
                    <span className="card-team-name">
                      {team.team}
                    </span>
                  </div>
                  <span className="card-points">
                    {team.points} PTS
                  </span>
                </div>
                
                <div className="card-stats">
                  <div className="stat-group">
                    <div className="stat-label">P</div>
                    <div className="stat-value">{team.played}</div>
                  </div>
                  <div className="stat-group">
                    <div className="stat-label">W/D/L</div>
                    <div className="stat-value wdl-value">
                      <span className="wins-text">{team.wins}</span>/
                      <span className="draws-text">{team.draws}</span>/
                      <span className="losses-text">{team.losses}</span>
                    </div>
                  </div>
                  <div className="stat-group">
                    <div className="stat-label">GF</div>
                    <div className="stat-value">{team.goalsFor}</div>
                  </div>
                  <div className="stat-group">
                    <div className="stat-label">GA</div>
                    <div className="stat-value">{team.goalsAgainst}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Leaderboard;
import Sidebar from "../components/Sidebar";
import LeaderboardList from "../components/LeaderboardList";

import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard() {
  return (
    <main className="main">
      <Sidebar />
      <div className={styles.leaderboardContainer}>
        <h1>Leaderboard</h1>

        <LeaderboardList />
      </div>
    </main>
  )
}
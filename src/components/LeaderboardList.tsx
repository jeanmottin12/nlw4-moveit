import { Profile } from './Profile';

import styles from '../styles/components/LeaderboardList.module.css';

export default function LeaderboardList() {
  return (
    <div className={styles.leaderboardList}>
      <header>
        <span>Posição</span>
        <span>Usuário</span>
        <span>Desafios</span>
        <span>Experiência</span>
      </header>

      <div className={styles.leaderboardListItem}>
        <div>
          <span>1</span>
        </div>

        <div>
          <Profile />
        </div>

        <div>
          <span><i>127</i> completatos</span>
        </div>

        <div>
          <span><i>154000</i> xp</span>
        </div>
      </div>

      <div className={styles.leaderboardListItem}>
        <div>
          <span>1</span>
        </div>

        <div>
          <Profile />
        </div>

        <div>
          <span><i>127</i> completatos</span>
        </div>

        <div>
          <span><i>154000</i> xp</span>
        </div>
      </div>
    </div>
  )
}
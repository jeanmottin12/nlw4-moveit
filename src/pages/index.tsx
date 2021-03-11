import { useState } from 'react';
import Link from 'next/link';

import styles from '../styles/pages/Welcome.module.css';

export default function Welcome() {
  const [username, setUsername] = useState('');

  return (
    <main className={styles.mainWelcome}>
      <div className={styles.mainContainer}>
        <div>
          <img src="logo-white.svg" alt="Logo"/>
          <h1>Bem-vindo</h1>
          <div>
            <img src="icons/github.svg" alt="Github icon"/>
            <p>Faça login com seu Github para começar</p>
          </div>

          <form>
            <input
              type="text"
              placeholder="Digite seu username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Link href="/dashboard">
              <a>
                <img src="icons/arrow-right.svg" alt="Arrow right"/>
              </a>
            </Link>
          </form>
        </div>
      </div>
    </main>
  )
}
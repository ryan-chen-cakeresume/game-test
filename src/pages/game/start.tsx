import { useRouter } from 'next/router';
import { useState } from 'react';

function Start() {
  const router = useRouter();

  const [gameId, setGameId] = useState('');

  return (
    <div>
      <div>
        Game ID:
        <input
          type="text"
          value={gameId}
          onChange={({ target }) => setGameId(target.value)}
        />
      </div>
      <div>
        <button
          disabled={!gameId}
          onClick={() => router.push(`/game/${gameId}/1`)}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Start;

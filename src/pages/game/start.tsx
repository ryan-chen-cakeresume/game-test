import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Start() {
  const router = useRouter();

  const [userId, setUserId] = useState('');
  const [journeyId, setJourneyId] = useState('');

  return (
    <>
      <Head>
        <title>Start Game</title>
      </Head>
      <div>
        <div>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={({ target }) => setUserId(target.value)}
          />
        </div>
        <div>
          Journey ID:
          <input
            type="text"
            value={journeyId}
            onChange={({ target }) => setJourneyId(target.value)}
          />
        </div>
        <div>
          <button
            disabled={!userId || !journeyId}
            onClick={() =>
              router.push(
                `/game/question/1?userId=${userId}&journeyId=${journeyId}`
              )
            }
          >
            Start Game
          </button>
        </div>
      </div>
    </>
  );
}

export default Start;

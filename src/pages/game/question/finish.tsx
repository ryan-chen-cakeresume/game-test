import Head from 'next/head';
import { useRouter } from 'next/router';

function Finish() {
  const router = useRouter();
  const { gameId } = router.query;

  return (
    <>
      <Head>
        <title>Finish</title>
      </Head>
      <div>
        <h1>Finish</h1>
        <p>Game ID: {gameId}</p>
      </div>
    </>
  );
}

export default Finish;

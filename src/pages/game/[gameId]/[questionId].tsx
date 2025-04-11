import Head from 'next/head';
import { useRouter } from 'next/router';

const totalQuestions = 5;

function Question() {
  const router = useRouter();
  const { gameId, questionId } = router.query;
  const parsedQuestionId = parseInt(questionId as string);

  const handlePrevQuestion = () => {
    const prevQuestionId = parsedQuestionId - 1;
    router.push(`/game/${gameId}/${prevQuestionId}`);
  };

  const handleNextQuestion = () => {
    const nextQuestionId = parsedQuestionId + 1;
    router.push(`/game/${gameId}/${nextQuestionId}`);
  };

  const handleFinish = () => {
    router.push(`/game/${gameId}/finish`);
  };

  return (
    <>
      <Head>
        <title>Question {questionId}</title>
      </Head>
      <div>
        <ul>
          <li>Game ID: {gameId}</li>
          <li>Question ID: {questionId}</li>
        </ul>
        <div>
          <button
            disabled={parsedQuestionId === 1}
            onClick={handlePrevQuestion}
          >
            Prev Question
          </button>
          <button
            disabled={parsedQuestionId === totalQuestions}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
          <button onClick={handleFinish}>Finish</button>
        </div>
      </div>
    </>
  );
}

export default Question;

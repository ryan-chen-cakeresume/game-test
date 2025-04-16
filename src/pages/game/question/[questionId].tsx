import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { trackEvent } from '@/utils/tracking';

const totalQuestions = 5;

function Question() {
  const router = useRouter();
  const { userId, journeyId, questionId } = router.query;

  const parsedQuestionId = parseInt(questionId as string);

  const handlePrevQuestion = () => {
    if (parsedQuestionId === 1) {
      return;
    }

    const prevQuestionId = parsedQuestionId - 1;
    router.push(
      `/game/question/${prevQuestionId}?userId=${userId}&journeyId=${journeyId}`
    );
  };

  const handleNextQuestion = () => {
    if (parsedQuestionId === totalQuestions) {
      return;
    }

    const nextQuestionId = parsedQuestionId + 1;
    router.push(
      `/game/question/${nextQuestionId}?userId=${userId}&journeyId=${journeyId}`
    );
  };

  const handleAnswerQuestion = () => {
    trackEvent('x_answer', {
      userId: userId,
      journeyId: journeyId,
      questionId: questionId
    });

    handleNextQuestion();
  };

  useEffect(() => {
    trackEvent('x_view', {
      userId: userId,
      journeyId: journeyId,
      questionId: questionId
    });
  }, [journeyId, questionId, userId]);

  return (
    <>
      <Head>
        <title>
          Question {questionId}/{totalQuestions}
        </title>
      </Head>
      <div>
        <ul>
          <li>User ID: {userId}</li>
          <li>Journey ID: {journeyId}</li>
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
          <button onClick={handleAnswerQuestion}>Answer Question</button>
        </div>
      </div>
    </>
  );
}

export default Question;

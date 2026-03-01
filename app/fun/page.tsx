"use client";
import { questions } from "@/data/data";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { Question } from "@/component/Question";
import Controls from "@/component/Controls";

export default function Home() {
  const [revealAns, setRevealAns] = useState(false);
  const [revealQuestion, setRevealQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const router = useRouter();

  function handleRevealQuestion() {
    setRevealQuestion(true);
  }

  function handleRevealAnswer() {
    if (revealQuestion) {
      setRevealAns(true);
    }
  }

  function handleNext() {
    setRevealAns(false);
    setRevealQuestion(false);
    setCurrentQuestionIndex((prev) => {
      return Math.min(questions.length - 1, prev + 1);
    });
    if (currentQuestionIndex === questions.length - 1) {
      router.push("/end");
    }
  }

  function handlePrevious() {
    setRevealAns(false);
    setRevealQuestion(false);
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  }

  return (
    <>
      <Question
        question={questions[currentQuestionIndex]}
        revealAns={revealAns}
        revealQuestion={revealQuestion}
      />
      <Controls
        handlePrevious={handlePrevious}
        handleRevealQuestion={handleRevealQuestion}
        handleRevealAnswer={handleRevealAnswer}
        handleNext={handleNext}
      />
    </>
  );
}

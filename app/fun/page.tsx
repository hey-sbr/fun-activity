"use client";
import { useMemo } from "react";
import Button from "@/component/Button";
import { useState } from "react";
import { gibrish } from "@/app/util";
import { useRouter } from "next/navigation";

const questions = [
  "Turn off your mic",
  "Appreciate my hard work",
  "Approve my leave request",
  "Fix the production bug",
  "Reduce my workload",
  "Merge my pull request",
  "Server is down again",
  "No pain, No gain",
  "This is not working",
  "Increase My Package",
];

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
        index={currentQuestionIndex + 1}
      />
      <Controls
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleRevealQuestion={handleRevealQuestion}
        revealQuestion={revealQuestion}
        handleRevealAnswer={handleRevealAnswer}
        revealAns={revealAns}
      />
    </>
  );
}

type QuestionProps = {
  question: string;
  revealAns?: boolean;
  revealQuestion?: boolean;
  index: number;
};

function Question({
  question,
  revealAns,
  revealQuestion,
  index,
}: QuestionProps) {
  const gibberishText = useMemo(() => {
    return gibrish(question);
  }, [question]);

  return (
    <div className=" relative w-full text-center">
      <span className="absolute top-1 left-1 font-bold text-xl">Q{index}</span>
      <h1 className="mt-20 text-5xl font-bold my-5 uppercase">{`${revealQuestion ? gibberishText : "Click 'Reveal Question' to reveal"}`}</h1>
      <h1 className="text-5xl font-bold text-green-600 uppercase">{`${revealAns ? question : ""}`}</h1>
    </div>
  );
}

type ControlsProps = {
  handlePrevious: () => void;
  handleRevealQuestion: () => void;
  handleRevealAnswer: () => void;
  handleNext: () => void;
  revealQuestion: boolean;
  revealAns: boolean;
};

function Controls({
  handlePrevious,
  handleRevealQuestion,
  handleRevealAnswer,
  handleNext,
  revealQuestion,
  revealAns,
}: ControlsProps) {
  return (
    <div className="flex w-full justify-end gap-x-10   ">
      <Button label="Previous" onClick={handlePrevious} />
      <Button
        label="Reveal Question"
        onClick={handleRevealQuestion}
        disabled={revealQuestion}
      />
      <Button
        label="Reveal Answer"
        onClick={handleRevealAnswer}
        disabled={revealAns}
      />
      <Button label="Next" onClick={handleNext} />
    </div>
  );
}

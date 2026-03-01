import { gibrish } from "@/app/util";
import { QuestionType } from "@/data/data";

type QuestionProps = {
  question: QuestionType;
  revealAns?: boolean;
  revealQuestion?: boolean;
};

export function Question({ question, revealAns, revealQuestion }: QuestionProps) {
  return (
    <>
      {/* Question for you:  */}

      <h1 className="text-3xl font-bold w-full">
        For: <span className="text-black">{question.Person}</span>
        </h1>

      {/* Question */}
      <h1 className="text-5xl font-bold">{`${revealQuestion ? gibrish(question.Answer) : "Click 'Reveal Question' to reveal"}`}</h1>

      {/* Answer */}
      <h1 className="text-5xl font-bold text-green-600">{`${revealAns ? question.Answer : ""}`}</h1>
    </>
  );
}
import Button from "./Button";

type ControlsProps = {  handlePrevious: () => void;
  handleRevealQuestion: () => void;
  handleRevealAnswer: () => void;
  handleNext: () => void;
};

export default function Controls({ handlePrevious, handleRevealQuestion, handleRevealAnswer, handleNext }: ControlsProps) {
  return (
    // Controls
    <div className="flex w-full justify-end gap-x-10   ">
      <Button label="Previous" onClick={handlePrevious} />
      <Button label="Reveal Question" onClick={handleRevealQuestion} />
      <Button label="Reveal Answer" onClick={handleRevealAnswer} />
      <Button label="Next" onClick={handleNext} />
    </div>
  );
}
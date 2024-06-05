"use client";
import { Step, type StepItem, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function StepperScrollTracking({ title }: { title: string }) {
  const [steps, setSteps] = useState([
    { label: "Step 1", description: "Step 1 Description" },
  ] satisfies StepItem[]);

  const addSteps = () => {
    setSteps((prevSteps) => [
      ...prevSteps,
      {
        label: "Step " + (prevSteps.length + 1),
        description: "Step " + (prevSteps.length + 1) + " Description",
      },
    ]);
  };

  const handleDescriptionChange = (index: number, event: any) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, i) =>
        i === index ? { ...step, description: event.target.value } : step
      )
    );
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper
        orientation="vertical"
        initialStep={0}
        steps={steps}
        scrollTracking
      >
        {steps.map((stepProps, index) => {
          return (
            <Step key={stepProps.label} {...stepProps}>
              <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
                <Textarea
                  className="w-full h-full"
                  placeholder={stepProps.description}
                  value={steps[index].description}
                  onChange={(e) => handleDescriptionChange(index, e)}
                />
              </div>
              <StepButtons />
            </Step>
          );
        })}
        <Button size="sm" onClick={addSteps}>
          Add
        </Button>
        <FinalStep />
      </Stepper>
    </div>
  );
}

const StepButtons = () => {
  const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } =
    useStepper();
  return (
    <div className="w-full flex gap-2 mb-4">
      <Button
        disabled={isDisabledStep}
        onClick={prevStep}
        size="sm"
        variant="secondary"
      >
        Prev
      </Button>
      <Button size="sm" onClick={nextStep}>
        {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
      </Button>
    </div>
  );
};

const FinalStep = () => {
  const { hasCompletedAllSteps, resetSteps } = useStepper();

  if (!hasCompletedAllSteps) {
    return null;
  }

  return (
    <>
      <div className="h-40 flex items-center justify-center border bg-secondary text-primary rounded-md">
        <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
      </div>
      <div className="w-full flex justify-end gap-2">
        <Button size="sm" onClick={resetSteps}>
          Reset
        </Button>
      </div>
    </>
  );
};

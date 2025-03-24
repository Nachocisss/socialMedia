import React from "react";
import { Step, StepsContainer } from "./Steps.styled";

interface StepsProps {
  stepsNumber: number;
  currentStep: number;
}

export const Steps = ({ stepsNumber, currentStep }: StepsProps) => {
  return (
    <StepsContainer>
      {Array.from({ length: stepsNumber }, (_, index) => (
        <Step key={index} isActive={index === currentStep} />
      ))}
    </StepsContainer>
  );
};

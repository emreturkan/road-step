"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useStepper } from "./use-stepper";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StepLabelProps {
  isCurrentStep?: boolean;
  opacity: number;
  label?: string | React.ReactNode;
  description?: string | null;
}

const labelVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const descriptionVariants = cva("", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const StepLabel = ({
  isCurrentStep,
  opacity,
  label,
  description,
}: StepLabelProps) => {
  const { variant, styles, size, orientation } = useStepper();
  const shouldRender = !!label || !!description;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState<any>(label);
  const handleClick = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    setIsEditing(false);
  };

  return shouldRender ? (
    <div
      aria-current={isCurrentStep ? "step" : undefined}
      className={cn(
        "stepper__step-label-container",
        "flex-col flex",
        variant !== "line" ? "ms-2" : orientation === "horizontal" && "my-2",
        variant === "circle-alt" && "text-center",
        variant === "circle-alt" && orientation === "horizontal" && "ms-0",
        variant === "circle-alt" && orientation === "vertical" && "text-start",
        styles?.["step-label-container"]
      )}
      style={{
        opacity,
      }}
    >
      {!!label && (
        <span
          className={cn(
            "stepper__step-label",
            labelVariants({ size }),
            styles?.["step-label"]
          )}
        >
          <div className="">
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <Button onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <div
                className="text-gray-800 dark:text-gray-200 text-lg font-medium cursor-pointer"
                onClick={handleClick}
              >
                {text}
              </div>
            )}
          </div>
        </span>
      )}
      {!!description && (
        <span
          className={cn(
            "stepper__step-description",
            "text-muted-foreground",
            descriptionVariants({ size }),
            styles?.["step-description"]
          )}
        >
          {description}
        </span>
      )}
    </div>
  ) : null;
};

export { StepLabel };

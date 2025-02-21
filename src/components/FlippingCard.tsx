import { FC, HTMLProps, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "../lib/utils.ts";
import LampImage from "../assets/images/floorLamp.png";

interface FlippingCardProps extends HTMLProps<HTMLDivElement> {
  width?: number;
  height?: number;
  frontSide?: ReactNode;
  backSide?: ReactNode;
  direction?: "LR" | "RL";
}

export const FlippingCard: FC<FlippingCardProps> = ({
  width = 300,
  height = 200,
  frontSide,
  backSide,
  direction = "RL",
  ...rest
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getRotation = () => {
    if (direction === "LR") {
      return { rotateY: isFlipped ? 180 : 0 };
    } else if (direction === "RL") {
      return { rotateY: isFlipped ? -180 : 0 };
    }
  };

  return (
    <div
      {...rest}
      style={{ width: width, height: height }}
      className={cn(`perspective`, rest.className)}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={getRotation()}
        transition={{ duration: 0.6 }}
        onClick={handleFlip}
      >
        {/* FRONTED */}
        <motion.div
          className="absolute w-full h-full rounded-lg"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {!frontSide && (
            <img src={LampImage} alt={"image"} width={width} height={height} />
          )}
          {frontSide && frontSide}
        </motion.div>

        {/* BACKEND */}
        <motion.div
          className={`absolute w-full h-${height} rounded-lg`}
          style={{
            height: height,
            backfaceVisibility: "hidden",
            rotateY: direction === "LR" ? 180 : -180,
          }}
        >
          {!backSide && (
            <Card
              className={`h-[${height}px] w-[${width}px]`}
              style={{ height: height }}
            >
              <CardHeader>
                <CardTitle>Лампочка</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Крутая лампочка</p>
              </CardContent>
            </Card>
          )}
          {backSide && backSide}
        </motion.div>
      </motion.div>
    </div>
  );
};

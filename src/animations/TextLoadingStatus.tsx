import { FC, HTMLProps, useEffect, useState } from "react";
import { TextLoop } from "../components/ui/text-loop.tsx";
import { TextShimmerWave } from "../components/ui/text-shimmer-wave.tsx";
import { cn } from "../lib/utils.ts";

interface LoadingStatusProps extends HTMLProps<HTMLParagraphElement> {
  textColor?: string;
  gradientColor?: string;
  className?: string;
  loopDuration?: number;
  textAnimationDuration?: number;
  textAnimationRepeat?: number;
  texts?: string[];
  spread?: number;
  interval?: number;
  transitionDuration?: number;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right";
  lineHeight?: string;
  letterSpacing?: string;
  containerClassName?: string;
}

export const TextLoadingStatus: FC<LoadingStatusProps> = ({
  textColor = "#00ffff",
  gradientColor = "#f1f1f1",
  loopDuration = 2,
  textAnimationRepeat = 0,
  texts = [
    "Сканируем ваш профиль",
    "Проверяем ваши настройки",
    "Смотрим прогноз погоды",
    "Ищем лучший вариант решения",
  ],
  textAnimationDuration = 1,
  spread = 2,
  interval = loopDuration,
  transitionDuration = 0.2,
  containerClassName = "",
  ...rest
}) => {
  const [initialTexts, setInitialTexts] = useState<string[]>(["", ...texts]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      setInitialTexts(texts);
    }
  }, [isFirstRender, texts]);

  return (
    <div className={containerClassName}>
      <TextLoop
        interval={interval}
        transition={{ duration: transitionDuration }}
      >
        {initialTexts.map((text, index) => {
          const isFirstElement = index === 0 && isFirstRender;
          const duration = isFirstElement ? 0 : textAnimationDuration;
          const repeat = isFirstElement ? 0 : textAnimationRepeat;

          return (
            <TextShimmerWave
              // @ts-expect-error
              repeat={repeat}
              duration={duration}
              spread={spread}
              {...rest}
              className={cn(
                `[--base-color:${textColor}] [--base-gradient-color:${gradientColor}]`,
                rest.className,
              )}
              key={text + index}
            >
              {text}
            </TextShimmerWave>
          );
        })}
      </TextLoop>
    </div>
  );
};

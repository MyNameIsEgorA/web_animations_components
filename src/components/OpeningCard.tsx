import React, { FC } from "react";
import {
  MorphingDialog,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "./ui/morphing-dialog.tsx";

interface OpeningCardStyles {
  cardStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

interface OpeningCardProps extends OpeningCardStyles {
  image: string;
  title: string;
  smallDescription: string;
  fullDescription: string;
}

export const OpeningCard: FC<OpeningCardProps> = ({
  image,
  fullDescription,
  smallDescription,
  title,
  cardStyle,
  imageStyle,
  titleStyle,
  subtitleStyle,
  descriptionStyle,
  contentStyle,
  containerStyle,
}) => {
  return (
    <MorphingDialog
      transition={{
        type: "tween",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{ borderRadius: 12, ...cardStyle }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={image}
          alt={fullDescription}
          className="h-48 w-full object-cover"
          style={imageStyle}
        />
        <div style={{ padding: "9px 6px" }}>
          <MorphingDialogTitle
            className="text-zinc-950 dark:text-zinc-50"
            style={titleStyle}
          >
            {title}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle
            className="text-zinc-700 dark:text-zinc-400"
            style={subtitleStyle}
          >
            {smallDescription}
          </MorphingDialogSubtitle>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer style={containerStyle}>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
            ...contentStyle,
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <MorphingDialogImage
            src={image}
            alt={fullDescription}
            className="h-full w-full"
            style={imageStyle}
          />
          <div style={{ padding: "24px" }}>
            <MorphingDialogTitle
              className="text-2xl text-zinc-950 dark:text-zinc-50"
              style={titleStyle}
            >
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle
              style={{ marginTop: 6, ...subtitleStyle }}
              className="text-zinc-700 dark:text-zinc-400 mt-5"
            >
              {smallDescription}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
              {...descriptionStyle}
            >
              <p
                style={{ marginTop: 20 }}
                className="text-zinc-500 dark:text-zinc-500"
              >
                {fullDescription}
              </p>
            </MorphingDialogDescription>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

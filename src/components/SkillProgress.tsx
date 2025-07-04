import { ReactNode } from "react";
import styled from "styled-components";
import { Theme } from "stylesAndThemes/Theme";

type SkillProgressProps = {
  percent: number;
  children: ReactNode;
};

export const SkillProgress = (props: SkillProgressProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (props.percent / 100) * circumference;
  return (
    <SkillProgressContainer>
      <svg width={radius * 2.2} height={radius * 2.2}>
        <circle
          r={radius}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke={`${Theme.colors.bgPrimary}`}
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="translate(5,5)"
        />
      </svg>
      {props.children}
    </SkillProgressContainer>
  );
};

const SkillProgressContainer = styled.div`
  display: flex;
  position: relative;
  width: 110px;
  height: 110px;
  svg {
    position: absolute;
    z-index: 1;
  }
`;

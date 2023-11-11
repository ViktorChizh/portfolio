import React, { ReactNode } from 'react';
import styled from 'styled-components';


type SkillCirclePropsType = {
  percent: number
  children: ReactNode
}

export const SkillCircle = (props: SkillCirclePropsType) => {
  const radius = 50; // Радиус окружности
  const circumference = 2 * Math.PI * radius; // Длина окружности
  const strokeDashoffset = circumference - ((props.percent / 100) * circumference); // Смещение пунктирной линии, чтобы отрисовать заданный процент

  return (
    <ProgressContainer>
      <svg width={ radius * 2.2 } height={ radius * 2.2 } >
        <circle
          r={ radius }
          cx={ radius }
          cy={ radius }
          fill="transparent"
          stroke="#2fff00"
          strokeWidth="5"
          strokeDasharray={ circumference }
          strokeDashoffset={ strokeDashoffset }
          transform='translate(5,5)'

        />
      </svg>
        {props.children}
    </ProgressContainer>
  )
}

const ProgressContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 110px;
  height: 110px;
  svg {
    position: absolute;
    z-index: 1;
  }
`

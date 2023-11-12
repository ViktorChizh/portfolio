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
          stroke="#42e863f5"
          strokeWidth="5"
          strokeDasharray={ circumference }
          strokeDashoffset={ strokeDashoffset }
          transform='translate(5,5)'

        />
      </svg>
      <span>{props.percent}%</span>
        {props.children}
    </ProgressContainer>
  )
}

const ProgressContainer = styled.div`
  display: flex;
  position: relative;
  width: 110px;
  height: 110px;
  svg {
    position: absolute;
    z-index: 1;
  }
  span{
    position: absolute;
    color: #7572D5;
    z-index: 2;
    font-size: 10px;
    font-weight: bold;
    top: 40px;
    right: 0;
  }
`

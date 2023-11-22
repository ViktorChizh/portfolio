import React, { ReactNode } from 'react';
import styled from 'styled-components';


type SkillCirclePropsType = {
  percent: number
  children: ReactNode
}

export const SkillCircle = (props: SkillCirclePropsType) => {
  const radius = 30; // Радиус окружности
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
          transform='translate(3,3)'

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
  width: 66px;
  height: 66px;
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
    top: 20px;
    right: -10px;
  }
`

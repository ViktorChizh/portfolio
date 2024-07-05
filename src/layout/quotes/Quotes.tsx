import {Container} from 'components/Container';
import {StyledTitle} from 'components/StyledTitle';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'layout/quotes/Slider.css'
import styled from 'styled-components';
import {Theme} from 'stylesAndThemes/Theme';
import quotes from '../../assets/quotes.svg'

export const Quotes = () => {
  return (
    <StyledQuotes id={'Quotes'}>
      <Container>
        <StyledTitle>My Life Principles In Quotes</StyledTitle>
        <AliceCarousel mouseTracking items={items} controlsStrategy="alternate"/>
      </Container>
    </StyledQuotes>
  )
}

const StyledQuotes = styled.section`
    background-color: ${Theme.colors.bgPrimary};
`
const Slider = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;

    cite {
        text-align: center;
        color: ${Theme.colors.textTitle};
        font-family: 'Comforter Brush', cursive;
        font-size: 28px;
        letter-spacing: 0.25em;
        font-weight: 700;
        width: 100%;
        position: relative;

        ::after {
            content: url(${quotes});
            transform: rotate(180deg);
            position: absolute;
            right: -2%;
            bottom: 1.5rem;
        }

        ::before {
            content: url(${quotes});
            position: absolute;
            left: -2%;
            top: 0;
        }
    }

    strong {
        margin-top: 10px;
        align-self: flex-end;
        color: ${Theme.colors.iconPrimary};
    }

    :hover {
        cursor: grab;
    }

    :active {
        cursor: grabbing;
    }
`

const items = [
  <Slider><cite>Делай все, что можешь, там, где ты находишься, используя все, что имеешь.</cite><strong>Теодор Рузвельт</strong></Slider>,
  <Slider><cite>Единственный способ сделать что-то очень хорошо – любить то, что ты делаешь.</cite><strong>Стив Джобс</strong></Slider>,
  <Slider><cite>Я не провалил тест. Я просто нашел сто способов написать его неправильно.</cite><strong>Бенджамин Франклин</strong></Slider>,
  <Slider><cite>Выживает не самый сильный, а самый восприимчивый к переменам.</cite><strong>Чарльз Дарвин</strong></Slider>,
  <Slider><cite>Вопрос не в том, кто мне разрешит, а в том, кто сможет мне запретить.</cite><strong>Айн Рэнд</strong></Slider>,
  <Slider><cite>Неудача – это просто возможность начать снова, но уже более мудро.</cite><strong>Генри Форд</strong></Slider>,
  <Slider><cite>Всегда выбирайте самый трудный путь - на нем вы не встретите конкурентов.</cite><strong>Шарль де Голль</strong></Slider>
]
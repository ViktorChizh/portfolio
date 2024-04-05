import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from 'components/StyledTitle';
import { FlexWrapper } from 'components/FlexWrapper';
import { Icon } from 'components/icon/Icon';
import { Theme } from 'stylesAndThemes/Theme';
import { Container } from 'components/Container';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Slider.css'

export const Quotes = () => {
    return (
        <StyledQuotes id={'Quotes'}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <StyledTitle>My Life Principles In Quotes</StyledTitle>
                    <Icon iconId='quotes' />
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        controlsStrategy="alternate"
                    />
                </FlexWrapper>
            </Container>
        </StyledQuotes>
    )
}

const StyledQuotes = styled.section`
    background-color: ${Theme.colors.bgPrimary};
    ${Container} {
    svg {
        margin-left: 50px;
        margin-bottom: -70px;
    }
}
`
const Slider = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    cite {
        text-align: center;
        color: ${Theme.colors.textTitle};
        font-family: 'Comforter Brush', cursive;
        font-size: 30px;
        letter-spacing: 0.25em;
        font-weight: 700;
        width: 90%;
    }
    strong {
        margin-top: 10px;
        color: ${Theme.colors.iconPrimary};
    }
    :hover {
        cursor: grab;
    }
    :active{
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
import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Theme } from '../../../stylesAndThemes/Theme';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';

const cites = [
    [
        'Генри Форд', 'Неудача – это просто возможность начать снова, но уже более мудро.'
    ],
    [
        'Бенджамин Франклин', 'Я не провалил тест. Я просто нашел сто способов написать его неправильно.'
    ],
    [
        'Ричард Брэнсон', 'Я уверен: нельзя позволять, чтобы тебя остановило убогое словцо «нельзя».'
    ],
    [
        'Генри Форд', 'Неудача – это просто возможность начать снова, но уже более мудро.'
    ],
    [
        'Стивен Кови', 'Быстрее всего учишься в трех случаях — до 7 лет, на тренингах, и когда жизнь загнала тебя в угол.'
    ],
    [
        'Шарль де Голль', 'Всегда выбирайте самый трудный путь - на нем вы не встретите конкурентов.'
    ],
    [
        'Теодор Рузвельт', 'Делай все, что можешь, там, где ты находишься, используя все, что имеешь.'
    ],
    [
        'Чарльз Дарвин', 'Выживает не самый сильный, а самый восприимчивый к переменам.'
    ],
    [
        'Айн Рэнд', 'Вопрос не в том, кто мне разрешит, а в том, кто сможет мне запретить.'
    ],
    [
        'Стив Джобс', 'Единственный способ сделать что-то очень хорошо – любить то, что ты делаешь.'
    ]
]

let i = Math.floor(10*Math.random())
export const Quotes = () => {
    return (
        <div id='Quotes'>
            <StyledQuotes>
                <Container>
                    <FlexWrapper direction={'column'} align={'center'}>
                        <StyledTitle>My Life Principles In Quotes</StyledTitle>
                        <Icon iconId='quotes' />
                        <Slider>
                            <cite>
                                {cites[i][1]}
                            </cite>
                            <strong>{cites[i][0]}</strong>
                        </Slider>
                        <Paginator>
                        <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"0 10px"} borderRadius={'10px'} fontSize='25px'>&#8678;</Button>
                            <p>PAGINATOR</p>
                        <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"0 10px"} borderRadius={'10px'} fontSize='25px'>
                        &#8680;
                        </Button>
                        </Paginator>
                    </FlexWrapper>
                </Container>
            </StyledQuotes>
        </div>
    )
}

const StyledQuotes = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 50px 0 1%;
    box-sizing: border-box;
    background-color: ${Theme.colors.bgPrimary};
    svg {
        margin-left: 50px;
        margin-bottom: -70px;
    }
`

const Slider = styled.div`
    display: flex;
    width: 98%;
    flex-direction: column;
    align-items: center;
    cite {
        color: ${Theme.colors.textTitle};
        font-family: 'Comforter Brush', cursive;
        font-size: 30px;
        letter-spacing: 0.25em;
        font-weight: 700;
        text-align: center;
        width: 98%;

    }
    strong {
        margin: 10px 0;
        color: ${Theme.colors.iconPrimary};
    }
`

const Paginator = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
        padding: 0 16px;
        color: ${Theme.colors.textTitle};
        font-weight: 900;
    }
`
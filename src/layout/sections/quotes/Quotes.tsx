import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

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
                        {"сюды PAGINATOR туды"}
                    </Paginator>
                </FlexWrapper>
            </StyledQuotes>
        </div>
    )
}

const StyledQuotes = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 2%;
    min-height: 15vh;
    box-sizing: border-box;
    background-color: rgb(200, 225, 250);
    svg {
        margin-left: 50px;
        margin-bottom: -70px;
    }
    @media (width<=430px) {
        >div>p{
            width: calc(100% - 75px);
            margin-left:75px;
        }
    }
`

const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cite {
        text-align: center;
    }
    strong {
        margin: 10px 0;
    }
`

const Paginator = styled.div`
    
`
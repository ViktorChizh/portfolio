import { Container } from "components/Container";
import { StyledTitle } from "components/StyledTitle";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "layout/quotes/Slider.css";
import styled from "styled-components";
import { Theme } from "stylesAndThemes/Theme";
import quotes from "../../assets/quotes.svg";

export const Quotes = () => {
  return (
    <StyledQuotes id={"Quotes"}>
      <Container>
        <StyledTitle>Мои принципы в цитатах </StyledTitle>
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
        />
      </Container>
    </StyledQuotes>
  );
};

const StyledQuotes = styled.section`
  background-color: ${Theme.colors.bgPrimary};
`;
const Slider = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  cite {
    text-align: center;
    color: ${Theme.colors.textTitle};
    font-family: "Comforter Brush", cursive;
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
`;

const items = [
  <Slider>
    <cite>
      Делай все, что можешь, там, где ты находишься, используя все, что имеешь.
    </cite>
    <strong>Теодор Рузвельт</strong>
  </Slider>,
  <Slider>
    <cite>Дисциплина — мост между целями и достижениями.</cite>
    <strong>Джим Рон</strong>
  </Slider>,
  <Slider>
    <cite>
      Оптимист видит возможность в каждой трудности, пессимист — трудность в
      каждой возможности.
    </cite>
    <strong>Уинстон Черчилль</strong>
  </Slider>,
  <Slider>
    <cite>Выживает не самый сильный, а самый восприимчивый к переменам.</cite>
    <strong>Чарльз Дарвин</strong>
  </Slider>,
  <Slider>
    <cite>Креативность — это интеллект, который развлекается.</cite>
    <strong>Альберт Эйнштейн</strong>
  </Slider>,
  <Slider>
    <cite>
      Мы видим вещи не такими, какие они есть, а такими, какие мы есть.
    </cite>
    <strong>Анаис Нин</strong>
  </Slider>,
  <Slider>
    <cite>
      Единственный способ сделать что-то очень хорошо – любить то, что ты
      делаешь.
    </cite>
    <strong>Стив Джобс</strong>
  </Slider>,
  <Slider>
    <cite>
      Если ты хочешь чего-то, чего никогда не имел, тебе придется делать то,
      чего никогда не делал.
    </cite>
    <strong>Томас Джефферсон</strong>
  </Slider>,
  <Slider>
    <cite>Будущее принадлежит тем, кто готов к нему сегодня.</cite>
    <strong>Малкольм Икс</strong>
  </Slider>,
  <Slider>
    <cite>
      Вопрос не в том, кто мне разрешит, а в том, кто сможет мне запретить.
    </cite>
    <strong>Айн Рэнд</strong>
  </Slider>,
];

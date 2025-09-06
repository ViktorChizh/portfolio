import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";
import bigPhoto from "assets/Photo.jpg";
import map from "assets/map-by.png";
import mapBg from "assets/map-by-bg.png";
import { Theme } from "stylesAndThemes/Theme";
import { Container } from "components/Container";
import resumeViktorChizhRu from "assets/resumeViktorChizhRu.pdf";
import { Button } from "components/Button";
import Typewriter from "typewriter-effect";

export const Home = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const downloadHandler = (failLink: string, failName: string) => {
    if (isMobile) {
      window.location.href = failLink;
    } else {
      const link = document.createElement("a");
      link.href = failLink;
      link.setAttribute("download", failName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <StyledMain id="Главная">
      <Container>
        <FlexWrapper
          direction="column"
          justify="space-evenly"
          align="flex-start"
          gap="10px"
          width="max-content"
        >
          <span>Привет</span>
          <h2>Я Виктор Чиж</h2>
          <h1>Front-end разработчик</h1>
          <FlexWrapper width="100%" alignContent="center">
            <Pointer>&#9754;</Pointer>
            <Typewriter
              options={{
                strings: ["Больше обо мне:"],
                autoStart: true,
                loop: true,
              }}
            />
          </FlexWrapper>
          <Button
            padding="3px"
            width="49.5%"
            onClick={() =>
              downloadHandler(
                resumeViktorChizhRu,
                "resume_ViktorChizh_Frontend.pdf"
              )
            }
          >
            {isMobile ? "резюме" : "скачайте резюме"}
          </Button>
        </FlexWrapper>
        <PhotoWrapper>
          <img
            className="photo"
            src={bigPhoto}
            alt="my-photo"
            width={265}
            height={280}
          />
        </PhotoWrapper>
        <img className="map" src={map} alt="" width={290} height={255} />
      </Container>
    </StyledMain>
  );
};
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  @media (width<=992px) {
    margin: 5% 5% 0 15%;
    ::after {
      content: "";
      position: absolute;
      right: -15%;
      bottom: -18%;
      z-index: -1;
      background-image: url(${mapBg});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 375px;
      height: 350px;
    }
  }
`;

const Pointer = styled.p`
  transform: rotate(-90deg);
  font-size: 3rem;
  line-height: 18px;
  font-weight: 900;
`;

const StyledMain = styled.section`
  background-color: ${Theme.colors.bgPrimary};
  h1,
  h2,
  span {
    font-size: 1.25em;
    font-weight: 900;
    letter-spacing: 0.25em;
  }
  ${Button} {
    font-size: 0.85em;
    cursor: pointer;
  }
  ${Container} {
    padding-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    color: ${Theme.colors.textTitle};

    .photo {
      border-radius: 5%;
      filter: grayscale(65%) hue-rotate(200deg) contrast(85%);
    }

    img {
      object-fit: cover;
    }

    span {
      font-size: 1.15em;
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    .Typewriter {
      font-size: 1.25rem;
      font-weight: 900;
    }
  }

  @media (width <= 992px) {
    .map {
      display: none;
    }
  }
`;

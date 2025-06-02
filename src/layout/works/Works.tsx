import Achievements from "assets/Achievements.jpg";
import coding from "assets/Coding.svg";
import rest from "assets/Rest.svg";
import calm from "assets/Calm.svg";
import achievement from "assets/Achievement.svg";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { FlexWrapper } from "components/FlexWrapper";
import { Menu } from "components/Menu";
import { StyledTitle } from "components/StyledTitle";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Theme } from "stylesAndThemes/Theme";

type WorksBase = {
  name: string;
  imgInfo: string;
  imgSrc: string;
  title: string;
  pEng: ReactNode;
  pRus: ReactNode;
  hrefDemo: string;
  onClickDemo: () => void;
  targetDemo: string;
  hrefCode: string;
  onClickCode: () => void;
  targetCode: string;
};

const worksBase: WorksBase[] = [
  {
    name: "Achievements",
    imgInfo: "I`m achieve that",
    imgSrc: achievement,
    title: "My achievements",
    pEng: (
      <p>
        <b>En </b>Front-end Developer with 2+ years of commercial experience in
        building high-load Single Page Applications (SPA),optimizing UI
        performance, and integrating with backend systems. Deep knowledge of
        JavaScript, TypeScript, React, Next.js,Vue.js, Redux Toolkit, Zustand,
        HTML5, and CSS3. Experienced in performance optimization, SEO
        improvement, RESTful APIintegration, CI/CD pipelines, unit testing, and
        cross-functional collaboration. Results-oriented, able to work
        effectively within Agile/Scrum teams. <br />
        During this time, I received certificates from courses taken or received
        on the Internet during self-study, characteristics from completed
        internships on commercial projects, etc.
        <br /> Registered on the{" "}
        <a
          style={{
            color: "#7572D5",
            textDecoration: "underline",
            padding: "0",
          }}
          // href="https://offerheap.com/specialists?tab=common-filters&speciality=FRONTEND" target="_blank"
          href="https://offerheap.com/specialist/1143"
          target="_blank"
          rel="noreferrer"
        >
          Offerheap
        </a>{" "}
        platform with verified skills and work experience.
      </p>
    ),
    pRus: (
      <p>
        <b>Ru </b>Front-end разработчик с более чем 2 годами коммерческого опыта
        в создании высоконагруженных одностраничных приложений (SPA),
        оптимизации интерфейсов и интеграции с backend. Глубокое понимание
        JavaScript, TypeScript, React, Next.js, Vue.js, Redux Toolkit, Zustand,
        HTML5, CSS3. Имею опыт оптимизации производительности, улучшения SEO,
        работы с RESTful API, CI/CD, Unit-тестирования и кросс-функционального
        взаимодействия. Ориентирован на результат, умею работать в
        Agile/Scrum-командах.
        <br /> За это время получил сертификаты с курсов или в интернете при
        самообучении, характеристики с пройденных стажировок на коммерческих
        проектах и прочее. <br />
        Зарегистрирован на платформе{" "}
        <a
          style={{
            color: "#7572D5",
            textDecoration: "underline",
            padding: "0",
          }}
          // href="https://offerheap.com/specialists?tab=common-filters&speciality=FRONTEND" target="_blank"
          href="https://offerheap.com/specialist/1143"
          target="_blank"
          rel="noreferrer"
        >
          Offerheap
        </a>{" "}
        с подтвержденными навыками и рабочим опытом.
      </p>
    ),
    hrefDemo: "https://viktorchizh.github.io/portfolio/",
    onClickDemo: () => {
      window.location.href = Achievements;
    },
    targetDemo: "_blank",
    hrefCode: "https://github.com/ViktorChizh",
    onClickCode: () => {},
    targetCode: "_blank",
  },
  {
    name: "TeamProjects",
    imgInfo: "Project inctagram.",
    imgSrc: coding,
    title: "INCTAGRAM",
    pEng: (
      <p>
        <b>En </b>Traineeship on the inctagram project in a team consisting of:
        <br /> &nbsp;&nbsp;&nbsp;PM + 2 QA + 5 Front-end + 2 back-end. <br />
        The platform being developed in the project allows users to:
        <br /> &nbsp;&nbsp;&nbsp;- post photos in their feed
        <br /> &nbsp;&nbsp;&nbsp;- subscribe to other users' pages
        <br /> &nbsp;&nbsp;&nbsp;- buy a paid account
        <br /> &nbsp;&nbsp;&nbsp;- leave comments
        <br /> &nbsp;&nbsp;&nbsp;- like
        <br /> &nbsp;&nbsp;&nbsp;- exchange personal messages
        <br /> Technologies: NextJS и RTK query, Storybook, Radix UI, OAuth2,
        SSR, SSG, Stripe, Apollo GraphQL, Socket.IO, IndexedDB, GitHub, Vercel и
        GitHub Actions, Docker, Kubernetes, Jenkins ...
      </p>
    ),
    pRus: (
      <p>
        <b>Ru </b>Стажировка на проекте inctagram в команде в составе:
        <br /> &nbsp;&nbsp;&nbsp;PM + 2 QA + 5 Front-end + 2 back-end.
        <br />
        Разрабатываемая в проекте платформа позволяет пользователям:
        <br /> &nbsp;&nbsp;&nbsp;- размещать фотографии в своей ленте
        <br /> &nbsp;&nbsp;&nbsp;- подписываться на страницы других
        пользователей
        <br /> &nbsp;&nbsp;&nbsp;- покупать платный аккаунт
        <br /> &nbsp;&nbsp;&nbsp;- оставлять комментарии
        <br /> &nbsp;&nbsp;&nbsp;- ставить лайки
        <br /> &nbsp;&nbsp;&nbsp;- обмениваться личными сообщениями
        <br />
        Стек технологий: NextJS и RTK query, Storybook, Radix UI, OAuth2, SSR,
        SSG, Stripe, Apollo GraphQL, Socket.IO, IndexedDB, GitHub, Vercel и
        GitHub Actions, Docker, Kubernetes, Jenkins ...
      </p>
    ),
    hrefDemo: "https://storybook-components-flash-cards.vercel.app",
    targetDemo: "_blank",
    onClickDemo: () => {},
    hrefCode: "https://github.com/somegram-frontend",
    onClickCode: () => {},
    targetCode: "_blank",
  },
  {
    name: "TeamProjects",
    imgInfo: "We are finished this project",
    imgSrc: calm,
    title: "Flash Cards",
    pEng: (
      <p>
        <b>En </b>This is command project on courses in the IT-INCUBATOR, where
        I consolidated my skill in command-work.
        <br /> At this project our team using GitHub and learned new necessary
        knowledge when we solving tasks.
        <br /> The project used RTK-query, which was new to me, which made it
        even more interesting.
      </p>
    ),
    pRus: (
      <p>
        <b>Ru </b>Это командный проект на курсах в ИТ-ИНКУБАТОРЕ, где я закрепил
        свои навыки командной работы. <br /> B этом проекте наша команда
        использовала GitHub и изучала новые знания, необходимые для решения
        задач.
        <br /> На проекте применялся новый для меня RTK-query, что сделало его
        еще более интересным.
      </p>
    ),
    hrefDemo: "https://flash-cards-main.vercel.app/",
    onClickDemo: () => {},
    targetDemo: "_blank",
    hrefCode: "https://github.com/Arenelin/-flash-cards-",
    onClickCode: () => {},
    targetCode: "_blank",
  },
  {
    name: "PersonalProjects",
    imgInfo: "Project complete",
    imgSrc: rest,
    title: "ToDoList",
    pEng: (
      <p>
        <b>En </b>This is the main cross-cutting project in the IT-INCUBATOR
        courses, where I consolidate my knowledge and fill existing gaps in it.
        <br /> During the project, a transition was made from Redux to
        Redux-Toolkit, which helped to better understand both. Also, on a
        separate branch, the project was implemented on Redux-Saga and tests
        were written for it.
      </p>
    ),
    pRus: (
      <p>
        <b>Ru </b>Это основной сквозной проект на курсах в ИТ-ИНКУБАТОРЕ, где я
        закрепляю свои знания и заполняю существующие пробелы в них.
        <br />В ходе проекта был осуществлен переход с Redux на Redux-Toolkit,
        что помогло лучше понять обоих. Так же, на отдельной ветке, была
        осуществлена реализация проекта на Redux-Saga и написание тестов и под
        нее.
      </p>
    ),
    hrefDemo: "https://viktorchizh.github.io/todolist/",
    onClickDemo: () => {},
    targetDemo: "_blank",
    hrefCode: "https://github.com/ViktorChizh/todolist",
    onClickCode: () => {},
    targetCode: "_blank",
  },
  {
    name: "PersonalProjects",
    imgInfo: "Project complete",
    imgSrc: rest,
    title: "Social Network",
    pEng: (
      <p>
        <b>En </b>This is an additional (for independent work on given
        materials) start-to-end project on courses in the IT-INCUBATOR.
        <br /> The project was interesting for me because it was necessary to
        independently overlay TypeScript on top of the legacy-code, which made
        it possible to completely rethink the content of the project.
      </p>
    ),
    pRus: (
      <p>
        <b>Ru </b>Это дополнительный (для самостоятельной работы по выданным
        материалам) сквозной проект на курсах в ИТ-ИНКУБАТОРЕ.
        <br /> Проект для меня был интересен тем, что на legacy-код надо было
        самостоятельно наложить сверху TypeScript, что позволило полностью
        переосмыслить содержание проекта.
      </p>
    ),
    hrefDemo: "https://viktorchizh.github.io/Social-network/",
    onClickDemo: () => {},
    targetDemo: "_blank",
    hrefCode: "https://github.com/ViktorChizh/Social-network",
    onClickCode: () => {},
    targetCode: "_blank",
  },
  {
    name: "TeamProjects",
    imgInfo: "I`m finished traineeship here",
    imgSrc: calm,
    title: "First commercial project, where I`m been",
    pEng: (
      <p>
        <b>En </b>I interned for half a year on a real commercial project
        Relocate (aggregator of statistical data about countries of the world)
        as a FRONT-END developer. In addition to the main functionality, I
        performed the duties of a Project Manager Assistant, where I supervised
        the front-end and back-end.
        <br /> During the internship, I completed assigned tasks, listened to
        mentors, and participated in discussing problems and searching for their
        solutions, communicated with designers and testers.
      </p>
    ),
    pRus: (
      <p>
        <b>Ru </b>Пол года стажировался на реальном коммерческом проекте
        Relocate (агрегатор статистических данных о странах мира) в качестве
        FRONT-END разработчика. Помимо основного функционала, выполнял
        обязанности Project Manager Assistant, где курировал фронт-энд и
        бэк-энд.
        <br /> Во время стажировки выполнял поставленные задачи, слушал
        менторов, участвовал в обсуждениях проблем и поисках их решения,
        коммуницировал с дизайнерами и тестировщиками.
      </p>
    ),
    hrefDemo: "https://www.youtube.com/watch?v=XlGi7xTGJ3I",
    targetDemo: "_blank",
    onClickDemo: () => {},
    hrefCode: "#",
    onClickCode: () =>
      alert(
        "\nIt's owner's intellectual property \n\nЭто интеллектуальная собственность владельца"
      ),
    targetCode: "",
  },
];

const MenuItems = ["All"].concat(
  Array.from(new Set(worksBase.map((w) => w.name)))
);

export const Works = () => {
  const [filterValue, setFilterValue] = useState("All");

  let filteredBase = worksBase;

  for (let i = 1; i <= MenuItems.length; i++) {
    if (filterValue === MenuItems[i])
      filteredBase = worksBase.filter((work) => work.name === MenuItems[i]);
  }

  return (
    <StyledWorks id="Works">
      <Container>
        <StyledTitle>My Works</StyledTitle>
        <Menu
          items={MenuItems}
          changeFilterValue={setFilterValue}
          color={`${Theme.colors.textTitle}`}
          selectedItem={filterValue}
        />
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          gap="1%"
          alignContent="center"
        >
          {filteredBase.map((w) => {
            return (
              <Work key={`${w.name}${w.title}`}>
                <ImgWrapper info={w.imgInfo}>
                  <img src={w.imgSrc} alt="" />
                </ImgWrapper>
                <h2>{w.title}</h2>
                {w.pEng}
                {w.pRus}
                <FlexWrapper justify="space-between" gap="2%">
                  <Button
                    as="a"
                    href={w.hrefDemo}
                    onClick={w.onClickDemo}
                    target={w.targetDemo}
                    rel="noreferrer"
                  >
                    Demo
                  </Button>
                  <Button
                    as="a"
                    href={w.hrefCode}
                    onClick={w.onClickCode}
                    target={w.targetCode}
                    rel="noreferrer"
                  >
                    Code
                  </Button>
                </FlexWrapper>
              </Work>
            );
          })}
        </FlexWrapper>
      </Container>
      <Info>
        <p>
          <b>En </b> I cannot provide the works in LLC "WebDad" and LLC "Rogue
          Arts" due to the signed confidentiality agreement, but they are
          magnificent!
        </p>
        <p>
          <b>Ru </b> Работы в ООО "ВебДэд" и в ООО "Роуг Артс" не могу
          предоставить по причине подписанного соглашения о конфиденциальности,
          но они великолепты!
        </p>
      </Info>
    </StyledWorks>
  );
};

const Info = styled.div`
  padding-bottom: 2%;
  margin: -2% 2% 0;
  color: ${Theme.colors.textSecondary};
  font-size: clamp(
    12px,
    calc((100vw - 430px) / (1200 - 430) * (16 - 12) + 12px),
    16px
  );
  b {
    font-size: 18px;
    font-weight: 700;
  }
`;

const StyledWorks = styled.section`
  color: ${Theme.colors.iconPrimary};
  background-color: ${Theme.colors.bgSecondary};

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 2%;

    nav {
      margin: 0 auto;
      font-weight: bolder;
    }
  }
`;
const Work = styled.div`
  margin: 1% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  max-width: 49%;
  min-width: 320px;
  border: 1px dashed ${Theme.colors.bgPrimary};
  border-radius: 25px;
  padding: 15px;

  img {
    width: 100%;
    background-color: ${Theme.colors.bgPrimary};
    padding-top: 15px;
    border-radius: 25px;
  }

  h2,
  p {
    text-align: justify;
  }

  a {
    width: 100%;
    padding: 7px;
    color: ${Theme.colors.textPrimary};
    text-align: center;
  }

  @media (width <= 678px) {
    max-width: 96%;
    min-width: 340px;
  }
`;
type ImgWrapperProps = {
  info?: string;
};
const ImgWrapper = styled.div<ImgWrapperProps>`
  position: relative;
  z-index: 0;

  &::before {
    content: "${(props) => props.info}";
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: ${Theme.colors.textTitle};
    font-family: "Permanent Marker", cursive;
    font-size: clamp(
      12px,
      calc((100vw - 430px) / (1200 - 430) * (18 - 12) + 12px),
      18px
    );
    width: 100%;
    line-height: 1.2;
    letter-spacing: 0.1em;
    font-weight: 600;
    text-align: center;
  }
`;

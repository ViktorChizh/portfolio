import  React, { ReactNode, useState }  from 'react';
import styled from 'styled-components';
import { StyledTitle } from 'components/StyledTitle';
import { FlexWrapper } from 'components/FlexWrapper';
import work0 from 'assets/Work0.svg'
import work1 from 'assets/Work1.svg'
import work2 from 'assets/Work2.svg'
import watch from 'assets/Achieve.svg'
import { Button } from 'components/Button';
import { Theme } from 'stylesAndThemes/Theme';
import { Container } from 'components/Container';
import { Menu } from 'components/menu/Menu';
import Achievements from 'assets/Achievements.jpg'

type WorksBaseType = {
    name: string
    imgInfo: string
    imgSrc: string
    title: string
    pEng: ReactNode
    pRus: ReactNode
    hrefDemo:string
    onClickDemo: ()=>void
    targetDemo: string
    hrefCode: string
    onClickCode:  ()=>void
    targetCode: string
}

const base: WorksBaseType[] = [
    {
        name: 'StudiesProjects',
        imgInfo: 'In developing',
        imgSrc: work0,
        title: 'Flash Cards',
        pEng: <p>This is command project on courses in the IT-INCUBATOR, where I consolidate my skill in command-work.<br/>  At this project our team using GitHub and learning new necessary knowledge for solving tasks.<br /> Links to the code and sample work correspond to the current state of the project.</p>,
        pRus: <p>Это командный проект на курсах в ИТ-ИНКУБАТОРЕ, где я закрепляю свои навыки командной работы. <br/>  B этом проекте наша команда использует GitHub и изучает новые знания, необходимые для решения задач.<br />  Ссылки на код и на образец работы соответствуют текущему состоянию проекта.</p>,
        hrefDemo:'https://github.com/Arenelin/-flash-cards-',
        onClickDemo:  ()=>{},
        targetDemo: '_blank',
        hrefCode: 'https://github.com/Arenelin/-flash-cards-',
        onClickCode: ()=>{},
        targetCode: "_blank"
    },
    {
        name: 'StudiesProjects',
        imgInfo: 'In developing',
        imgSrc: work0,
        title: 'Social Network',
        pEng:<p>This is an additional (for independent work on given materials) start-to-end project on courses in the IT-INCUBATOR, where I consolidate my knowledge and fill existing gaps in it.<br /> Links to the code and sample work correspond to the current state of the project.</p>,
        pRus: <p>Это дополнительный (для самостоятельной работы по выданным материалам) сквозной проект на курсах в ИТ-ИНКУБАТОРЕ, где я закрепляю свои знания и заполняю существующие пробелы в них.<br />  Ссылки на код и на образец работы соответствуют текущему состоянию проекта.</p>,
        hrefDemo:'https://viktorchizh.github.io/2-samurai-way-main/',
        onClickDemo:  ()=>{},
        targetDemo: '_blank',
        hrefCode: 'https://github.com/ViktorChizh/2-samurai-way-main',
        onClickCode: ()=>{},
        targetCode: "_blank"
    },
    {
        name: 'StudiesProjects',
        imgInfo: 'I`m finished this project',
        imgSrc: work1,
        title: 'ToDoList',
        pEng:<p>This is the main cross-cutting project in the IT-INCUBATOR courses, where I consolidate my knowledge and fill existing gaps in it.<br />Links to the code and sample work correspond to the current state of the project.</p>,
        pRus: <p>Это основной сквозной проект на курсах в ИТ-ИНКУБАТОРЕ, где я закрепляю свои знания и заполняю существующие пробелы в них.<br /> Ссылки на код и на образец работы соответствуют текущему состоянию проекта.</p>,
        hrefDemo:'https://viktorchizh.github.io/1-todolist/',
        onClickDemo: ()=>{},
        targetDemo: '_blank',
        hrefCode: 'https://github.com/ViktorChizh/1-todolist',
        onClickCode:  ()=>{},
        targetCode: "_blank"
    },
    {
        name: 'CommercialProjects',
        imgInfo: 'I`m finished traineeship here',
        imgSrc: work2,
        title: 'First commercial project, where I`m been',
        pEng:<p>I interned for half a year on a real commercial project as a FRONT-END developer. In addition to the main functionality, I performed the duties of a Project Manager Assistant, where I supervised the front-end and back-end.<br /> During the internship, I completed assigned tasks, listened to mentors, and participated in discussing problems and searching for their solutions, communicated with designers and testers.<br /> At English courses at the company, I improved my language from A2 to B1.</p>,
        pRus: <p>Пол года стажировался на реальном коммерческом проекте в качестве FRONT-END разработчика. Помимо основного функционала, выполнял обязанности Project Manager Assistant, где курировал фронт-энд и бэк-энд.<br /> Во время стажировки выполнял поставленные задачи, слушал менторов, участвовал в обсуждениях проблем и поисках их решения, коммуницировал с дизайнерами и тестировщиками.<br /> На курсах английского в компании подтянул язык с А2 до В1.</p>,
        hrefDemo:'https://www.youtube.com/watch?v=XlGi7xTGJ3I',
        targetDemo: "_blank",
        onClickDemo:  ()=>{},
        hrefCode: '#',
        onClickCode: () => alert("\nIt's owner's intellectual property \n\nЭто интеллектуальная собственность владельца"),
        targetCode: ''
    },
    {
        name: 'Achievements',
        imgInfo: 'I`m achieve that',
        imgSrc: watch,
        title: 'My achievements',
        pEng:<p>Certificates from completed courses or received on the Internet during self-study, characteristics, etc.</p>,
        pRus: <p>Сертификаты с пройденных курсов или полученных в интернете при самообучении, характеристики и прочее.</p>,
        hrefDemo:'https://viktorchizh.github.io/portfolio/',
        onClickDemo: () => {window.location.href = Achievements},
        targetDemo: '_blank',
        hrefCode: 'https://github.com/ViktorChizh',
        onClickCode:  ()=>{},
        targetCode: '_blank'
    }
]

const MenuItems = ['All'].concat(base.map(item => item.name).filter((a, i) => a !== base.map(item => item.name)[i - 1]))

export const Works = () => {
    const [filterValue, setFilterValue] = useState('All')

    let filteredBase = base

    for (let i=1; i<=MenuItems.length; i++) {
        if (filterValue === MenuItems[i]) {
            filteredBase = base.filter(work => work.name === MenuItems[i])
        }
    }

    return (
        <StyledWorks id={'Works'}>
            <Container>
                <StyledTitle>My Works</StyledTitle>
                <Menu items={MenuItems} changeFilterValue={setFilterValue} color={`${Theme.colors.textTitle}`} selectedItem={filterValue} />
                <FlexWrapper direction={'row'} justify={'space-between'} wrap={'wrap'} gap={'1%'} alighContent={'center'}>
                    {filteredBase.map((w, index) => {
                        return (
                            <Work key={index}>
                                <ImgWrapper info={w.imgInfo}>
                                    <img src={w.imgSrc} alt='' />
                                </ImgWrapper>
                                <h2>{w.title}</h2>
                                {w.pEng}
                                {w.pRus}<p></p>
                                <FlexWrapper width={'50%'} justify={'space-evenly'}>
                                    <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecondary} padding={"10px"} borderRadius={'10px'} border={`5px double ${Theme.colors.bgPrimary}`} ><a href={w.hrefDemo} onClick={w.onClickDemo} target={w.targetDemo}>Demo</a></Button>
                                    <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecondary} padding={"10px"} borderRadius={'10px'} border={`5px double ${Theme.colors.bgPrimary}`} ><a href={w.hrefCode} onClick={w.onClickCode} target={w.targetCode} >Code</a></Button>
                                </FlexWrapper>
                            </Work>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    color: ${Theme.colors.iconPrimary};
    background-color: ${Theme.colors.bgSecondary};
    ${Container}{
        display: flex;
        flex-direction: column;
        gap: 2%;
        nav {
            margin: 0 auto;
            font-weight: bolder;
        }
    }
`

const Work = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2%;
    max-width: 45%;
    min-width: 320px;
    img{
        width: 100%;
        background-color: ${Theme.colors.bgPrimary};
        padding-top: 15px;
        border-radius: 25px;
    }
    h2 {
        margin: 1% 0;
    }
    p {
        padding-bottom: 2%;
        text-align: justify;
    }
    button{
        margin-left: 25%;
        a {
            color: ${Theme.colors.textPrimary};
        }
    }
    @media (width<=678px) {
            max-width: 96%;
            min-width: 340px;
            margin: 0 auto;
            p, h2, img, div {
                width: 100%;
                margin: 0 auto 3%;
            }
        }
`

type ImgWrapperProps = {
    info?: string
}

const ImgWrapper = styled.div<ImgWrapperProps>`
    position: relative;
    z-index: 0;
    &::before {
        content: '${props => props.info}';
        position: absolute;
        bottom: 7%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        color: ${Theme.colors.textTitle};
        font-family: 'Permanent Marker', cursive;
        font-size: clamp(12px, calc((100vw - 430px) / (1200 - 430) * (18 - 12) + 12px), 18px);
        width: 100%;
        line-height: 1.2;
        letter-spacing: 0.1em;
        font-weight: 600;
        text-align: center
    }
    @media screen and (width<=678px) {
        &::before {
            bottom: 12.5%;            
        }
    }
`

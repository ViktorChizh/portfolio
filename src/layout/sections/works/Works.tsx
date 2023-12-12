import  React, { useState }  from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import work0 from '../../../assets/Work0.svg'
import work1 from '../../../assets/Work1.svg'
import work2 from '../../../assets/Work2.svg'
import watch from '../../../assets/Watch.svg'
import { Button } from '../../../components/Button';
import { Theme } from '../../../stylesAndThemes/Theme';
import { Container } from '../../../components/Container';
import { Menu } from '../../../components/menu/Menu';


const base = [
    {
        name: 'StudiesProjects',
        imgInfo: 'In developing',
        imgSrc: work0,
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
        name: 'StudiesProjects',
        imgInfo: 'I`m thinking about that',
        imgSrc: work1,
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
        name: 'CommercialProjects',
        imgInfo: 'I`m resting from that',
        imgSrc: work2,
        title: 'First commercial project, where I`m been',
        pEng:<p>I interned for half a year on a real commercial project.<br /> And, although I got there as an Assistant Project Manager (my duties included supervising the front and back end), at the same time I repeated all the code after the interns, studied the accompanying documentation, and in the middle of the project I joined the coding, when one of the interns left.<br /> The entire layout of the site (necessary code refactoring and bug fixes), made according to the designers’ layouts in Figma, was done by me at the time of leaving the project.</p>,
        pRus: <p>Пол года стажировался на реальном коммерческом проекте.<br /> И, хоть я попал туда на должность Помошник руководителя проекта (в обязанности входило курирование фронт и бэк энд), параллельно повторял весь код за стажерами, изучал сопутствующую документацию, а в середине проекта присоединился к кодированию.<br /> Вся верстка сайта (необходимый рефакторинг кода и фикс багов), произведенная по макетам дизайнеров в Figma, на момент ухода из проекта сделана мной.</p>,
        hrefDemo:'https://www.youtube.com/watch?v=XlGi7xTGJ3I',
        targetDemo: "_blank",
        onClickDemo:  ()=>{},
        hrefCode: '#',
        onClickCode: () => alert("\nIt's owner's intellectual property \n\nЭто интеллектуальная собственность владельца"),
        targetCode: ''
    },
    {
        name: 'Achivements',
        imgInfo: 'I`m achive that',
        imgSrc: watch,
        title: 'My achivements',
        pEng:<p>Certificates from completed courses or received on the Internet during self-study, characteristics, etc.</p>,
        pRus: <p>Сертификаты с пройденных курсов или полученных в интернете при самообучении, характеристики и прочее.</p>,
        hrefDemo:'https://www.linkedin.com/in/viktorchizh/details/featured/',
        onClickDemo: () => alert("\nI decide how it will be implemented. At the moment, you can see everything on my LinkedIn page. \n\nРешаю, как это будет реализовано. В данный момент, все можно посмотреть на моей страничке в LinkedIn."),
        targetDemo: '_blank',
        hrefCode: 'https://github.com/ViktorChizh',
        onClickCode:  ()=>{},
        targetCode: '_blank'
    }
]

const MenuItems = ['All'].concat(base.map(item => item.name).filter((a, i) => a !== base.map(item => item.name)[i - 1]))

export const Works = () => {
    const [filterValue, setFilterValue] = useState('All')

    let filtredBase = base

    for (let i=1; i<=MenuItems.length; i++) {
        if (filterValue === MenuItems[i]) {
            filtredBase = base.filter(work => work.name === MenuItems[i])
        }
    }

    return (
        <StyledWorks id={'Works'}>
            <Container>
                <StyledTitle>My Works</StyledTitle>
                <Menu items={MenuItems} changeFilterValue={setFilterValue} color={`${Theme.colors.textTitle}`}/>
                <FlexWrapper direction={'row'} justify={'space-between'} wrap={'wrap'} gap={'1%'} alighContent={'center'}>
                    {filtredBase.map(w => {
                        return (
                            <Work>
                                <ImgWrapper info={w.imgInfo}>
                                    <img src={w.imgSrc} alt='' />
                                </ImgWrapper>
                                <h2>{w.title}</h2>
                                {w.pEng}
                                {w.pRus}<p></p>
                                <FlexWrapper width={'30%'} justify={'space-evenly'}>
                                    <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href={w.hrefDemo} onClick={w.onClickDemo} target={w.targetDemo}>Demo</a></Button>
                                    <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href={w.hrefCode} onClick={w.onClickCode} target={w.targetCode} >Code</a></Button>
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
    @media (width<=675px) {
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
`

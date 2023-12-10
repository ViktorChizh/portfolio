import * as React from 'react';
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

export const Works = () => {
    return (
        <StyledWorks id={'Works'}>
            <Container>
                <StyledTitle>My Works</StyledTitle>
                <FlexWrapper direction={'row'} justify={'space-between'} wrap={'wrap'} gap={'1%'} alighContent={'center'}>
                    <Work>
                        <ImgWrapper info={'In developing'}>
                            <img src={work0} alt='' />
                        </ImgWrapper>
                        <h2>ToDoList</h2>
                        <p>
                            This is the main cross-cutting project in the IT-INCUBATOR courses, where I consolidate my knowledge and fill existing gaps in it.<br/>
                            Links to the code and sample work correspond to the current state of the project.
                        </p>
                        <p>
                            Это основной сквозной проект на курсах в ИТ-ИНКУБАТОРЕ, где я закрепляю свои знания и заполняю существующие пробелы в них.<br/>
                            Ссылки на код и на образец работы соответствуют текущему состоянию проекта.
                        </p>
                        <FlexWrapper width={'30%'} justify={'space-evenly'}>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href='/'>Demo</a></Button>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href='https://github.com/ViktorChizh/1-todolist' target="_blank" rel="noreferrer" >Code</a></Button>
                        </FlexWrapper>
                    </Work>
                    <Work>
                        <ImgWrapper info={"I`m thinking about that"}>
                            <img src={work1} alt='' />
                        </ImgWrapper>
                        <h2>Social Network</h2>
                        <p>
                            This is an additional (for independent work on given materials) start-to-end project on courses in the IT-INCUBATOR, where I consolidate my knowledge and fill existing gaps in it.<br/>
                            Links to the code and sample work correspond to the current state of the project.
                        </p>
                        <p>
                            Это дополнительный (для самостоятельной работы по выданным материалам) сквозной проект на курсах в ИТ-ИНКУБАТОРЕ, где я закрепляю свои знания и заполняю существующие пробелы в них.<br/>
                            Ссылки на код и на образец работы соответствуют текущему состоянию проекта.
                        </p>
                        <FlexWrapper width={'30%'} justify={'space-evenly'}>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href='/'>Demo</a></Button>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href='https://github.com/ViktorChizh/2-samurai-way-main' target="_blank" rel="noreferrer" >Code</a></Button>
                        </FlexWrapper>
                    </Work>
                    <Work>
                        <ImgWrapper info={"I`m resting from that"}>
                            <img src={work2} alt='' />
                        </ImgWrapper>
                        <h2>First commercial project, where I`m been</h2>
                        <p>
                            I interned for half a year on a real commercial project.<br/>
                            And, although I got there as an Assistant Project Manager (my duties included supervising the front and back end), at the same time I repeated all the code after the interns, studied the accompanying documentation, and in the middle of the project I joined the coding, when one of the interns left.<br/>
                            The entire layout of the site (necessary code refactoring and bug fixes) at the time of leaving the project was done by me.
                        </p>
                        <p>
                            Пол года стажировался на реальном коммерческом проекте.<br/>
                            И, хоть и я попал туда на должность Помошник руководителя проекта (в обязанности входило курированик фронт и бэк энд), параллельно повторял весь код за стажерами, изучал сопутствующую документацию, а в середине проекта присоединился к кодированию.<br/>
                            Вся верстка сайта (необходимый рефакторинг кода и фикс багов) на момент ухода из проекта сделана мной. 
                        </p>
                        <FlexWrapper width={'30%'} justify={'space-evenly'}>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href='http://134.17.16.177/' target="_blank" rel="noreferrer" >Demo</a></Button>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'} onClick={() => alert("It's owner's intellectual property \nЭто интеллектуальная собственность владельца")}>Code</Button>
                        </FlexWrapper>
                    </Work>
                    <Work>
                        <ImgWrapper info={"I`m achive that"}>
                            <img src={watch} alt='' />
                        </ImgWrapper>
                        <h2>My achivements</h2>
                        <p>
                            Certificates from completed courses or received on the Internet during self-study, characteristics, etc.
                        </p>
                        <p>
                            Сертификаты с пройденных курсов или полученных в интернете при самообучении, характеристики и прочее. 
                        </p>
                        <FlexWrapper width={'30%'} justify={'space-evenly'}>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}onClick={() => alert("I decide how it will be implemented. At the moment, you can see everything on my LinkedIn page (link in footer). \nРешаю, как это будет реализовано. В данный момент, все можно посмотреть на моей страничке в LinkedIn (ссылка в футере).")}>Demo</Button>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}><a href='https://github.com/ViktorChizh' target="_blank" rel="noreferrer" >Code</a></Button>
                        </FlexWrapper>
                    </Work>
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
    gap: 1%;
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

        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        color: ${Theme.colors.textTitle};
        font-family: 'Permanent Marker', cursive;
        font-size: calc((100vw-430px)/(1200-430)*(16-10)+10px);
        line-height: 1;
        letter-spacing: 0.1em;
        font-weight: 600;
        text-align: center
    }
`
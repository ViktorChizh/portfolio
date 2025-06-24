import styled from "styled-components";
import { StyledTitle } from "components/StyledTitle";
import { FlexWrapper } from "components/FlexWrapper";
import { Icon } from "components/Icon";
import { Theme } from "stylesAndThemes/Theme";
import { Container } from "components/Container";

type FooterBase = {
  link: string;
  iconId: string;
};

const footerBase: FooterBase[] = [
  { link: "https://github.com/ViktorChizh", iconId: "githubSocial" },
  { link: "https://t.me/ViktorChizh", iconId: "telegram" },
  { link: "https://linkedin.com/in/ViktorChizh/", iconId: "linkedIn" },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledTitle>Viktor Chizh</StyledTitle>
        <FlexWrapper as="ul" justify="space-around" align="center" width="90%">
          {footerBase.map((icon: FooterBase) => {
            return (
              <li key={`${icon.iconId}${icon.link}`}>
                <a href={icon.link} target="_blank" rel="noreferrer">
                  <Icon iconId={icon.iconId} viewport="0 0 50 50" />
                </a>
              </li>
            );
          })}
        </FlexWrapper>
        <small>© 2023 Viktor Chizh, All Rights Reserved.</small>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  color: ${Theme.colors.textPrimary};
  background-color: ${Theme.colors.bgDark};
  ${Container} {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${StyledTitle} {
      color: ${Theme.colors.textPrimary};
    }
    small {
      margin-top: 15px;
    }
  }
`;

import Link from "next/link";
import styled from "styled-components";

export const NavigationBarContainer = styled.section`
  padding: 0 1rem;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colour.background.dark};
  color: white;

  @media (min-width: 37.5em) {
    padding: 0;
  }
`;

export const NavigationBarContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colour.text.accent};
  display: flex;
  font-size: 1.5rem;

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colour.text.focus};
  }

  span {
    color: ${({ theme }) => theme.colour.text.light};
    margin-inline: ${({ theme }) => theme.spacing.two};
  }

  @media (min-width: 37.5em) {
    margin-left: ${({ theme }) => theme.spacing.three};
  }
`;

export const NavLinksContainer = styled.nav`
  display: none;

  @media (min-width: 37.5em) {
    display: flex;
    height: 100%;
  }
`;

export const ToggleDrawerButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colour.text.focus};
  }

  @media (min-width: 37.5em) {
    display: none;
  }
`;

export const OverlayNavContainer = styled.section<{ showingDrawer: boolean }>`
  display: ${({ showingDrawer }) => (showingDrawer ? "flex" : "none")};
  justify-content: center;
  inset: 79px 0 0; // Removes pixel gap between navbar and content
  position: absolute;
  background-color: ${({ theme }) => theme.colour.background.dark};
  color: ${({ theme }) => theme.colour.text.light};
  z-index: 20;

  html:has(body > div > &) {
    overflow: ${({ showingDrawer }) => (showingDrawer ? "hidden" : "auto")};
  }

  @media (min-width: 37.5em) {
    display: none;
  }
`;

export const NavContent = styled.nav`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const NavSpan = styled.span``;

export const NavLink = styled(Link) <{ $isCurrentUrl?: boolean }>`
  text-decoration: none;
  font-size: 2rem;
  color: ${({ $isCurrentUrl, theme }) =>
    $isCurrentUrl ? theme.colour.text.dark : "inherit"};
  background: ${({ $isCurrentUrl, theme }) =>
    $isCurrentUrl ? theme.colour.background.accent : "none"};
  padding: 1rem 0;

  nav:has(a:is(:hover, :focus-visible)) &:not(:is(:hover, :focus-visible)) {
    color: inherit;
    background: none;
  }

  nav:has(a) & {
    :hover,
    :focus-visible {
      background: ${({ theme }) => theme.colour.background.accent};
      color: ${({ theme }) => theme.colour.text.dark};
    }
  }

  :focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colour.text.focus};
  }

  @media (min-width: 37.5em) {
    padding: 0 ${({ theme }) => theme.spacing.three};
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
`;

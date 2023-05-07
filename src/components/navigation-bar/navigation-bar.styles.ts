import Link from "next/link";
import styled from "styled-components";

export const NavigationBarContainer = styled.section`
  padding: 0 1rem;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColour.dark};
  color: white;
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
  color: inherit;
  display: flex;
  font-size: 1.5rem;

  @media (min-width: 37.5em) {
    padding-left: 16px;
  }
`;

export const NavLinksContainer = styled.nav`
  display: none;

  @media (min-width: 37.5em) {
    display: flex;
    height: 100%;
  }
`;

export const OpenDrawerButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 37.5em) {
    display: none;
  }
`;

export const OverlayNavContainer = styled.section<{ showingDrawer: boolean }>`
  display: ${({ showingDrawer }) => (showingDrawer ? "flex" : "none")};
  justify-content: center;
  inset: 79px 0 0; // Removes pixel gap between navbar and content
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundColour.dark};
  color: ${({ theme }) => theme.textColour.light};

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

export const NavLink = styled(Link)<{ isCurrentUrl: boolean }>`
  text-decoration: none;
  font-size: 2rem;
  color: ${({ isCurrentUrl, theme }) =>
    isCurrentUrl ? theme.textColour.dark : "inherit"};
  background: ${({ isCurrentUrl, theme }) =>
    isCurrentUrl ? theme.backgroundColour.accent : "none"};
  padding: 1rem 0;

  nav:has(a:hover) &:not(:hover) {
    color: inherit;
    background: none;
  }

  nav:has(a) &:hover {
    background: ${({ theme }) => theme.backgroundColour.accent};
    color: ${({ theme }) => theme.textColour.dark};
  }

  @media (min-width: 37.5em) {
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
`;

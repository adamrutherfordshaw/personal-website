import { useState } from "react";
import { useRouter } from "next/router";

import { MenuIcon } from "../icon/content/menu";
import * as Styled from "./navigation-bar.styles";

export const NavigationBar = () => {
  const [showingDrawer, setShowingDrawer] = useState(false);
  const { pathname } = useRouter();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    // {
    //   name: "Projects",
    //   path: "/projects",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const toggleDrawer = () => {
    setShowingDrawer(!showingDrawer);
  };

  const hideDrawer = () => {
    setShowingDrawer(false);
  };

  return (
    <>
      <Styled.NavigationBarContainer>
        <Styled.NavigationBarContent>
          <Styled.HomeLink onClick={hideDrawer} href="/">
            {"<"}
            <span>Adam</span>
            {"/>"}
          </Styled.HomeLink>

          <Styled.NavLinksContainer>
            {routes.map((route, index) => (
              <Styled.NavLink
                href={route.path}
                $isCurrentUrl={pathname === route.path}
                key={`nav-link-${index}`}
              >
                {route.name}
              </Styled.NavLink>
            ))}
          </Styled.NavLinksContainer>

          <Styled.OpenDrawerButton onClick={toggleDrawer}>
            <MenuIcon />
          </Styled.OpenDrawerButton>
        </Styled.NavigationBarContent>
      </Styled.NavigationBarContainer>

      <Styled.OverlayNavContainer showingDrawer={showingDrawer}>
        <Styled.NavContent>
          {routes.map((route, index) => (
            <Styled.NavLink
              onClick={hideDrawer}
              href={route.path}
              $isCurrentUrl={pathname === route.path}
              key={`nav-link-${index}`}
            >
              {route.name}
            </Styled.NavLink>
          ))}
        </Styled.NavContent>
      </Styled.OverlayNavContainer>
    </>
  );
};

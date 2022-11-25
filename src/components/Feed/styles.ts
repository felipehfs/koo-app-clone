import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 407px) minmax(auto, 620px) minmax(
      auto,
      420px
    );
  justify-content: center;
  min-height: 100vh;
`;
export const SideNav = styled.nav`
  display: flex;
  justify-content: center;
`;
export const Timeline = styled.div`
  background-color: #f8f7f3;
  padding: 0 24px 24px;
`;
export const Aside = styled.aside``;
export const Logo = styled.img`
  margin-top: 24px;
  width: 48px;
  height: 69px;
`;

export const Menu = styled.ul`
  margin-top: 32px;
  margin-bottom: 16px;
  width: 100%;
  list-style-type: none;
`;
export const MenuItem = styled.li`
  color: #888;
  padding: 8px 16px;
  margin-block: 8px;
  font-size: 16px;
  cursor: pointer;
  &:is(:first-of-type) {
    color: #121212;
  }

  :has(svg) {
    display: flex;
    gap: 8px;
  }

  & :is(:hover) {
    border-radius: 50px;
    background-color: #f1f1f1;
  }
`;
export const Navigation = styled.div`
  width: 195px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`;
export const Button = styled.button`
  background-color: #536a73;
  padding: 8px;
  border-radius: 50px;
  font-weight: bold;
  min-width: 195px;
  color: #fff;
  border: 1px solid #536a73;
`;

export const Content = styled.div`
  border-radius: 16px;
  border: 1px solid #e8e8e3;
  overflow: hidden;
  &:empty {
    display: none;
  }
`;

export const AsideContent = styled.div`
  margin-top: 24px;
  padding-inline: 16px;
  position: fixed;
`;

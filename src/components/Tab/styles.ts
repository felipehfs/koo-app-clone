import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div``;
export const TabHeader = styled.header`
  display: flex;
  gap: 16px;
  justify-content: center;
  position: sticky;
  padding-top: 24px;
  padding-bottom: 8px;
  top: 0;
  width: 100%;
  background-color: #f8f7f3;
`;

type TabButtonProps = {
  active?: boolean;
};

export const TabButton = styled.button<TabButtonProps>`
  background-color: transparent;
  border: none;
  padding: 8px 0;
  font-size: 16px;
  color: #888;
  font-weight: bold;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      color: #536a73;

      &::before {
        width: 100%;
        content: "";
        height: 3px;
        border-radius: 8px;
        background-color: currentColor;
        position: absolute;
        bottom: 0px;
      }
    `}
`;

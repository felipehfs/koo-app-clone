import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Card = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    border-top: 1px solid #e8e8e3;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  gap: 8px;
`;
export const Container = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding-block: 8px;
  border: 1px solid #e8e8e3;

  :where(:empty) {
    display: none;
  }
  animation: ${fadeIn} 1s ease-in-out;
`;
export const Profile = styled.div`
  & :where(small, strong) {
    display: block;
  }

  strong {
    font-size: 16px;
    color: #121212;
  }
  small {
    color: #888;
    font-size: 14px;
  }
`;
export const Button = styled.button`
  background-color: #809b9d;
  border: 1px solid #809b9d;
  border-radius: 20px;
  padding-inline: 16px;
  padding-block: 5px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

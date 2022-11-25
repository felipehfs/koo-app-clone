import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #fff;
  padding: 16px 16px 14px;
  & + & {
    border-top: 1px solid #e8e8e3;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding-block-end: 16px;
  }

  & > p {
    color: #212121;
  }
`;

export const Meta = styled.div`
  svg {
    color: #888;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: flex;
  gap: 8px;

  & section {
    display: flex;
    flex-direction: column;
  }

  & strong {
    font-size: 16px;
  }

  & small {
    color: #888;
    font-size: 14px;
  }
`;

export const Input = styled.button`
  border: 1px solid #e8e8e3;
  margin-top: 8px;
  background-color: transparent;
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 8px;
  gap: 8px;
  align-items: center;
  border-radius: 12px;
  span {
    display: block;
    font-size: 12px;
    color: #888;
  }
`;
export const Icon = styled.div`
  color: #888;
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const Footer = styled.footer`
  padding-block-start: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  :has(span) {
    align-items: center;
    gap: 4px;
  }
  span {
    display: block;
    color: #666;
    font-weight: bold;
  }
`;

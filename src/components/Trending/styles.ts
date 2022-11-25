import styled from "@emotion/styled";

export const Container = styled.div``;
export const Header = styled.header`
  margin-block-end: 16px;
`;
export const Title = styled.span`
  font-size: 16px;
`;

export const Card = styled.div`
  padding: 10px 16px;
  width: 350px;
  border: 1px solid #e8e8e3;
  background-color: #f8f7f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;

  & + & {
    margin-top: 8px;
  }
`;
export const CardTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
export const RoundedButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(128, 155, 157);
  cursor: pointer;
  svg {
    width: 26px;
    height: 26px;
  }
`;

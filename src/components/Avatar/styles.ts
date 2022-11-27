import styled from "@emotion/styled";

interface ImageProps {
  size: string;
}
export const Image = styled.img<ImageProps>`
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: contain;
`;

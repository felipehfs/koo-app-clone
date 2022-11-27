import { Image } from "./styles";

type AvatarProps = {
  src: string;
  size: string;
};

export function Avatar({ src, size }: AvatarProps) {
  return <Image src={src} size={size} />;
}

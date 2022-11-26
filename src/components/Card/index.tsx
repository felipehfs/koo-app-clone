import {
  Container,
  Avatar,
  Profile,
  Meta,
  Input,
  Icon,
  Footer,
  IconButton,
} from "./styles";
import { MdMoreVert } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BsChatSquare, BsWhatsapp, BsShare } from "react-icons/bs";
import { Post } from "../../models/post";

type CardProps = {
  data: Post;
};

export function Card({ data }: CardProps) {
  return (
    <Container>
      <header>
        <Profile>
          <Avatar src={data.avatar} alt="coo" />
          <section>
            <strong>{data.name}</strong>
            <small>@{data.username}</small>
          </section>
        </Profile>
        <Meta>
          <MdMoreVert />
        </Meta>
      </header>
      <p>{data.content}</p>
      <Input>
        <Icon>
          <FaUserCircle />
        </Icon>
        <span>Escreva seu comentário</span>
      </Input>
      <Footer>
        <IconButton>
          <BiLike />
          <span>{data.likes}</span>
        </IconButton>
        <IconButton>
          <BsChatSquare />
          <span>{data.total_comments}</span>
        </IconButton>
        <BsWhatsapp />
        <BsShare />
      </Footer>
    </Container>
  );
}

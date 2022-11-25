import {
  Container,
  SideNav,
  Timeline,
  Aside,
  Logo,
  Menu,
  MenuItem,
  Navigation,
  Button,
  Content,
  AsideContent,
} from "./styles";
import koo from "../../assets/koo.svg";
import { BiHome } from "react-icons/bi";
import { BsHash, BsGlobe } from "react-icons/bs";
import { Tab } from "../Tab";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import { Post } from "../../models/post";
import { Trending } from "../Trending";

export function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data.posts));
  });
  return (
    <Container>
      <SideNav>
        <Navigation>
          <Logo src={koo} alt="Koo logo"></Logo>
          <Menu>
            <MenuItem>
              <BiHome />
              Alimentação
            </MenuItem>
            <MenuItem>
              <BsHash />
              Explore
            </MenuItem>
            <MenuItem>
              <BsGlobe />
              Idioma
            </MenuItem>
          </Menu>
          <Button>+Post</Button>
        </Navigation>
      </SideNav>
      <Timeline>
        <Tab labels={["Feed", "People", "New"]}>
          <Content>
            {posts.map((post) => (
              <Card key={post.id} data={post} />
            ))}
          </Content>
          <div></div>
          <div></div>
        </Tab>
      </Timeline>
      <Aside>
        <AsideContent>
          <Trending />
        </AsideContent>
      </Aside>
    </Container>
  );
}

import {
  Container,
  Header,
  Title,
  Card,
  CardTitle,
  RoundedButton,
  CardLeft,
  Avatars,
} from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ITrending } from "../../models/trending";
import { Avatar } from "../Avatar";

export function Trending() {
  const [trendings, setTrendings] = useState<ITrending[]>([]);
  useEffect(() => {
    fetch("/api/trendings")
      .then((resp) => resp.json())
      .then((data) => setTrendings(data.trendings));
  }, []);
  return (
    <Container>
      <Header>
        <Title>Trending Hashtags</Title>
      </Header>
      {trendings.map((trending) => (
        <Card key={trending.id}>
          <CardLeft>
            <CardTitle>#{trending.name}</CardTitle>
            <Avatars>
              {trending.users.map((avatar) => (
                <Avatar size="16px" src={avatar} />
              ))}
            </Avatars>
          </CardLeft>
          <RoundedButton>
            <BsPlusCircle />
          </RoundedButton>
        </Card>
      ))}
    </Container>
  );
}

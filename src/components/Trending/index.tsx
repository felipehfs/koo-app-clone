import {
  Container,
  Header,
  Title,
  Card,
  CardTitle,
  RoundedButton,
} from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ITrending } from "../../models/trending";

export function Trending() {
  const [trendings, setTrendings] = useState<ITrending[]>([]);
  useEffect(() => {
    fetch("/api/trendings")
      .then((resp) => resp.json())
      .then((data) => setTrendings(data.trendings));
  });
  return (
    <Container>
      <Header>
        <Title>Trending Hashtags</Title>
      </Header>
      {trendings.map((trending) => (
        <Card key={trending.id}>
          <CardTitle>#{trending.name}</CardTitle>
          <RoundedButton>
            <BsPlusCircle />
          </RoundedButton>
        </Card>
      ))}
    </Container>
  );
}

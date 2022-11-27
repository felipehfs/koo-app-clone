import { useEffect, useState } from "react";
import { User } from "../../models/user";
import { Avatar } from "../Avatar";
import { Container, Card, CardLeft, Profile, Button } from "./styles";

export function Peoples() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("/api/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <Container>
      {users.map((user) => (
        <Card key={user.id}>
          <CardLeft>
            <Avatar size="52px" src={user.avatar} />
            <Profile>
              <strong>{user.name}</strong>
              <small>@{user.username}</small>
            </Profile>
          </CardLeft>
          <Button>+ Seguir</Button>
        </Card>
      ))}
    </Container>
  );
}

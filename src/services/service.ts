import { createServer, Model, Factory, ActiveModelSerializer } from "miragejs";
import { faker } from "@faker-js/faker";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      post: Model,
      trending: Model,
      user: Model,
    },
    logging: true,
    factories: {
      post: Factory.extend({
        id: () => faker.datatype.uuid(),
        name: () => faker.name.fullName(),
        username: () => faker.internet.userName(),
        avatar: () => faker.image.avatar(),
        content: () => faker.lorem.paragraph(),
        likes: () => faker.random.numeric(3),
        totalComments: () => faker.random.numeric(2),
      }),
      trending: Factory.extend({
        id: () => faker.datatype.uuid(),
        name: () => faker.lorem.word(5),
        users: () => [
          faker.image.avatar(),
          faker.image.avatar(),
          faker.image.avatar(),
          faker.image.avatar(),
        ],
      }),
      user: Factory.extend({
        id: () => faker.datatype.uuid(),
        name: () => faker.name.fullName(),
        username: () => faker.internet.userName(),
        avatar: () => faker.image.avatar(),
      }),
    },
    seeds(server) {
      server.createList("post", 55);
      server.createList("trending", 5);
      server.createList("user", 20);
    },
    routes() {
      this.namespace = "api";
      this.get("/posts");
      this.get("/trendings");
      this.get("/users");
      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}

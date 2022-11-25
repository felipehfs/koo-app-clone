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
    },
    logging: true,
    factories: {
      post: Factory.extend({
        id: () => faker.datatype.uuid(),
        name: () => faker.name.fullName(),
        username: () => faker.internet.userName(),
        avatar: () => faker.image.avatar(),
        content: () => faker.lorem.paragraph(),
      }),
      trending: Factory.extend({
        id: () => faker.datatype.uuid(),
        name: () => faker.lorem.word(5),
      }),
    },
    seeds(server) {
      server.createList("post", 35);
      server.createList("trending", 5);
    },
    routes() {
      this.namespace = "api";
      this.get("/posts");
      this.get("/trendings");
      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}

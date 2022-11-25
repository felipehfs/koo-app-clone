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
    },
    seeds(server) {
      server.createList("post", 35);
    },
    routes() {
      this.namespace = "api";
      this.get("/posts");
      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}

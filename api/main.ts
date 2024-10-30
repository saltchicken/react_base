import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";
import data from "./data.json" with { type: "json" };
import routeStaticFilesFrom from "./utils/routeStaticFilesFrom.ts";

const router = new Router();

router.get("/api/test", (context) => {
  context.response.body = data;
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(routeStaticFilesFrom([`${Deno.cwd()}/dist`, `${Deno.cwd()}/public`]));

await app.listen({ port: 8000 });

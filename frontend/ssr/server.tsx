import { Application, Context, Router, send } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { ReactDOMServer, React } from "../dep.ts";
import App from "../components/App.tsx";

const app = new Application();
const port = 443;

const router = new Router();

router.get("/", (context) => {
    context.response.body =
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
            <link href="/static/styles/app.css" rel="stylesheet">
		</head>
        <body>
            ${ReactDOMServer.renderToString(<App />)}
        </body>
        </html>
        `;
});

router.all("/static/images/:image", async (context) => {
    await send(context, context.params.image, {
        root: `${Deno.cwd()}/frontend/static/images`
    })
});

router.all("/static/styles/:style", async (context) => {
    await send(context, context.params.style, {
        root: `${Deno.cwd()}/frontend/static/styles`
    })
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port});
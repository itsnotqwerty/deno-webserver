import { Application, Router, send } from "oak";
import { CORS } from "oak-cors";
import React from "react-dom";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";
import App from "./components/App.tsx";

const app = new Application();
const router = new Router();
const staticDir = `${Deno.cwd()}/src/static`;

router.get("/", (context) => {
    context.response.body =
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Area 51</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
            <link href="/static/styles/static.css" rel="stylesheet">
            <link href="/static/styles/animations.css" rel="stylesheet">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
            <script type="text/javascript" src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.js"></script>
		</head>
        <body>
            ${renderToString(<App />)}
            <script type="text/javascript" src="/static/scripts/animations.js"></script>
            <script type="text/javascript" src="/static/scripts/audio.js"></script>
        </body>
        </html>
        `;
});

router.all("/static/:route/:item", async (context) => {
    await send(context, context.params.item, {
        root: `${staticDir}/${context.params.route}`
    })
});

router.get("/favicon.ico", async (context) => {
    await send(context, 'favicon.ico', {
        root: `${staticDir}`
    })
});

app.use(CORS());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 8000});
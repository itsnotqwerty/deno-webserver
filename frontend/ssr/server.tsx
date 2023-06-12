import { Application, Router, send } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { ReactDOMServer, React } from "../dep.ts";
import App from "../components/App.tsx";

const app = new Application();

const router = new Router();

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
            <link href="/static/styles/app.css" rel="stylesheet">
            <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
		</head>
        <body>
            ${ReactDOMServer.renderToString(<App />)}
            <script>
            $('#earth').on('click', () => {
                $('#bonkAudio')[0].play();
                $('#earthCtl').prop('checked', false);
            });
            $('#alienCtl').on('click', () => {
                $('#explosionAudio')[0].play();
                $('#explosion').animate({
                    'opacity': '1'
                });
                setTimeout(() => {
                    $('#explosion').animate({
                        'opacity': '0'
                    });
                }, 500);
                setTimeout(() => {
                    $('#alienCtl').prop('checked', false);
                }, 5000);
            });
            setInterval(() => {
                $('#comet').addClass('comet-animation');
                setTimeout(() => {
                    $('#cometAudio')[0].play();
                }, 800);
                setTimeout(() => {
                    $('#comet').removeClass('comet-animation');
                }, 8000);
            }, 47000);
            setInterval(() => {
                $('#ufo').addClass('ufo-animation');
                setTimeout(() => {
                    $('#ufoAudio')[0].play();
                }, 600);
                setTimeout(() => {
                    $('#ufo').removeClass('ufo-animation');
                }, 4000);
            }, 27000);
            setInterval(() => {
                $('#astronaut').addClass('astronaut-animation');
                setTimeout(() => {
                    $('#astronautAudio')[0].play();
                }, 1200);
                setTimeout(() => {
                    $('#astronaut').removeClass('astronaut-animation');
                }, 16000);
            }, 80000);
            </script>
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

router.all("/static/audio/:audio", async (context) => {
    await send(context, context.params.audio, {
        root: `${Deno.cwd()}/frontend/static/audio`
    })
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 8000});
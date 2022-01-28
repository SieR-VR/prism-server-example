import Express from "express";
import Prism from "prism-vrc";

const app = Express();
app.get('/', async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    res.end(await Prism("Hello World"));
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
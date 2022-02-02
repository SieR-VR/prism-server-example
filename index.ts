import Express from "express";
import Prism from "prism-vrc";
import * as fs from "fs";

const app = Express();
app.get('*', async (req, res) => {
    console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    res.end(await Prism(fs.readFileSync("./assets/test.txt", "utf8"), {
        secondsPerFrame: 5,
        bitHeight: 5,
        bitWidth: 5,
        quality: 100,
        height: 720,
        width: 1280,
    }));
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
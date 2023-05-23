import React from "react";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use("^/$", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(4000, () => {
  console.log("App running at 4000");
});

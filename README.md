## Steps to start with project

- `npm i express @babel/preset-env @babel/preset-react @babel/register ignore-styles`
- Create server folder in project root and add index.js in it. `index.js` will import `server.js` that contains all server side rendering code.
- Then create frontend build. As server side rendered code will use the same HTML.
- Server side rendered code use `ReactDOMServer.renderString` to get HTML string that contains frontend.
- Inside `ReactDOMServer.renderString` passed `StaticRouter` required in case of routes which contains main `App`.
- You also need to expose chunk files and assets in build folder using `express.static`. As build also contains index.html and that can conflict with express.static, path to middleware changed to `^/$`.
- This is only first time server side rendering.

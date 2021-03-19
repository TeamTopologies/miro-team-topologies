# Team Topologies web plugin for Miro

With this plugin users can build Team Topologies.

_This plugin was created for training purpose, it is not ready for production [yet]._

# How feature works

_todo_

# How to build

You will need Webpack-cli install globally WITH npm ENV VAR set.

- Run `npm install`
- Replace `CLIENT_ID` in [`src/config.ts`](src/config.ts) file You can get _CLIENT_ID_ in app settings.
- Run `npm run build` or `npm run watch` to compile app

_for demo_

- Run serve the app `npx serve -p 8081`
- Run `ngrok` using `npx ngrok http 8081`
- Get https url from _ngrok_ and paste it in `iframe url` in your app settings.
  _for run_
- upload html files and dist folder under a **https** server
- copy the index.html secure URL and paste it in `iframe url` in your app settings.

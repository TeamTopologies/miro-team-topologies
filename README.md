# Team Topologies web plugin for Miro

With this plugin users can build Team Topologies.

_This plugin was created for training purpose, it is not ready for production [yet]._

# How it works

You can try the plugin durectly using this URL: https://miro.com/oauth/authorize/?response_type=code&client_id=3074457356139930746&redirect_uri=%2Fconfirm-app-install%2F 

Setup the Team Topologies icon from your library
![Find the Team Topologies icon from your library](https://malparty.github.io/miro-team-topologies/readme-img/001.import_from_library.gif)

Start to drag&drop the shapes you need:
![Start Drag & Drop the needed shapes](https://malparty.github.io/miro-team-topologies/readme-img/002.Start_drag_and_drop.gif)

Once the needed shapes are in your whiteboard, you can edit them as much as you want (since these are standard Miro shapes):
![Standard shapes are fully editable](https://malparty.github.io/miro-team-topologies/readme-img/003.Standard_Miro_shapes_fully_editable.gif)

# How to build

You will need Webpack-cli install globally with npm ENV VAR set.

- Run `npm install`
- Replace `CLIENT_ID` in [`src/config.ts`](src/config.ts) file *(You can get your own _CLIENT_ID_ in Miro app settings)*.
- Run `npm run build` or `npm run watch` to compile the plugin

_development_
- Run serve the app `npx serve -p 8081`
- Run `ngrok` using `npx ngrok http 8081`
- Get https url from _ngrok_ and paste it in `iframe url` in your app settings.
  _run/release_
- upload html files and dist folder under a **https** server
- copy the index.html URL (https required) and paste it in `iframe url` in your app settings.

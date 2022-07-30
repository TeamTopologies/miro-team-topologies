//import { PLUGIN_TITLE, LOGO_TT } from 'config';

async function init() {
  // miro.onReady(async () => {
  //   miro.initialize({
  //     extensionPoints: {
  //       toolbar: async () => {
  //         const permissions = await miro.currentUser.getCurrentBoardPermissions();
  //         const canEdit = permissions.findIndex((p) => p === 'EDIT_CONTENT') !== -1;
  //         if (canEdit) {
  //           return {
  //             title: PLUGIN_TITLE,
  //             svgIcon: LOGO_TT,
  //             librarySvgIcon: LOGO_TT,
  //             toolbarSvgIcon: LOGO_TT,
  // onClick: async () => {
  miro.board.ui.on('icon:click', async () => {
    // const authorized = await miro.isAuthorized();
    // if (!authorized) {
    //   await miro.requestAuthorization();
    // }
    await miro.board.ui.openPanel({ url: 'content-panel.html' });
  });
  //         }
  //       }
  //     }
  //   });
  // });

  //   miro.board.ui.on('icon:click', async () => {
  //     await miro.board.ui.openPanel({url: 'app.html'});
  //   });
}

init();

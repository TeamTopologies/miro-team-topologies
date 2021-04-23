import {PLUGIN_TITLE, LOGO_TT} from 'config'

miro.onReady(async () => {
  miro.initialize({
    extensionPoints: {
      toolbar: async () => {
        const permissions = await miro.currentUser.getCurrentBoardPermissions()
        const canEdit = permissions.findIndex((p) => p === 'EDIT_CONTENT') !== -1
        const authorized = await miro.isAuthorized()
        if (authorized && canEdit) {
          return {
            title: PLUGIN_TITLE,
            svgIcon: LOGO_TT,
            librarySvgIcon: LOGO_TT,
            toolbarSvgIcon: LOGO_TT,
            onClick: () => {
              miro.board.ui.openLeftSidebar('content-panel.html')
            },
          }
        }
      },
    },
  })
})

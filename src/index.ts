import {PLUGIN_TITLE, CLIENT_ID} from 'config'
const icon24 = `<svg version="1.1" id="team_topologies_logo_btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 103 103" style="enable-background:new 0 0 339 103;" xml:space="preserve">
<g>
  <path fill="#59FBE3" d="M66.4,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7h7.1H66.4z" />
  <path fill="#9B79EE" d="M66.4,22.8v5.7h-2.1h-7.1H45.1V10.7h9.2C61,10.7,66.4,16.1,66.4,22.8z" />
  <path fill="#9B79EE" d="M40,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7H40z" />
  <path fill="#FFDF56" d="M30.8,28.5c-6.7,0-12.1,5.4-12.1,12.1v9.2H40h12.2h14.2h5.9h1.6c6.7,0,12.1-5.4,12.1-12.1v-9.2" />
  <path fill="#59FBE3" d="M40,22.8v5.7h-9.2c-6.7,0-12.1,5.4-12.1,12.1V10.7h9.2C34.6,10.7,40,16.1,40,22.8z" />
  <path fill="#F2195C" d="M66.4,28.5v9.2c0,6.7-6,12.1-13.4,12.1h-7.9v-9.2c0-6.7,6.1-12.1,13.5-12.1H66.4z" />
</g>
</svg>`

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
            svgIcon: icon24,
            librarySvgIcon: icon24,
            toolbarSvgIcon: icon24,
            onClick: () => {
              miro.board.ui.openLeftSidebar('content-panel.html')
            },
          }
        }
      },
    },
  })

  // // Opens bottom-panel if URL contain runPrototyping param + set runtimeState
  // const params = await miro.board.__getParamsFromURL()
  // if (params.runPrototyping) {
  //   miro.showNotification('Enter prototyping mode...')
  //   miro.addListener('ALL_WIDGETS_LOADED', async () => {
  //     miro.__setRuntimeState({enterPrototypingMode: true})
  //     miro.board.ui.openBottomPanel('bottom-panel.html')
  //   })
  // }
})

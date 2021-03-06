const jitsiConfig = {
  roomName: 'rastaihasdfj1alskfja2341skdfj',
  parentNode: document.querySelector('#jit-si-meet'),
  width: '100%',
  height: '100vh',
  configOverwrite: {
    disableDeepLinking: true,
    prejoinPageEnabled: false,
    startAudioOnly: false,
    startWithAudioMuted: true,
    startWithVideoMuted: true,
  },
  interfaceConfigOverwrite: {
    SHOW_CHROME_EXTENSION_BANNER: false,
    RECENT_LIST_ENABLED: false,
    VIDEO_QUALITY_LABEL_DISABLED: true,
    CONNECTION_INDICATOR_DISABLED: true,
    TOOLBAR_ALWAYS_VISIBLE: true,
    DEFAULT_BACKGROUND: '#eaeaea',
    LANG_DETECTION: false,
    HIDE_INVITE_MORE_HEADER: true,
    DISPLAY_WELCOME_PAGE_CONTENT: false,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
    SHOW_JITSI_WATERMARK: false,
    APP_NAME: 'Rasta Meet',
    NATIVE_APP_NAME: 'Rasta Meet',
    MOBILE_APP_PROMO: false,
    PROVIDER_NAME: 'Rasta',
    TOOLBAR_BUTTONS: [
      'microphone',
      'camera',
      // 'closedcaptions',
      'desktop',
      'fullscreen',
      // 'fodeviceselection',
      'chat',
      // 'etherpad',
      // 'videoquality',
      'tileview',
    ],
  },
};

export default jitsiConfig;

    // chorme-packaged-apps.js Template - START
    window.orgAddEventListener = window.addEventListener;
    
    window.addEventListener = function(event, listener, bool) {
     if (event !== 'unload') {
      window.orgAddEventListener(event, listener, bool);
     }
    };
    // chorme-packaged-apps.js Template - END

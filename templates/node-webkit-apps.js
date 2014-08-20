    // chorme-packaged-apps.js Template - START

    // Enable Cut & Paste
    var gui = require('nw.gui');
    win = gui.Window.get();

    var nativeMenuBar = new gui.Menu({ type: "menubar" });
    try {
      nativeMenuBar.createMacBuiltin("My App");
      win.menu = nativeMenuBar;
    } catch (ex) {
      console.log(ex.message);
    }

    // Load moment.js 
    // see: https://github.com/rogerwang/node-webkit/issues/2075
    // 
    // also add to node-webkit package.json 
    // 
    var moment = require('moment')
    
    // chorme-packaged-apps.js Template - END

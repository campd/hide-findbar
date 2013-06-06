var tabs = require("sdk/tabs");
var windowUtils = require("sdk/private-browsing/window/utils");

function closeFindBar(tab) {
  let owner = windowUtils.getOwnerWindow(tab);
  if (owner && owner.gFindBar) {
    owner.gFindBar.close();
  }
}

tabs.on('deactivate', closeFindBar);
tabs.on('ready', closeFindBar);


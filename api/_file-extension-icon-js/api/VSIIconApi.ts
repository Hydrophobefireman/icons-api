import {
  vsiFileExtensionsToIcons,
  vsiFileNamesToIcons,
} from "../gen/vsiFileIconsName";
import {vsiFolderNamesToIcons} from "../gen/vsiFolderIconsName";
import _index from "../icons/index";

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

export function getVSIFileIcon(fileName) {
  var splitName = fileName.split(".");
  var iconName = "";

  while (splitName.length) {
    var curName = splitName.join(".");
    if (vsiFileNamesToIcons[curName]) {
      iconName = vsiFileNamesToIcons[curName];
      break;
    }
    if (vsiFileExtensionsToIcons[curName]) {
      iconName = vsiFileExtensionsToIcons[curName];
      break;
    }

    splitName.shift();
  }

  if (iconName === "") iconName = "file";

  var icon = _index2.default.vsiFileIcons
    .map(function (vsiFileIcon) {
      return vsiFileIcon[iconName] ? vsiFileIcon[iconName] : "";
    })
    .filter(function (item) {
      return item;
    });

  return icon[0];
}

export function getVSIFolderIcon(folderName) {
  var open =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var iconName = "";
  if (vsiFolderNamesToIcons[folderName]) {
    iconName = vsiFolderNamesToIcons[folderName];
  }

  if (iconName === "") iconName = "folder";

  var icon = "";
  if (open) icon = _index2.default.vsiFolderIconsOpen[iconName];
  else icon = _index2.default.vsiFolderIcons[iconName];

  return icon;
}

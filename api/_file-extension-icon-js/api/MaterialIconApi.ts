import {
  materialFileExtensionsToIcons,
  materialFileNamesToIcons,
} from "../gen/materialFileIconsName";
import {materialFolderNamesToIcons} from "../gen/materialFolderIconsName";
import icons from "../icons/index";

export function getMaterialFileIcon(fileName) {
  var splitName = fileName.split(".");
  var iconName = "";

  while (splitName.length) {
    var curName = splitName.join(".");
    if (materialFileNamesToIcons[curName]) {
      iconName = materialFileNamesToIcons[curName];
      break;
    }
    if (materialFileExtensionsToIcons[curName]) {
      iconName = materialFileExtensionsToIcons[curName];
      break;
    }

    splitName.shift();
  }

  if (iconName === "") iconName = "file";

  var icon = icons.materialFileIcons
    .map(function (materialFileIcon) {
      return materialFileIcon[iconName] ? materialFileIcon[iconName] : "";
    })
    .filter(function (item) {
      return item;
    });

  return icon[0];
}

export function getMaterialFolderIcon(folderName) {
  var open =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var iconName = "";
  if (materialFolderNamesToIcons[folderName]) {
    iconName = materialFolderNamesToIcons[folderName];
  }

  if (iconName === "") iconName = "folder";

  var icon = "";
  if (open) icon = icons.materialFolderIconsOpen[iconName];
  else icon = icons.materialFolderIcons[iconName];

  return icon;
}

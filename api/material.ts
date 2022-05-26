import type {VercelRequest, VercelResponse} from "@vercel/node";

import {getMaterialFileIcon} from "./_file-extension-icon-js";
import mimes from "./mimes.json";

export default function (req: VercelRequest, res: VercelResponse) {
  const {mode = "extension", name} = req.query;
  if (!name || Array.isArray(name))
    return res.status(400).json({error: "invalid request"});
  if (mode === "extension") {
    return res
      .setHeader("content-type", "image/svg+xml")
      .send(getMaterialFileIcon(name));
  }
  if (mode === "mime") {
    const fn = `index${mimes[name] || ".bin"}`;
    return res
      .setHeader("content-type", "image/svg+xml")
      .send(getMaterialFileIcon(fn));
  }
  return res.status(400).json({error: "Invalid request"});
}

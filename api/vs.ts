import type {VercelRequest, VercelResponse} from "@vercel/node";

import {getVSIFileIcon} from "./_file-extension-icon-js";
import mimes from "./mimes.json";

export default function (req: VercelRequest, res: VercelResponse) {
  const {mode = "extension", name} = req.query;
  if (!name || Array.isArray(name))
    return res.status(400).json({error: "invalid request"});
  if (mode === "extension") {
    return res
      .setHeader("content-type", "image/svg+xml")
      .setHeader("cache-control", "max-age=31536000, immutable")
      .send(getVSIFileIcon(name));
  }
  if (mode === "mime") {
    const fn = `index${mimes[name] || ".bin"}`;
    return res
      .setHeader("content-type", "image/svg+xml")
      .setHeader("cache-control", "max-age=31536000, immutable")
      .send(getVSIFileIcon(fn));
  }
  return res.status(400).json({error: "Invalid request"});
}

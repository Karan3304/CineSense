export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: `Bearer GTskHTS2lzJFkHdJz4AW5a3eXmkLcgFc5UAFmcN5`,
    Authorization: `Bearer ${process.env.REACT_APP_WATCHMODE_API_KEY}`,
  },
};

export const WATCHMODE_BASE = "https://api.watchmode.com/v1";
export const WATCHMODE_API_KEY = process.env.REACT_APP_WATCHMODE_API_KEY;

export const Bckg_Img =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab1fe332-993a-44d1-b60b-cd4f8d11b96e/web/IN-en-20260928-TRIFECTA-perspective_85aef51c-94d6-41ea-a1ea-1e77199158f1_large.jpg";

export const Supported_languages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

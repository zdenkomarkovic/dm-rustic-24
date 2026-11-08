export const SITE_URL = "https://www.dekorativneciglice.rs";
export const SITE_NAME = "DM RUSTIC 24";
export const PHONE = "+381644032842";
export const EMAIL = "dmrustic2023@gmail.com";
export const SOCIALS = [
  "https://www.facebook.com/profile.php?id=61554328877469",
  "https://www.instagram.com/dm_rustic/",
];

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${encodeURI(path.startsWith("/") ? path : `/${path}`)}`;

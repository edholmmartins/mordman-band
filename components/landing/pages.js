// Landing pages linked from the homepage link blocks, the landing pages
// themselves and app/sitemap.js. Keep this list in sync with app/<slug>/page.js.
export const eventPages = [
  { path: "/band-till-50-arsfest", label: "Band till 50-årsfest", hint: "och 30, 40 och 60" },
  { path: "/boka-band-till-fest", label: "Boka band till fest", hint: "privatfest, firmafest, jubileum" },
];

export const regionPages = [];

export const landingPages = [...eventPages, ...regionPages];

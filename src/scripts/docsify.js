import { pageEditPlugin, sidebarCollapsePlugin, tocPlugin } from "./plugins";

window.$docsify = {
  // GENERAL
  // ---------------------------------------------------------------------------
  name: `<div class="logo"><img src="/_media/images/logos/spot.svg"/></div>`,
  homepage: "/connect-your-cloud-provider/README.md",
  formatUpdated: "{MM}/{DD}, {HH}:{mm}",
  ga: "UA-68573156-10",

  // NAVIGATION
  // ---------------------------------------------------------------------------
  routerMode: "history", // default: 'hash'
  alias: {
    // ensures there's only ever one single sidebar (see #301)
    "/.*/_sidebar.md": "/_sidebar.md",
  },
  maxLevel: 1,
  subMaxLevel: 1,
  loadSidebar: true,
  auto2top: true,
  autoHeader: false,
  coverpage: false,

  // PLUGINS
  // ---------------------------------------------------------------------------
  plugins: [sidebarCollapsePlugin, pageEditPlugin, tocPlugin],

  // SEARCH
  // ---------------------------------------------------------------------------
  search: {
    paths: "auto",
    placeholder: "Search",
    noData: "No Results.",
  },

  // THEME
  // ---------------------------------------------------------------------------
  noEmoji: true,
  themeColor: "#0086ff",

  // PAGINATION
  // ---------------------------------------------------------------------------
  pagination: {
    crossChapter: true,
    crossChapterText: false,
  },

  // TOC
  // ---------------------------------------------------------------------------
  toc: {
    title: "On This Page",
  },

  // EDIT ON GITHUB
  // ---------------------------------------------------------------------------
  editOnGitHub: {
    base: "https://github.com/spotinst/help/edit/master/src/docs",
  },
};

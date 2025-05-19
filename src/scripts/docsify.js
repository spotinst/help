import {
  pageEditPlugin,
  tocPlugin,
  featherPlugin,
  searchFocusPlugin,
  expandActivePlugin,
} from "./plugins";
import { aliases } from "./aliases";

window.$docsify = {
  // General
  // ---------------------------------------------------------------------------
  name: `<div class="logo"><img src="/_media/images/spot.png"/></div>`,
  homepage: "/connect-your-cloud-provider/README.md",
  notFoundPage: true,
  formatUpdated: "{MM}/{DD}, {HH}:{mm}",
  ga: "UA-68573156-10",

  // Navigation
  // ---------------------------------------------------------------------------
  routerMode: "history", // default: 'hash'
  alias: { ...aliases }, // routing rules for backwards compatibility
  maxLevel: 1,
  subMaxLevel: 1,
  loadSidebar: true,
  auto2top: true,
  autoHeader: false,
  coverpage: false,

  // Search
  // ---------------------------------------------------------------------------
  search: {
    paths: "/paths.json", // Reference the correct path for paths.json in the build
    placeholder: `Type here to search...`,
    noData: "No results.",
    depth: 4,
    maxAge: 0,
  },

  // Theme
  // ---------------------------------------------------------------------------
  noEmoji: true,
  themeColor: "#0086ff",

  // Local Plugins
  // ---------------------------------------------------------------------------
  plugins: [
    pageEditPlugin,
    tocPlugin,
    featherPlugin,
    searchFocusPlugin,
    expandActivePlugin,
  ],

  // Plugin: @spotinst/help
  // ---------------------------------------------------------------------------
  editOnGitHub: {
    base: "https://github.com/spotinst/help/edit/master/src/docs",
  },

  // Plugin: @imyelo/docsify-pagination
  // ---------------------------------------------------------------------------
  pagination: {
    crossChapter: true,
    crossChapterText: false,
  },

  // Plugin: @lyingdragon/docsify-plugin-page-toc
  // ---------------------------------------------------------------------------
  toc: {
    title: "On This Page",
  },

  // Plugin: @jhildenbiddle/docsify-tabs
  // ---------------------------------------------------------------------------
  tabs: {
    persist: true,
    sync: true,
    theme: "material",
    tabComments: true,
    tabHeadings: true,
  },

  // Plugin: @zhengxiangqi/docsify-scroll-to-top
  // ---------------------------------------------------------------------------
  scrollToTop: {
    auto: true,
    text: "↑",
    right: 15,
    bottom: 15,
    offset: 500,
  },
};

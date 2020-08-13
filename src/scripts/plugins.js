import $ from "jquery";
import { collapseChildren, collapseExtendedFamily, resetExtendedFamilyRecursion } from "./sidebar";

/**
 * Sidebar Collapse.
 *
 * Makes all elements of the sidebar that aren't directly around the current
 * node collapse. Leaves only the parent hierarchy leading to the current
 * node and the first-level children of the current node expanded.
 *
 * Invoked each time after the data is fully loaded, no arguments.
 *
 * @param hook
 */
export const sidebarCollapsePlugin = (hook) => {
  hook.doneEach(() => {
    resetExtendedFamilyRecursion();
    const activeEl = $(".sidebar-nav .active");
    collapseChildren(activeEl);
    collapseExtendedFamily(activeEl);
  });
};

/**
 * Overrides the ToC title and adds a scroll listener.
 *
 * Invoked each time after the data is fully loaded, no arguments.
 *
 * @param hook
 * @param vm
 */
export const tocPlugin = (hook, vm) => {
  hook.doneEach(() => {
    const nav = window.Docsify.dom.find(".nav");
    if (nav) {
      // override the toc title
      const title = window.$docsify["toc"].title;
      const titleEl = window.Docsify.dom.find(".page_toc p.title");
      if (titleEl && title) {
        titleEl.innerHTML = title;
      }
    }
  });
};

/**
 * Edit on GitHub.
 *
 * Generates an Edit on GitHub button on every page to allow users to click on
 * the button to open corresponding Markdown editing page on GitHub.
 *
 * Invoked each time before parsing the Markdown file.
 *
 * @param hook
 * @param vm
 */
export const pageEditPlugin = (hook, vm) => {
  hook.beforeEach((content) => {
    return content + "\n\n" + renderPageEdit(vm.route.file);
  });
};

/**
 * Renders a footer element that contains both `Edit on GitHub` link and last
 * updated timestamp of the current file.
 *
 * @param file
 * @returns {string}
 */
const renderPageEdit = (file) => {
  let editLinkEl = renderEditLink(file);
  let lastUpdateEl = renderLastUpdated();
  return `<div class="page-edit">${editLinkEl}${lastUpdateEl}</div>`;
};

/**
 * Renders a div that contains the last updated timestamp of the current file.
 *
 * @returns {string}
 */
const renderLastUpdated = () => {
  return `<div class="last-updated"><span class="prefix">Last Updated: </span><span class="time">{docsify-updated}</span></div>`;
};

/**
 * Renders a footer element that contains both `Edit on GitHub` link.
 *
 * @param file
 * @returns {string}
 */
const renderEditLink = (file) => {
  window.editDocHandler = (event) => {
    const docBase = window.$docsify["editOnGitHub"].base;

    if (docBase && file) {
      const editLink = docBase + file;
      window.open(editLink);
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  return `<div class="edit-link"><a class="github-link" onclick="editDocHandler(event)"><img class="github-icon" src="/_media/images/logos/github.png" /> Edit on GitHub</a></div>`;
};

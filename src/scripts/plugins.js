/**
 * Binds an event handler to the "keydown" JavaScript event.
 * The event handler sets focus on the search input element.
 *
 * Invoked after initial completion.
 *
 * @param hook
 */
export const searchFocusPlugin = (hook) => {
  hook.ready(() => {
    const inputElements = document.querySelectorAll("input[type=search]");
    if (inputElements && inputElements.length) {
      const searchInput = inputElements[0];
      const handleKeyDown = (event) => {
        if (
          event.key === "/" &&
          searchInput.current !== document.activeElement
        ) {
          event.preventDefault();
          searchInput.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
    }
  });
};

/**
 * Overrides the ToC title and adds a scroll listener.
 *
 * Invoked each time after the data is fully loaded.
 *
 * @param hook
 */
export const tocPlugin = (hook) => {
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
 * Replaces all elements that have a data-feather attribute with SVG markup
 * corresponding to the element's data-feather attribute value.
 *
 * Invoked each time after the data is fully loaded.
 *
 * @param hook
 */
export const featherPlugin = (hook) => {
  // eslint-disable-next-line no-undef
  hook.doneEach(feather.replace);
};

/**
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

  return `<div class="edit-link"><a class="github-link" onclick="editDocHandler(event)"><img class="github-icon" src="/_media/images/github.png" /> Edit on GitHub</a></div>`;
};

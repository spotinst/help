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

/**
 * Expands the active element's subtree when `subMaxLevel=1`.
 *
 * Bugfix(Docsify): The `nav` map is populated with high-level links when
 * `subMaxLevel` equals 1, so `li` element becomes undefined as `getNavKey`
 * returns a key that contains both path and id. Therefore, the `active` class
 * is removed from the element and the sidebar remains collapsed.
 *
 * Refs:
 *  - https://github.com/docsifyjs/docsify/blob/v4.11.6/src/core/event/index.js#L15-L18
 *  - https://github.com/docsifyjs/docsify/blob/v4.11.6/src/core/event/scroll.js#L92
 *  - https://github.com/docsifyjs/docsify/blob/v4.11.6/src/core/event/scroll.js#L152
 *
 * Invoked each time after the data is fully loaded.
 *
 * @param hook
 * @param vm
 */
export const expandActivePlugin = (hook, vm) => {
  hook.doneEach(() => {
    const path = vm.route.path;
    const id = vm.route.query.id;
    if (!id) return;

    const { topMargin } = vm.config;
    const section = document.querySelector("#" + id);
    section && scrollTo(section, topMargin);

    const nav = getSidebarLeaves(vm.router);
    const { subMaxLevel } = vm.config;
    const li = subMaxLevel === 1 ? nav[path] : nav[getNavKey(path, id)];
    const sidebar = document.querySelector(".sidebar");
    const active = sidebar.querySelector("li.active");
    active && active.classList.remove("active");
    li && li.classList.add("active");

    expandActive(li);
    setTimeout(() => {
      li.classList.remove("collapse");
    }, 0);
  });
};

/**
 * Expands the active element's subtree.
 *
 * @param node
 */
const expandActive = (node) => {
  if (node) {
    node.classList.add("open", "active");
    while (node && node.className !== "sidebar-nav" && node.parentNode) {
      if (node.parentNode.tagName === "LI") {
        node.parentNode.classList.add("open");
      }
      node = node.parentNode;
    }
  }
};

/**
 * Extracts all links from the sidebar.
 *
 * @param router
 * @returns {{}}
 */
const getSidebarLeaves = (router) => {
  const nav = {};
  const sidebar = find(".sidebar");
  let lis = [];
  if (sidebar !== null && sidebar !== undefined) {
    lis = findAll(sidebar, "li");
  }

  for (let i = 0, len = lis.length; i < len; i += 1) {
    const li = lis[i];
    const a = li.querySelector("a");
    if (!a) {
      continue;
    }

    let href = a.getAttribute("href");
    if (href !== "/") {
      const {
        query: { id },
        path,
      } = router.parse(href);
      if (id) {
        href = getNavKey(path, id);
      }
    }

    if (href) {
      nav[decodeURIComponent(href)] = li;
    }
  }

  return nav;
};

/**
 * Finds an element.
 *
 * @param el
 * @param node
 * @returns {*}
 */
const find = (el, node) =>
  node ? el.querySelector(node) : document.querySelector(el);

/**
 * Finds all elements.
 *
 * @param el
 * @param node
 * @returns {*[]}
 */
const findAll = (el, node) =>
  [].slice.call(
    node ? el.querySelectorAll(node) : document.querySelectorAll(el)
  );

/**
 * Returns a unique key by concatenating the path and the id.
 *
 * @param path
 * @param id
 * @returns {string}
 */
const getNavKey = (path, id) => `${path}?id=${id}`;

import $ from "jquery";

/**
 * Borrowed from Veritone Docs.
 *
 * Ref: https://github.com/veritone/docs/blob/master/src/scripts/sidebarHelper.js.
 * Copyright 2017, Veritone Inc., licensed under the Apache-2.0 License
 */

let RECURSION_LIMIT = 50;
let collapseNavElRecursion = 0;
let collapseExtendedFamilyRecursion = 0;

export function resetExtendedFamilyRecursion() {
  collapseExtendedFamilyRecursion = 0;
}

export function collapseChildren(el) {
  el = getSidebarNode(el);
  let subNavEls = getChildren(el);
  for (let i = 0; i < subNavEls.length; i++) {
    collapseNavEl($(subNavEls[i]));
  }
}

/**
 * Collapses all sidebar elements that are cousins (1st, 2nd, whatever) of the
 * element.
 *
 * @param el
 */
export function collapseExtendedFamily(el) {
  el = getSidebarNode(el);
  collapseExtendedFamilyRecursion++;
  if (collapseExtendedFamilyRecursion > RECURSION_LIMIT) {
    console.error("collapseExtendedFamily recursion limit reached!");
    return;
  }
  let siblings = el.siblings();
  for (let i = 0; i < siblings.length; i++) {
    let sibling = $(siblings[i]);
    collapseNavElRecursion = 0;
    collapseNavEl(sibling);
  }
  let parentEl = getParentLi(el);
  if (parentEl && !parentEl.hasClass("sidebar-nav")) {
    collapseExtendedFamily(parentEl);
  }

  // TODO: It's currently recursing out of .sidebar-nav.  We should stop that once it gets to that point.

  /**
   * Gets the parent li of the current node
   */
  function getParentLi(el) {
    // get first li
    let getLiRecursion = 0;
    let li = getLi(el);

    if (!li) {
      return null;
    }

    // get second li
    getLiRecursion = 0;
    return getLi(li.parent());

    /**
     * Gets the first li element above (or including) the one given.
     *
     * @param el DOM element
     * @return {*} parent li jQuery element or null if it does not exist
     */
    function getLi(el) {
      getLiRecursion++;
      if (getLiRecursion > RECURSION_LIMIT) {
        console.error("getLi recursion limit reached!");
      }
      el = $(el);
      if (el[0] && el[0].tagName && el[0].tagName.toLowerCase() === "li") {
        return el;
      } else if (el.parent().length) {
        return getLi(el.parent());
      } else {
        return null;
      }
    }
  }
}

/**
 * Collapses the first level of the nav el that has links
 * Prevents us from collapsing a nav el that can't be expanded
 * @param el
 */
function collapseNavEl(el) {
  collapseNavElRecursion++;
  if (collapseNavElRecursion > RECURSION_LIMIT) {
    console.error("collapseNavEl recursion limit reached!");
    return;
  }
  if (el.children().length === 0) {
    // No children. Don't try to collapse.
  } else if (el.children()[0].tagName.toLowerCase() === "a") {
    // Non-top-level link.  Collapse it.
    el.addClass("collapse");
  } else if (
    el.children()[0].tagName.toLowerCase() === "p" &&
    $(el.children()[0]).children().length > 0 &&
    $(el.children()[0]).children()[0].tagName.toLowerCase() === "a"
  ) {
    // Top-level link.  Collapse it.
    el.addClass("collapse");
  } else if (el.find("ul a").length) {
    // It's not a link but there's one in its children somewhere.  Go find it.
    collapseChildren(el);
  }
}

/**
 * @todo: Kinda poorly assumes el.children[1] is ul
 **/
function getChildren(el) {
  return $(el.children()[1]).children();
}

/**
 * Returns the correct sidebar element to collapse based of the top level of
 * the sidebar only sets .active on a child <p> so we need to go up to.
 * @param el
 */
function getSidebarNode(el) {
  if (el[0] && el[0].tagName.toLowerCase() === "p" && el.hasClass("active")) {
    return el.parent();
  }
  return el;
}

/**
 * Iterates over an object and calls the callback with the key and value
 * If the callback returns a truthy value, the iteration will be stopped.
 *
 * @param obj An object to iterate over
 * @param callback Callback function that accepts the key as the first parameter
 * and the value as the second
 */
export function iterateObject(obj, callback) {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let stop = callback(key, obj[key]);
      if (stop) {
        break;
      }
    }
  }
}

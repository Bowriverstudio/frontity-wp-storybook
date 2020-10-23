import React from "react";
import PropTypes from "prop-types";
import { connect } from "frontity";

/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const Link = ({
  state,
  actions,
  link,
  className,
  children,
  "aria-current": ariaCurrent
}) => {
  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith("http")) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  /**
   * Frontity state: https://docs.frontity.org/learning-frontity/state
   * The `state` props are provided by the global context, when we wrap this component in `connect(...)`
   */
  state: PropTypes.object,

  /**
   * Frontity injected actions: https://docs.frontity.org/learning-frontity/actions
   * The `actions` props are provided by the global context, when we wrap this component in `connect(...)`
   */
  actions: PropTypes.object,

  link: PropTypes.string
};

export default connect(Link);

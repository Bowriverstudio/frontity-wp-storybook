export default {
  frontity: {
    url: "https://frontity.com",
    title: "Test Frontity Blog",
    description: "WordPress installation for Frontity development",
  },
  theme: {
    menu: [
      ["About Us", "/about-us/"],
      ["Blog", "/blog/"],
      ["Contact", "/contact-us/"],
    ],
    featured: { showOnList: true, showOnPost: true },
    isMobileMenuOpen: false,
  },
  source: { api: "https://test.frontity.io/wp-json" },
};

const config = {
  siteTitle: "World Listing", // Site title.
  siteTitleShort: "Countries List", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Countries List", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://thedigitalapps.com/world-countries-listing/", // Domain of your website without pathPrefix.
  pathPrefix: "/world-countries-listing/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "counties list to be displayed with sort name", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Raghvendra Singh", // Username to display in the author segment.
  userEmail: "raghvendra.apiit@gmail.com", // Email used for RSS feed's author segment
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  faviconURL:
    "https://uploads-ssl.webflow.com/604880fe870b5a8644def44c/608f586876e90e20493222df_favicon.ico",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  copyright: "Copyright © 2021", // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

import React from "react";
import { node } from "prop-types";
import Helmet from "react-helmet";
import config from "../../../config/SiteConfig";
import Header from "../Header/header"
import Footer from "../Footer/Footer"
import { makeStyles } from "@material-ui/core/styles";

// styles
export const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin:0,
    padding:0
  }
});
const useStyles = makeStyles(styles);
const Layout = ({ children, customTitle }) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Helmet
        title={(customTitle ? customTitle : "World Countries Listing") + " | " + config.siteTitle}
      >
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link rel="icon" href={config.faviconURL} type="image/icon type" />
      </Helmet>
      <Header/>
      {children}
      <Footer/>
    </div>
);
}
Layout.propTypes = {
  children: node.isRequired,
};
export default Layout;

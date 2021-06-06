import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// styles
export const styles = () => ({
  title: {
  margin: "auto",
  },
  footer: {
    display:"flex",
    width:"100%",
    position:"fixed",
    bottom:0,
    background: "#5967d8",
    height: "50px",
    color: "#ffffff",
  },
});
const useStyles = makeStyles(styles);
const Layout = () => {
  const classes = useStyles();
  return(
      <footer className={classes.footer}>
        <Typography variant="h8" className={classes.title}>
            Copyright @2021
        </Typography>
      </footer>
);
}

export default Layout;

import React  from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from '@material-ui/icons/Public';
// styles
export const styles = () => ({
  header:{
    display: "flex",
    background: "#5967d8",
    height: "50px",
    alignItems: "center",
    justifyContent: "start",
    color: "#ffffff",
    textAlign:"left",
    paddingLeft:"10px"
  },
  logo:{
    width:"30px",
    height:"30px",
    padding:"5px"
  },
});
const useStyles = makeStyles(styles);
const Header = () => {
  const classes = useStyles();
  return(
      <header className={classes.header}>
      <PublicIcon className={classes.logo}/>
        <Typography variant="h6" >
            Country State City
          </Typography>
      </header>
);
}
export default Header;

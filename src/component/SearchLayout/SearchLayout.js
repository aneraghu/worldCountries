import React, { Fragment } from "react";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfoIcon from '@material-ui/icons/Info';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// styles
export const styles = () => ({
  country: {
    width:"100%",
    maxWidth:"400px",
    height:"90vh",
    border:"1px solid #f0f2f3",
    margin:"20px",
    padding:"10px"
  },
  countrieslist:{
    overflow:"auto",
    width:"100%",
    height:"75vh"
  },
  headertext:{
      padding:"8px 0",
      margin:"auto",
      borderBottom:"1px solid #f0f2f3",
      textAlign:"center"
  },
  title: {
  margin: "auto",
  },
  searchform:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderBottom:"1px solid #f0f2f3",
    padding:"8px 0",
    width:"100%"
  },
  countries:{
    display:"flex",
    alignItems:"center",
    justifyContent: "space-between",
    borderBottom:"1px solid #f0f2f3",
    padding:"8px 0",
    width:"100%"
  },
  item:{
  margin:"0 2px",
  color:"#343434"
},
  iso2:{
  background:"#edf2f6",
  padding:"2px 10px",
  borderRadius:"5px",
  color:"#5d6977"
},
info:{
   display:"block",
   float:"left",
   color:"#3082ce",
   fontSize:"2rem",
   cursor:"pointer",

},
next:{
  display:"block",
  float:"left",
  width:"1em",
  height:"1em",
  color:"#ffffff",
  borderRadius:"50%",
  background:"#d6418c",
  fontSize:"1.5rem",
  cursor:"pointer",
  "&:hover": {
      background: "#f773b5"
    },
},
iconholder:{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
},
loading:{
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}
});
const useStyles = makeStyles(styles);
const SearchLayout = (props) => {
  const {subtitle,placeholder,id,displayText,data,arrowBtn, setSelected, loading, setSearchData}=props
  const classes = useStyles();
  const makeSelection=(id)=>{
      setSelected(id)
  }
const handleChange=(e)=>{
  setSearchData(e.target.value)
}
  return(
    <Fragment>
        <section className={classes.country}>
          <div className={classes.headertext}>
            <Typography variant="subtitle2" >
              {subtitle}
            </Typography>
          </div>
            <form className={classes.searchform}>
              <input
                type="search"
                placeholder={placeholder}
                name={id}
                onChange={handleChange}
              />
            </form>
              <div className={classes.countrieslist}>
                { (Array.isArray(data) && data.length) ?(
                  data?.map((each, i) => (
                    <div className={classes.countries} key={i}>
                      <div>
                        <span className={classes.item}>{each.emoji}</span>
                        <span className={classes.item}>{each?.name}</span>
                        { arrowBtn?
                        <span className={`${classes.item} ${classes.iso2}`}>{each?.iso2 || each?.state_code}</span>
                        :null
                      }
                      </div>
                      <div className={classes.iconholder}>
                        <span className={`${classes.item} ${classes.info}`}><InfoIcon/></span>
                        { arrowBtn?
                          <span className={`${classes.item} ${classes.next}`} onClick={()=>makeSelection(each?.id)} onKeyDown={()=>makeSelection(each?.id)}><ArrowForwardOutlinedIcon /></span>
                          :null
                        }
                      </div>
                    </div>
                )
              )
            )
            :
              <div className={classes.headertext}>{ displayText || "Please select" }</div>
            }
            {loading?
              <div className={classes.loading}><CircularProgress /></div>:null
            }
            </div>
        </section>
    </Fragment>
);
}

export default SearchLayout;

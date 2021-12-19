import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import GoogleTranslate from "../../../logo/searchPage/google-translate.png";
import GoogleCalendar from "../../../logo/searchPage/google-calendar.png";
import GoogleDrive from "../../../logo/searchPage/google-drive.png";
import Googlemaps from "../../../logo/searchPage/google-maps.png";
import GooglePhotos from "../../../logo/searchPage/google-photos.png";
import GoogleNews from "../../../logo/searchPage/google-news.png";
import GoogleIcons from "../../../logo/searchPage/google-icons.png";

//assets

import GoogleDocs from "../../../logo/searchPage/google-docs.png";
import GoogleClassroom from "../../../logo/searchPage/google-classroom.png";
import GoogleEarth from "../../../logo/searchPage/google-earth.png";
import GoogleForms from "../../../logo/searchPage/google-forms.png";
import GoogleJamboard from "../../../logo/searchPage/google-jamboard.png";
import GoogleSheets from "../../../logo/searchPage/google-sheets.png";
import GoogleSlide from "../../../logo/searchPage/google-slide.png";
import GoogleTravel from "../../../logo/searchPage/google-travel.png";

import Youtube from "../../../logo/searchPage/youtube.png";
import { makeStyles } from "@mui/styles";

const Icon1: string[] = [
  GoogleIcons,
  Googlemaps,
  Youtube,
  GoogleNews,
  GoogleDrive,
  GoogleCalendar,
  GoogleTranslate,
  GooglePhotos,
];

const Icon2: string[] = [
  GoogleForms,
  GoogleDocs,
  GoogleSheets,
  GoogleSlide,
  GoogleJamboard,
  GoogleClassroom,
  GoogleEarth,
  GoogleTravel,
];

const Title1: string[] = [
  "Search",
  "map",
  "Youtube",
  "News",
  "Drive",
  "Calendar",
  "Translate",
  "Photos",
];
const Title2: string[] = [
  "Form",
  "Docs",
  "Sheets",
  "Slide",
  "Jamboard",
  "Classroom",
  "Earth",
  "Travel",
];

const Icon1Link: string[] = [
  "https://www.google.co.th/",
  "https://www.google.co.th/maps/",
  "https://www.youtube.com/",
  "https://news.google.com/",
  "https://drive.google.com/",
  "https://calendar.google.com/",
  "https://translate.google.co.th/",
  "https://photos.google.com/",
];
const Icon2Link: string[] = [
  "https://docs.google.com/forms",
  "https://docs.google.com/document",
  "https://docs.google.com/spreadsheets",
  "https://docs.google.com/presentation",
  "https://jamboard.google.com/",
  "https://classroom.google.com/",
  "https://earth.google.com/",
  "https://www.google.com/travel/",
];

const useStyles = makeStyles({
  root: {
    height: 500,
    width: 300,
    overflow: "auto",
  },
  firstChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textDecoration: "none",
    color: "black",
    height: 90,

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});

const GoogleAppItem: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container sx={{ p: 2 }}>
        {Icon1.map((item, index) => {
          return (
            <Grid item md={4} sm={4} xs={4} key={index}>
              <Box
                className={classes.firstChild}
                component="a"
                href={Icon1Link[index]}
              >
                <img src={item} width="40" height="40" alt={item} />
                <Typography variant="body2" sx={{ mt: 1.2 }}>
                  {Title1[index]}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider sx={{ width: 250 }} />
      </Box>
      <Grid container sx={{ p: 2 }}>
        {Icon2.map((item, index) => {
          return (
            <Grid item md={4} sm={4} xs={4} key={index}>
              <Box
                className={classes.firstChild}
                component="a"
                href={Icon2Link[index]}
              >
                <img src={item} width="40" height="40" alt={item} />
                <Typography variant="body2" sx={{ mt: 1.2 }}>
                  {Title2[index]}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GoogleAppItem;

import "./App.css";
import { Container } from "@mui/system";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  return (
    <Box py={4} px={2}>
      <Container>
        <Card variant="outlined">
          <CardContent>
            <Grid
              container
              xs={12}
              sx={{
                color: "gray",
                padding: "8px",
                backgroundColor: "",
                borderRadius: "10px",
              }}
              spacing={3}
            >
              <Grid item xs={12}>
                <Grid container justifyContent="space-around">
                  <Grid item xs="auto" md="auto" className="avt">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/314616594_831010858047991_1761606060764111895_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ZDoTEG-UANIAX-CwnAL&_nc_ht=scontent.fsgn2-1.fna&oh=03_AdRRRTfqJU4bEt_7_RvCJ3ThiXiXaTa_QD1wfBOpinDrpw&oe=63ADCAD1"
                      sx={{
                        color: "gray",
                        width: 200,
                        height: 200,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md="auto" className="name">
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "100px",
                        fontFamily: "Fantasy",
                      }}
                    >
                      HUY DANG
                    </Typography>
                    <Typography
                      sx={{
                        color: "gray",
                        fontFamily: "serif",
                        fontSize: "30px",
                      }}
                    >
                      W E B &ensp; D E V E L O P E R
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6} classname="Profile">
                <Typography
                  sx={{ color: "gray", fontSize: "40px", fontFamily: "serif" }}
                >
                  <AccountCircleIcon sx={{ color: "gray", fontSize: "30px" }} />
                  &ensp;Profile <hr />
                </Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "serif" }}>
                  I am a qualified and professional web developer with six
                  months of experience in website design and development
                  software. Strong creative and analytical skills .<br /> You
                  can call me is a UI Developer, I can design and develop
                  functions following requirements.
                </Typography>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CallIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Phone Number"
                      secondary="0986-216-716"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FacebookIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Social Media"
                      secondary="github.com/HUYDANGQUANG"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Email"
                      secondary="huydangit1604@gmail.com"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <HomeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Address"
                      secondary="Go Vap District , Ho Chi Minh City"
                    />
                  </ListItem>
                </List>
              </Grid>

              <Grid item xs={12} md={6} classname="Education">
                <Typography
                  sx={{ color: "gray", fontSize: "40px", fontFamily: "serif" }}
                >
                  <SchoolIcon sx={{ color: "gray", fontSize: "30px" }} />
                  &ensp;Education
                  <hr />
                </Typography>
                <h3>STUDENT</h3>
                <Typography
                  sx={{ color: "gray", fontSize: "20px", fontFamily: "serif" }}
                >
                  Phan Boi Chau High School / 2016-2018
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      i learn soft skills and logical thinking
                    </Typography>
                  </li>
                </ul>
                <h3> Software Engineer</h3>
                <Typography
                  sx={{ color: "gray", fontSize: "20px", fontFamily: "serif" }}
                >
                  Van Lang University / 2018-2022
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      I learn 'What 's website?'
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      I learn 'How to development a website?'
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Draw follow of system by wireframe and design UI/UX by
                      Figma.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Make UI/UX by HTML/CSS connect with Material-UI Framework.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Handle function of website by Javascript.
                    </Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12} md={6} classname="Technical Skills">
                <Typography
                  sx={{ color: "gray", fontSize: "40px", fontFamily: "serif" }}
                >
                  <LanguageIcon sx={{ color: "gray", fontSize: "30px" }} />
                  &ensp;Technical Skills
                  <hr />
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      HTML/CSS
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                        sx={{ color: "gray", paddingLeft: "25px" }}
                      />
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Javascripts
                      <Rating
                        name="size-small"
                        defaultValue={4}
                        size="small"
                        readOnly
                        sx={{ color: "gray", paddingLeft: "35px" }}
                      />
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      ReactJS
                      <Rating
                        name="size-small"
                        defaultValue={3}
                        size="small"
                        readOnly
                        sx={{ color: "gray", paddingLeft: "59px" }}
                      />
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Material-UI
                      <Rating
                        name="size-small"
                        defaultValue={2}
                        size="small"
                        readOnly
                        sx={{ color: "gray", paddingLeft: "27px" }}
                      />
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Figma
                      <Rating
                        name="size-small"
                        defaultValue={2}
                        size="small"
                        readOnly
                        sx={{ color: "gray", paddingLeft: "73px" }}
                      />
                    </Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12} md={6} classname="Skills">
                <Typography
                  sx={{ color: "gray", fontSize: "40px", fontFamily: "serif" }}
                >
                  <WorkIcon sx={{ color: "gray", fontSize: "30px" }} />
                  &ensp;Work Experience
                  <hr />
                </Typography>
                <h3>Front-END Intern</h3>
                <Typography
                  sx={{ color: "gray", fontSize: "20px", fontFamily: "serif" }}
                >
                  Tradeline Company (2021)
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Support to design Client website and CMS website. (Figma)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Development UI website. (ReactJS, HTML, CSS)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Handle function and render data. (Javascript, Redux-saga)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        fontFamily: "serif",
                      }}
                    >
                      Test follow and function of the system. (Manual Testing)
                    </Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12} md={6} classname="Work Experience">
                <Typography
                  sx={{ color: "gray", fontSize: "40px", fontFamily: "serif" }}
                >
                  <SettingsIcon sx={{ color: "gray", fontSize: "30px" }} />
                  &ensp;Skills
                  <hr />
                </Typography>
                <ul>
                  <li>
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "20px",
                          fontFamily: "serif",
                          width: '125px'
                        }}
                      >
                        Professional
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "grey",
                          width: "115px",
                          height: "10px",
                          marginLeft: "20px",
                        }}
                      ></Box>
                    </Box>
                  </li>
                  <li>
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "20px",
                          fontFamily: "serif",
                          width: '125px'
                        }}
                      >
                        TeamWork
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "grey",
                          width: "200px",
                          height: "10px",
                          marginLeft: "20px",
                        }}
                      ></Box>
                    </Box>
                  </li>
                  <li>
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "20px",
                          fontFamily: "serif",
                          width: '125px'
                        }}
                      >
                        Flexibility
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "grey",
                          width: "160px",
                          height: "10px",
                          marginLeft: "20px",
                        }}
                      ></Box>
                    </Box>
                  </li>
                  <li>
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "20px",
                          fontFamily: "serif",
                          width: '125px'
                        }}
                      >
                        Creativity
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "grey",
                          width: "130px",
                          height: "10px",
                          marginLeft: "20px",
                        }}
                      ></Box>
                    </Box>
                  </li>
                  <li>
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "20px",
                          fontFamily: "serif",
                          width: '125px'
                        }}
                      >
                        Management
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "grey",
                          width: "120px",
                          height: "10px",
                          marginLeft: "20px",
                        }}
                      ></Box>
                    </Box>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;

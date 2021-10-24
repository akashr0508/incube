import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Container,
  Row,
  Col,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./components/BigStat/styles";

import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
// import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'

// components
import mock from "./mock";
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography } from "../../components/Wrappers/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Tables from "../../pages/tables";
import BigStat from "./components/BigStat/BigStat";


export default function StartupHub(props) {
  var classes = useStyles();
  var theme = useTheme();


  return (
    <>
      <PageTitle title="Startup Hub"  />
      <Grid container spacing={4}>
      
        <Timeline minEvents={5} placeholder>
  <TimelineEvent
  color='#87a2c7'
    // icon={FaRegFileAlt}
    title='Concept/Research'
    subtitle='26/03/2019 09:51'
  />
  <TimelineEvent
    color='#87a2c7'
    // icon={FaRegCalendarCheck}
    title='Entity Creation'
    subtitle='26/03/2019 09:51'
  />
  <TimelineEvent
    color='#9c2919'
    // icon={FaBug}
    title='Traction'
    subtitle='26/03/2019 09:51'
    // action={{
    //   label: 'Ver detalhes...',
    //   onClick: () => window.alert('Erro!')
    // }}
  />
  <TimelineEvent
  title='Ref'
  />
  <TimelineEvent
  title='Scale'
  />
</Timeline>
        </Grid>
<Container>
<Grid item lg={4} md={8} sm={6} xs={12} >

          <Widget
            title="Market Reasearch"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
            
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
              
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Due Date: October 2021
                </Typography> 
               
              </div>
              <div className={classes.legendElement}>
               
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Akash R
                </Typography>
              </div>
            </div>
            <div >
          
            </div>
            <div>
            <Button style={{backgroundColor:'#2ED47A', color:'#FFFFFF'}} >Activate</Button>
            </div>
          </Widget>
          {/* <div></div> */}
          <div >
          <Widget
            title="Product Reasearch"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
              
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Due Date: October 2021
                </Typography> 
               
              </div>
              <div className={classes.legendElement}>
               
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Chandrashekar
                </Typography>
              </div>
            </div>
            <div >
          
            </div>
            <div>
            <Button style={{backgroundColor:'#F7685B', color:'#FFFFFF'}} >Ended</Button>
            </div>
          </Widget>
          </div>
          <div >
          <Widget
            title="Entity Creation"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
              
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Due Date: October 2021
                </Typography> 
               
              </div>
              <div className={classes.legendElement}>
               
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Raghu Upadhaya
                </Typography>
              </div>
            </div>
            <div >
          
            </div>
            <div>
            <Button style={{backgroundColor:'#2ED47A', color:'#FFFFFF'}} >Activate</Button>
            </div>
          </Widget>
          </div>
        </Grid>
</Container>

    </>
  );
}


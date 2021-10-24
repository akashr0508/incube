import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  DeviceHub as StartupHubIcon,
  Assessment as AssessmentIcon,
  Gavel as LegalIcon,
  GroupAdd as SocialMediaIcon,
  AttachMoney as SeedInvestorsIcon,
  BusinessCenter as VCIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  DeveloperMode as FreelancerIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/startuphub", icon: <StartupHubIcon /> },
  {
    id: 1,
    label: "Ideation",
    link: "/app/ideation", 
    icon: <FreelancerIcon />,
    children:[
      {label: "Active", link: "/app/ideation", },
      {label: "Completed", link: "/app/ideation", },
      {label: "Ended", link: "/app/ideation", }
    ]
  },
  { 
    id: 2,
    label: "Collaborate", 
    link: "/app/collaborate", 
    icon: <AssessmentIcon /> },
  {
    id: 3,
    label: "Chat",
    link: "/app/notifications",
    icon: <LegalIcon />,
  },
  {
    id: 4,
    label: "Social Media",
    link: "/app/ui",
    icon: <SocialMediaIcon />,
    // children: [
    //   { label: "Icons", link: "/app/ui/icons" },
    //   { label: "Charts", link: "/app/ui/charts" },
    //   { label: "Maps", link: "/app/ui/maps" },
    // ],
  },
  {
    id: 5,
    label: "Investors",
    //link: "/app/notifications",
    icon: <VCIcon />,
  },
  {
    id: 6,
    label: "Deals",
    //link: "/app/notifications",
    icon: <SeedInvestorsIcon />,
    children:[
      {label: "Low", link: "/app/ideation", },
      {label: "High", link: "/app/ideation", },
      {label: "Urgent", link: "/app/ideation", }
    ]
  },
  { id: 8, type: "divider" },
  { id: 9, label: "Settings" },
  // { id: 10, label: "Library", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  // { id: 11, label: "Support", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  // { id: 12, label: "FAQ", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  // { id: 10, type: "divider" },
  // { id: 11, type: "title", label: "PROJECTS" },
  // {
  //   id: 12,
  //   label: "My recent",
  //   link: "",
  //   icon: <Dot size="small" color="warning" />,
  // },
  // {
  //   id: 13,
  //   label: "Starred",
  //   link: "",
  //   icon: <Dot size="small" color="primary" />,
  // },
  // {
  //   id: 14,
  //   label: "Background",
  //   link: "",
  //   icon: <Dot size="small" color="secondary" />,
  // },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);

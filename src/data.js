import {
  BubbleChart,
  DynamicFeed,
  GridView,
  PlaylistAddCheckCircle,
  School,
  WorkHistory,
} from "@mui/icons-material";

export const sideBarMenu = [
  {
    text: "Home",
    icon: <GridView className="link-icon" />,
    url: "/",
  },
  {
    text: "About",
    icon: <PlaylistAddCheckCircle className="link-icon" />,
    url: "/about",
  },
  {
    text: "Projects",
    icon: <WorkHistory className="link-icon" />,
    url: "/project",
  },
  {
    text: "Experience",
    icon: <School className="link-icon" />,
    url: "/blog",
  },
  {
    text: "Works",
    icon: <DynamicFeed className="link-icon" />,
    url: "/contact",
  },
  {
    text: "Contact",
    icon: <BubbleChart className="link-icon" />,
    url: "/tutorial",
  },
];

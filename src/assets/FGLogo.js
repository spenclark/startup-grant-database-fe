import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

const useLogoStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
  },
  siteMap: {
    justifyContent: "center",
  },
  title: {
    textAlign: "left",
    marginLeft: theme.spacing(3),
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
  },
  beta: {
    marginLeft: "4px",
    color: "#3DB8B3",
  },
}));

const FGLogo = ({ siteMap }) => {
  const { isAdmin } = useSelector((state) => state.admin);
  const classes = useLogoStyles();
  return (
    <div className={clsx(classes.logo, siteMap && classes.siteMap)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        fill="none"
        viewBox="0 0 46 46"
      >
        <path
          fill="#3CBBB1"
          d="M2.875 11.02a9.583 9.583 0 0 1 19.167 0v9.584h-9.584a9.583 9.583 0 0 1-9.583-9.583z"
          filter="url(#a)"
        />
        <path
          fill="#3CBBB1"
          d="M43.125 11.02a9.583 9.583 0 0 0-19.167 0v9.584h9.584a9.583 9.583 0 0 0 9.583-9.583z"
          filter="url(#b)"
          opacity=".8"
        />
        <path
          fill="#F1603A"
          d="M2.875 32.104a9.583 9.583 0 0 0 19.167 0v-9.583h-9.584a9.583 9.583 0 0 0-9.583 9.583z"
          filter="url(#c)"
          opacity=".8"
        />
        <path
          fill="#3CBBB1"
          d="M43.125 32.104a9.583 9.583 0 0 1-19.167 0v-9.583h9.584a9.583 9.583 0 0 1 9.583 9.583z"
          filter="url(#d)"
          opacity=".6"
        />
        <defs>
          <filter
            id="a"
            width="24.917"
            height="24.917"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1.429" />
            <feGaussianBlur stdDeviation="1.429" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="b"
            width="24.917"
            height="24.917"
            x="21.083"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1.429" />
            <feGaussianBlur stdDeviation="1.429" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="c"
            width="24.917"
            height="24.917"
            x="0"
            y="21.083"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1.429" />
            <feGaussianBlur stdDeviation="1.429" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="d"
            width="24.917"
            height="24.917"
            x="21.083"
            y="21.083"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1.429" />
            <feGaussianBlur stdDeviation="1.429" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <Typography
        variant={siteMap ? "subtitle2" : "h4"}
        className={
          siteMap ? clsx(classes.logo, classes.siteMap) : classes.title
        }
      >
        {!isAdmin ? "Founder Grants" : "Founder Grants Admin"}
      </Typography>
      <Typography class={classes.beta}>beta</Typography>
    </div>
  );
};

export default FGLogo;

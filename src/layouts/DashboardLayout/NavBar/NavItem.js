import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, Collapse, ListItem } from "@mui/material";
import { MdExpandLess as  ExpandLessIcon} from "react-icons/md";
import { MdExpandMore as ExpandMoreIcon} from "react-icons/md";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const styles = {
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    // color: "#000000",
    // color: theme.palette.text.primary,
    padding: "10px 24px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  buttonLeaf: {
    // color: theme.palette.text.primary,
    // padding: "17px 8px",
    color: '#FFFFFF',
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    borderLeft: "solid 8px transparent",
    borderRadius: 0,
    fontSize: "13px",
    "& .MuiButton-label": {
      padding: "10px",
    },
    "&:hover": {
      "& .MuiButton-label": {
        color: "#2FF3FF !important",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "10px",
        borderRadius: "9px",
        // fontWeight: theme.typography.fontWeightRegular,
        "& $title": {
          // fontWeight: theme.typography.fontWeightMedium,
          // color: `${theme.palette.text.primary} !important`,
        },
        "& $icon": {
          color: "#2FF3FF !important",
          // color: "00e0b0",
        },
      },
    },
    "&.depth-0": {
      "& $title": {
        // fontWeight: theme.typography.fontWeightMedium,
        // color: `${theme.palette.text.primary} !important`,
      },
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    // marginRight: theme.spacing(3),
    // marginLeft: theme.spacing(1),
    color: `#fff !important`,
  },
  title: {
    marginRight: "auto",
  },
  active: {
    "& .MuiButton-label": {
      color: "#2FF3FF",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "10px",
      paddingRight: "120px",
      borderRadius: "9px",
      // fontWeight: theme.typography.fontWeightRegular,
      "& $title": {
        // fontWeight: theme.typography.fontWeightMedium,
      },
      "& $icon": {
        color: "#2FF3FF !important",
        // color: `${theme.palette.text.primary} !important`,
      },
    },
  },
};

const NavItem = ({
  children,
  sx,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  ...rest
}) => {
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        sx={clsx(styles.item, sx)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          sx={styles.button}
          onClick={handleToggle}
        >
          {Icon && <Icon sx={styles.icon} size="20" />}
          <span sx={styles.title}>{title}</span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      sx={clsx(styles.itemLeaf, sx)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        activesx={styles.active}
        sx={clsx(styles.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && <Icon sx={styles.icon} size="20" />}
        <span sx={styles.title}>{title}</span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;

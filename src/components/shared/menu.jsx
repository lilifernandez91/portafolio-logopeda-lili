import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { navigationItems } from "@/routes/navigation-items";
import { Fragment } from "react";
import Link from "next/link";
import AvatarComponent from "../components/avatar";

export default function MenuComponent() {
  const [position] = useState("left");
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <Fragment key={position}>
        <MenuIcon
          onClick={() => setOpen(true)}
          className="menu-container__button"
        />
        <SwipeableDrawer
          position={position}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List>
              {navigationItems
                .filter((x) => x.section === 1)
                .map((item, index) => (
                  <Link
                    key={index}
                    href={item.route}
                    className="menu-container__link"
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary={item.text}
                          className="menu-container__link__text"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
            </List>
          </Box>
        </SwipeableDrawer>
      </Fragment>
      <div className="menu-container__avatar">
        <AvatarComponent />
      </div>
    </div>
  );
}

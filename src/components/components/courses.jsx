import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarRateIcon from "@mui/icons-material/StarRate";
import { courses } from "@/data/courses";

const CoursesComponent = () => {
  return (
    <div>
      <h1>Cursos</h1>
      <List aria-label="courses">
        {courses.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarRateIcon style={{ color: "#00AAB3" }} />
              </ListItemIcon>
              <ListItemText primary={item.curso} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CoursesComponent;

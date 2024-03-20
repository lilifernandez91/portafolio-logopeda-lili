import { tratamientos } from "@/data/tratamientos";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarRateIcon from "@mui/icons-material/StarRate";

const TratamientosComponent = () => {
  return (
    <div>
      <h1>Tratamientos</h1>
      <List aria-label="tratamientos">
        {tratamientos.map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarRateIcon style={{ color: "#00AAB3" }} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            {item.pathologies.split(",").map((pathology, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemText inset primary={pathology.trim()} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        ))}
      </List>
    </div>
  );
};

export default TratamientosComponent;

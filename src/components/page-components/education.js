import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const EducationComponent = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>Mis estudios</h1>
      <div>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <Image
                src="/images/imagen-udelar.png"
                alt=""
                width={50}
                height={50}
              />
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Universidad de la República
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Homologación del título de Licenciatura en Fonoaudiología en la
              Facultad de Medicina de Montevideo. Uruguay. Año 2018.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <Image
                src="/images/imagen-universidad.jpeg"
                alt=""
                width={50}
                height={50}
              />
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Universidad de Ciencias Médicas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Licenciatura en Fonoaudiología obtenida en la Universidad de
              Ciencias Médicas de Villa Clara. Cuba. Año 2010-2015.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default EducationComponent;

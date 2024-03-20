import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { experienceItems } from "@/data/experience-items";

const ExperienceComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>Mi experiencia profesional</h1>
      <div>
        <h2>Instituciones</h2>
        <div>
          {experienceItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography
                  className="about-me-container__content__about-me__text"
                  sx={{ color: "text.secondary" }}
                >
                  {item.institucion}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Período: {item.periodo}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>Cargo: {item.cargo}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>Funciones: {item.funciones}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;

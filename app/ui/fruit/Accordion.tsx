import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionFruit({nutrition, origin} : {nutrition:string,origin:string}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Nutrition</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {nutrition}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Origin</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {origin}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

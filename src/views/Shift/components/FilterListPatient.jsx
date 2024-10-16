import { forwardRef, useImperativeHandle, useState } from 'react';
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from '@material-tailwind/react';


function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 48 48"
    >
      <g fill="none" strokeLinejoin="round" strokeWidth={4}>
        <path
          fill="#01CFC9"
          stroke="#000"
          d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
        ></path>
        <path stroke="#fff" strokeLinecap="round" d="M16 24L22 30L34 18"></path>
      </g>
    </svg>
  );
}

const FilterListPatient = forwardRef(({ filterOptions,selectedPatient, setSelectedPatient }, ref) => {
 

  const handleSelectedOption = (patient) => {
    setSelectedPatient(patient);
  };

  useImperativeHandle(ref, () => ({
    setSelectedPatient,
  }));

  const renderListOptions = () => {
   
    return filterOptions.map((patient) => {
      return (
        <List key={`patient-id-${patient.id}`}>
          <ListItem
            ripple={false}
            className="py-1 pr-1 pl-4"
            onClick={() => handleSelectedOption(patient)}
          >
            {patient.nombre} {patient.apellido} {patient.dni}
            <ListItemSuffix>
              {Object.keys(selectedPatient).length &&
              selectedPatient.id === patient.id ? (
                <IconButton variant="text" color="blue-gray">
                  <CheckIcon />
                </IconButton>
              ) : null}
            </ListItemSuffix>
          </ListItem>
        </List>
      );
    });
  };

  return (
    <Card
      className={`w-full max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 max-w-80 mx-auto ${
        !filterOptions.length ? 'boder-none' : 'border-robineggblue border-2'
      } `}
    >
      {Object.keys(selectedPatient).length ? (
        <List key={`patient-id-${selectedPatient.id}`}>
          <ListItem ripple={false} className="py-0 pr-1 pl-4 bg-blue-100">
            {selectedPatient.nombre} {selectedPatient.apellido}{' '}
            {selectedPatient.dni}
            <ListItemSuffix>
              <IconButton variant="text" color="blue-gray">
                <CheckIcon />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
        </List>
      ) : (
        renderListOptions()
      )}
    </Card>
  );
});

export default FilterListPatient;

import React from 'react';
import { TextField, Button } from '@material-ui/core';

interface IGenealogy {
  ancestorID: number;
  ancestorName: string;
  descendantID: number;
  descendantName: string;
}

interface IConstituent {
  name: string;
  genealogy: IGenealogy;
}

export const WorldBuilder: React.FC = () => {
  return (
    <div>
      <form noValidate>
        <TextField name="constituentName" variant="outlined" required id="constituentName" label="Constituent Name" autoFocus />
        <Button variant="contained" color="primary">
          Add Constituent
        </Button>
      </form>
    </div>
  );
};

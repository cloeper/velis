import React from 'react';

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
      <form noValidate></form>
    </div>
  );
};

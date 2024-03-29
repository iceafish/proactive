import { TextareaAutosize } from '@mui/material';
import { FC, useState } from 'react';

interface OutputPanelProps {}

export const OutputPanel: FC<OutputPanelProps> = () => {
  const [] = useState();

  return (
    <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
      style={{ width: 200 }}
    />
  );
};

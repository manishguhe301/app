import React from 'react';
import Button from '@mui/material/Button';

const ViewMoreButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        style={{
          color: '#F48850',
          border: '2px solid #F48850',
          borderRadius: '6px',
          boxShadow: '0px 2px 8px rgba(148, 148, 148, 0.25)',
          padding: '6px 30px',
          fontWeight: 500,
        }}
      >
        View More
      </Button>
    </div>
  );
};

export default ViewMoreButton;

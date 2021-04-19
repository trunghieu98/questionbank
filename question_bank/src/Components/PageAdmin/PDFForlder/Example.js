import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';
import { Default } from './Default';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
        <button onClick={handlePrint}>Print this out!</button>
      <Default />
      <ComponentToPrint ref={componentRef} />
    
    </div>
  );
};
export default Example ;
import React, { useEffect, useRef } from "react";

const RenderCount = () => {
  
  const count = useRef(1);

  useEffect(() => {
    count.current += 1;
  });

  return(
    <div className="renderCount">
      {count.current}
    </div>
  );
};

export default RenderCount;

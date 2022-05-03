import { Popper } from '@material-ui/core';
import React, { useState } from 'react';

import { InfoIcon } from '../../core/data/CustomSvg/CustomSvg';

const Infotooltip = ({message}:{message:any}) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleHover = (event:any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="flex justify-center items-center">
      <InfoIcon onMouseOver={handleHover} onMouseOut={handleHover}></InfoIcon>
      <Popper id="info-tooltip" open={open} anchorEl={anchorEl} placement="bottom"
              className="min-h-max w-fill m-5 p-0 backdrop-blur-xl">
        <div className="rounded-md border-goldsand border-3 w-250 p-20 bg-black backdrop-blur-xl z-20">
          <span className="text-white">{message}</span>
        </div>
      </Popper>
    </div>
  );

}

export default Infotooltip;

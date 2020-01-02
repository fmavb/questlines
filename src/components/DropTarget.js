import React from 'react';
import { useDrop } from 'react-dnd';

export function DropTarget(props) {
  const [collectedProps, drop] = useDrop({accept:"FileBrowser"});

  return <div ref={drop}>Drop Target</div>;
}
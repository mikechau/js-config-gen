import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="H"
    changePositionKey="Q"
  >
    <FilterableLogMonitor />
  </DockMonitor>
);

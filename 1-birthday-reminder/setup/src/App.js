import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
  <main>
    <div className="conatiner">
      <h3>0 birthdays today</h3>
      <List />
    </div>
  </main>
  );
}

export default App;

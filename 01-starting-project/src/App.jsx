import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {


  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'

    console.log(selectedButton);
  }




  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
        
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} >
              Components
           
            </TabButton>
            <TabButton onSelect={() => handleSelect('JSX')} >
            JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect('pROPS')} >
             Props
            </TabButton>
            <TabButton onSelect={() => handleSelect('State')} >
              State
            </TabButton>
           
          </menu>
         dynamic conctent
        </section>
      </main>
    </div>
  );
}

export default App;

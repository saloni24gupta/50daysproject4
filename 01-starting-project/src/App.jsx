import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  let tabContent = 'Please click a button '

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
    console.log(tabContent);
  }
  console.log("app component execution");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
<ul>
  <CoreConcept 
  tittle={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image}
  />

<CoreConcept 
  tittle={CORE_CONCEPTS[1].title}
  description={CORE_CONCEPTS[1].description}
  image={CORE_CONCEPTS[1].image}
  />

<CoreConcept 
  tittle={CORE_CONCEPTS[2].title}
  description={CORE_CONCEPTS[2].description}
  image={CORE_CONCEPTS[2].image}
  />
    <CoreConcept 
  tittle={CORE_CONCEPTS[3].title}
  description={CORE_CONCEPTS[3].description}
  image={CORE_CONCEPTS[3].image}
  />
</ul>
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
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

import React from 'react'
import { CORE_CONCEPTS } from '../data';
import CoreConcepts from './CoreConcepts';

function CoreConceptSection() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return (
            <CoreConcepts
              key={concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default CoreConceptSection
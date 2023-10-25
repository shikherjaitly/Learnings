import React from 'react'

export function MapDemo() {
  const names = ['virat','sachin', 'shumbhman','jadeja'];
    return (
    <div>
        { names.map((data, index) => (
            <h2>Name - { data }</h2>
    
        ))}
    </div>
  );
}


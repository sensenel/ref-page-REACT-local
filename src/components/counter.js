import React, { useState, useEffect } from 'react';

// idee von hier: https://css-tricks.com/using-requestanimationframe-with-react-hooks/ und https://codepen.io/HunorMarton/pen/EqmyMN
// für header.js (verworfen Class/ useEffect Konflikt) https://www.freecodecamp.org/news/pass-data-between-components-in-react/
/**
 * Verworfen: React ist nicht ohne weiteres in der Lage
 * normale Variablen durchzureichen; Problem hier, um als Callback
 * el.value durchzureichen, werden React Hooks benötigt
 * welche aber in Class-Komponents nicht eingesetzt werden können
 * header.js MUSS aber eine Class Komponent sein, weil sonst die Skill-
 * Value Methoden nicht verwendet werden können.
 * Bis auf weiteres wird der Wert statisch belassen weil ein überhand 
 * nehmendes, rekursives AbstraktionsKonstrukt durch noch mehr Components
 * kein Sinn macht. tbc 
 */

const Counter = () => {
    const [count, setCount] = React.useState(0)
    
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();
    
    const animate = time => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        
        // Pass on a function to the setter of the state
        // to make sure we always have the latest state
        setCount(prevCount => (prevCount + deltaTime * 0.05) % 100);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }
    
    React.useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
    
    return <>{Math.round(count)}%</>
  }

export default Counter;
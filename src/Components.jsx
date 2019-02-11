import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <TakesData data={['apple', 'orange']} />,
  document.querySelector('#target7'),
);


// Demonstrate a component that returns null
function ReturnsNull({ name }) {
  return null;
}

// Demonstrate a component that returns empty string
function ReturnsEmptyString({ number }) {
  return number > 10
    ? 'Yay'
    : '';
}

// Demonstrate a component that returns a string
function ReturnsString() {
  return 'Hello World';
}

// Demonstrate a component that returns object
function ReturnGreeting({ person, greet, desiredClass }) {
  // return person; // ERROR ERROR ERROR!!!
  return (
    <div className={desiredClass}>
      {`${greet} ${person.name}!`}
    </div>
  );
}

// Demonstrate a component that returns a single child element,
// with some nested jsx
function ReturnsElement() {
  return (
    <div className='something'>
      <div>
        <ReturnGreeting
          person={{ name: 'Tom' }}
          greet='Howdy'
          desiredClass='kind-greet'
        />
      </div>

      <ReturnGreeting
        person={{ name: 'Luke' }}
        greet='What is up'
        desiredClass='super-kind-greet'
      />

      <footer>
        <ReturnGreeting
          person={{ name: 'Samar' }}
          greet='Hello'
          desiredClass='really-kind-greet'
        />
      </footer>
    </div>
  );
}

// Demonstrate a component that returns an array
function ReturnsArray({ favoriteFood }) {
  return [
    <ReturnGreeting
      person={{ name: 'Samar' }}
      greet='Hello'
      desiredClass='really-kind-greet'
    />,
    <ReturnGreeting
      person={{ name: 'Luke' }}
      greet='Hello'
      desiredClass='really-kind-greet'
    />,
    <div>I love {favoriteFood}</div>,
    'Hello',
  ];
}

// Demonstrate a component that returns multiple children
function ReturnsMultipleChildren() {
  return (
    <>
      <ReturnGreeting
        person={{ name: 'Samar' }}
        greet='Hello'
        desiredClass='really-kind-greet'
      />
      <ReturnGreeting
        person={{ name: 'Luke' }}
        greet='Hello'
        desiredClass='really-kind-greet'
      />
      Wohooooo
    </>
  );
}

// Demonstrate injecting an array through props and  looping through it
function TakesData({ data }) {
  return (
    <>
      {
        data.map(fruit => <span>{fruit}</span>)
      }
    </>
  );
}

// Demonstrate injecting a number through props and using it
function TakesNumber({ data }) {

}

// Build a component that takes a number, and returns an h1
// saying whether you passed an odd or even number.
function EvenOrOdd({ data }) {

}

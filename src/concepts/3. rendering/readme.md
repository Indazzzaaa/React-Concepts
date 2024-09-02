# Rendering

**Component Life-Cycle** : This is terms of the class componenet `which is not recommended in new project to use` . It includes the methods which will trigger at different stages of component life, like juse before component is going to be mounted or when state changes etc.

## **Lists and Keys**

  We have to use list when we need requirement such as  List of comments or List of profile images, where our data will be stored inside JS array and we have to show them.

```javascript
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
const listItems = people.map(person => <li>{person}</li>);
return <ul>{listItems}</ul>;
```

**Note :** Here we will see the warning about each child in list should have a uniquie `key` prop.

**Key** : A `string` or a `number` that uniquely identifies it among other items in that array.

`Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key ` helps React infer what exactly has happened, and make the correct updates to the DOM tree.`

##### Rules of keys

* **Keys must be unique among siblings.** However, it’s okay to use the same keys for JSX nodes in *different* arrays.
* **Keys must not change** or that defeats their purpose! Don’t generate them while rendering.

##### React checks for List Rendering and Re-rendering

* **Same Key** : If an item with the same key exists, React assumes the item is the same and proceeds to check if its properties or children have changed.
* **Different Key** : If the key has changed or is new, React treats it as a new item and decides whether to add or remove it.

## [Render Props](https://www.patterns.dev/react/render-props-pattern)

- In this we pass function with retuns the jsx to be rendered as prop in field called `render`, name is just convention. It's just one of design patterns in react like HOC.

```javascript
function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}
```

## Events

- Events are the actions or occurrences that happen in the application, often initiated by the user. React has efficient way to handle events, which is similar to standard DOM events but follow by synthetic event system to ensure consistency across different browsers.

  1. **Synthetic Event :** React wraps native browser events in its own SyntheticEvent system, ensuring that events behave the same in all browsers.
  2. **Event Handling in React :** react uses camelCase for event handlers instead of lowercase like in  plain HTML and it has conventions like when defining handlers like `handleTypeOfEvent` eg. `handleClick`.

     `<button onClick={handleClick}>`Click me `</button>`
  3. **Common Event Types :** React Supports various event types, such as :

  * **Mouse Events** : `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave`
  * **Keyboard Events** : `onKeyDown`, `onKeyUp`, `onKeyPress`
  * **Form Events** : `onChange`, `onSubmit`, `onFocus`, `onBlur`
  * **Clipboard Events** : `onCopy`, `onPaste`
  * **Touch Events** : `onTouchStart`, `onTouchMove`, `onTouchEnd`

### Handling Event

- Event handlers are typically functions that take an event object as an argument. The event object contains details about the event, such as which element triggered it and information about the user action (like mouse position or keyboard key pressed).

  ```javascript
  function handleClick(event) {
    console.log('Button clicked:', event.target);
  }

  <button onClick={handleClick}>Click me</button>

  ```


### Event Binding in Class Component

- Before understanding event binding we have to understand the role of this in context of function and arrow function. Normal function takes `this` from the scope it's been called from, but arrow function takes the this from the surrounding scope in which it's defined. To fix the normal function we call bind method to give it `this`.

  In class components, you need to ensure that event handlers have the correct `this` context. This can be done in multiple ways, such as binding in the constructor or using arrow functions.

  ```javascript
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log('Button clicked:', this);
    }

    render() {
      return <button onClick={this.handleClick}>Click me</button>;
    }
  }

  ```

  or using arrow functions to avoid manual binding :

  ```javascript
  class MyComponent extends React.Component {
    handleClick = () => {
      console.log('Button clicked:', this);
    };

    render() {
      return <button onClick={this.handleClick}>Click me</button>;
    }
  }

  ```

### Event Propogation

- React events propagate similarly to native events with both **capturing** and **bubbling** phases. You can stop propagation using `event.stopPropagation()`. The `event.preventDefault()` method can also be used to prevent the default behavior of an element (e.g., preventing form submission).
- **Capturing Phase :** Event start from the root of the DOM and propogates down to the target element. During this phase, the event is passed through the parent elements of the target element until it reaches the target. So to trigger event in capturing phase we have to add `capture` modifier to an event listener.
- **Event Bubbling :** After the event reaches the target element it start bubbling up from the target back to the root element. This is most commonly used phase in JS and React (with `onClick` , `onChange` etc.) To   stop bubbling we use `event.stopPropagation()`. And its only work is to stop the propogation of event in either direction so it works in both the phases.

  ```javascript
  // Bubbling phase in action.
  // in this we are assuming that we are pressing the button of inner element.
  <div className="outer" onClick={() => console.log("Outer div clicked")}>
    <div className="inner" onClick={() => console.log("Inner div clicked")}>
      Click me!
    </div>
  </div>
  // O/p : 1. Inner div clicked. 2.Outer Div clicked.

  // Capturing phase in action
  <div className="outer" onClickCapture={() => console.log("Outer div clicked (capturing)")}>
    <div className="inner" onClickCapture={() => console.log("Inner div clicked (capturing)")}>
      Click me!
    </div>
  </div>
  // o/p 1.Outer div clicked (capturing) 2.Inner div clicked (capturing)

  ```

### Event Delegation

**Event delegation** is a technique where you attach a single event listener to a parent element (usually higher up in the DOM) and use it to handle events for child elements. This leverages  **event bubbling** : when an event occurs on a child element, it bubbles up to the parent, and the parent can handle it.

Instead of adding event listeners to individual child elements (which can be inefficient, especially if there are many elements), you add one listener to a parent and detect which child was clicked or interacted with.

**Why to use event delegation ?**

* **Performance:** Attaching individual event listeners to many child elements can be inefficient, especially if elements are dynamically added or removed.
* **Memory-efficient:** Instead of many listeners, you only need one.
* **Dynamic content:** When new child elements are added to the DOM after the event listener has been attached, the parent’s listener still works, so you don’t need to reattach listeners to the new elements.

**Note : Event handlers are the best place for side effect. (eg. changing input values in response to typing, or change a list in response to a button press) becasue it does not make immupre our component and hanlders only runs in reponse of certain user action.**

Note : Avoid using  inline handlers `<button onClick={() => setCount(count + 1)}>Increment</button>` because these inlines handlers are created everytime component re-renders, the best practice is to move them out of jsx return statement and define like below using useCallback hooks.

```javascript
import React, { useCallback } from 'react';

function MyComponent() {
  const handleClick = useCallback(() => {
    doSomething();
  }, []); // The empty dependency array means this function will only be created once

  return <button onClick={handleClick}>Click me</button>;
}

```

**Conclusion**

* **Avoid inline event handler declarations.**
* **Memoize event handlers with `useCallback` when needed.**
* **Use `React.memo` to prevent child components from re-rendering.**


## React.memo

- This is not same as useMemo hook, it is  used for memoizing the component which saves from un-necessay re-renders. It is also called `High Order Component`. Advice not to use everywhere only if there is too many un-necessay re-renders.
- When something renders
  - When there props changes.
  - when there state changes.
  - Context changes : the context value it consumes changes.
  - Parent component re-renders : **This is where we can optimize it using React.memo.**
- **When to use what ?**
  - use `React.memo` to prevent re-rendering of functional components when their props have not changed.
  - use `useCallback` to prevent re-creation of functions on every re-render.
  - use `useMemo` to prevent re-computiation of expensive calculations eg. Sorting Array, or doing some big mathematical calculation.

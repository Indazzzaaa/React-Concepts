# Hooks

## What are side-effects

- In programming, **side effects** refer to changes or actions that occur outside the scope of a function's main purpose, or that affect the outside environment. In the context of React, side effects are operations that interact with the outside world or alter the application state beyond returning a value from a function

### Common Side Effects

1. **Data Fetching** : Making HTTP requests to retrieve data from an API or server.
2. **Subscription Management** : Setting up or tearing down subscriptions, such as WebSocket connections or event listeners.
3. **DOM Manipulation** : Directly interacting with the DOM, such as adding or removing elements, which React usually handles through its reconciliation process.
4. **Timers** : Setting up intervals or timeouts using functions like `setInterval` or `setTimeout`.
5. **Local Storage** : Reading from or writing to local storage or session storage.
6. **Logging** : Writing logs or debug information to the console or an external service.
7. **External Libraries** : Integrating with non-React libraries that manipulate the DOM or perform other side effects.


### What are effects and how to use useEffect hook ?

- We defined the effects above, During initial render `useState` initializes the state. It it's the first render, the state is set to the initial value we provided. And component renders with initial value.
- While `useEffect` execution starts after initial render is committed to the DOM. This is where we perform side effects like data fetching or subscriptions.
- **IT's goal is to synchronizes a component with an external system.**
- This is how it synchronizes to an external system.

  - It runs first time when react committed it's initial render to the DOM.
  - Then it's dependency changes.
    - First it will run the provided cleanup code. : This is the place we release the resources.
    - Then run the main provided side-effect, This happens after the DOM has been updated but before the browser has had a chance to paint the screen.

  ```javascript
  import React, { useState, useEffect } from 'react';

  function ExampleComponent() {
    const [count, setCount] = useState(0);

    // This effect runs after the first render and every time the count changes.
    useEffect(() => {
      console.log('Effect ran after render');
      // Cleanup function (if needed)
      return () => console.log('Cleanup effect');
    }, [count]); // Dependency array: Effect runs when `count` changes.

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

  ```


## Hooks in action

1. useState : adds state to function component.

   ```javascript
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);
     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }

   ```

   2. useEffect : Performs side effects in function components.

      ```javascript
      import React, { useEffect, useState } from 'react';

      function DataFetcher() {
        const [data, setData] = useState(null);

        useEffect(() => {
          fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
        }, []);

        return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
      }

      ```

  3.  useContext : Access the values of a React context : Helps in passing values between sub-trees efficiently.

```javascript
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
```



4. useReducer : similar to useState but we use this hook when state management logic is complex.

   ```javascript
   import React, { useReducer } from 'react';

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, { count: 0 });
     return (
       <div>
         <p>Count: {state.count}</p>
         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
       </div>
     );
   }

   ```

    5. useMemo : Memoize expensive calculations to optimize performance.

```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function computeExpensiveValue(count) {
  // Simulate an expensive calculation
  return count * 2;
}

```


6. useCallback : memorizes callback functions to avoid un-necessary re-renders.

```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function computeExpensiveValue(count) {
  // Simulate an expensive calculation
  return count * 2;
}

```

7. useRef : provides a way to access DOM elements directly and presist values between renders. And we wrap component with HOC forwarRef if that component is going to accept the ref.

   ```javascript
   import React, { useRef, useEffect } from 'react';

   function FocusInput() {
     const inputRef = useRef(null);

     useEffect(() => {
       inputRef.current.focus();
     }, []);

     return <input ref={inputRef} />;
   }

   ```
8. useId : to generate id for our input element. Don't use them as key for list.
9. useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.

   ```javascript
   import React, { useLayoutEffect, useRef, useState } from 'react';

   function LayoutEffectExample() {
     const [height, setHeight] = useState(0);
     const divRef = useRef(null);

     useLayoutEffect(() => {
       setHeight(divRef.current.getBoundingClientRect().height);
     }, []);

     return (
       <div>
         <div ref={divRef}>This is a div</div>
         <p>Height of div: {height}px</p>
       </div>
     );
   }

   ```
10. useDebugValue: Displays a label for custom hooks in React DevTools.

    ```javascript
    import React, { useDebugValue, useState } from 'react';

    function useCustomHook(value) {
      useDebugValue(value > 10 ? 'High' : 'Low');
      return value;
    }

    function CustomHookComponent() {
      const value = useCustomHook(15);
      return <div>Value: {value}</div>;
    }

    ```

    **Note :** There are more hooks that we can see on *[hooks](https://react.dev/reference/react/hooks) .*

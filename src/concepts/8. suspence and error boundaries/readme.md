# Suspence

- In React, `Suspense` is a component that allows you to "suspend" rendering until some asynchronous task (like loading data or code-splitting) is completed. It's part of React's approach to handling asynchronous tasks more efficiently by allowing you to define fallbacks for content that takes longer to load.

    

### Why Use `Suspense`?

* **Code-splitting** : `Suspense` is primarily used with React's lazy loading to load components only when needed (on demand).
* **Handling asynchronous data** : You can show a fallback (like a spinner) while data is being fetched, though this use case requires React Server Components or concurrent mode.
* **Better user experience** : It allows you to defer parts of your app while ensuring that other parts remain responsive.


### What is lazy loading and when it is usefull?

- We use lazy loading techniquie to provide the certain component only when needed to client at runtime.
- In this case chunk that are being lazy loaded downloaded at runtime and then rendered here user might see some delay for the first time.
- And it's browser feature so it's does not depend on the thing whether the backend is designed in node or ruby or any other language.

```javascript
import React, { Suspense } from 'react';

// Lazy load the MyComponent
const MyComponent = React.lazy(() => import('./MyComponent'));

const App: React.FC = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>

      {/* Use Suspense to wrap lazy-loaded components */}
      <Suspense fallback={<div>Loading component...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default App;
```



# Error Boundaries

- In React, **Error Boundaries** are a mechanism for catching JavaScript errors that occur in the rendering process, in lifecycle methods, and in constructors of class components. They allow you to gracefully handle errors and prevent your entire component tree from crashing due to an unhandled error. Error boundaries are particularly useful for catching errors in a specific part of your component tree and providing fallback UI or logging error information.


### What Are Error Boundaries?

* **Error Boundaries** are React components that use the lifecycle methods `componentDidCatch` and `getDerivedStateFromError` to catch errors and handle them.
* They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.


### Key Points:

* **Isolation** : Error boundaries catch errors in the components below them in the tree. They don’t catch errors in themselves or in event handlers.
* **Fallback UI** : You can render any UI as a fallback in case of an error. This allows you to provide a better user experience when something goes wrong.
* **Error Reporting** : Use `componentDidCatch` to log errors or report them to an external service for monitoring and debugging.

**Note** : As of now, **Error Boundaries** in React can only be created using class components. This is because the `getDerivedStateFromError` and `componentDidCatch` lifecycle methods, which are necessary for error boundaries, are only available in class components.

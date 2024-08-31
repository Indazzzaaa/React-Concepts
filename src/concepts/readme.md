# Topics

- **1. Components**

  - Class Components ✅
  - Functional Components ✅
  - How to style components. : `inline styles, external css file, tailwind.`
  - Component Purity/ Pure Function : `given the same inputs, always returns the same output, does not produce side-effects like modifying external variables or making network requests. In context of component only rely on its props and state to determine its output(i.e. the jsx it returns), and does not modify any external state or variables, or trigger side effects like network requests or DOM manipulation inside the render method.`
  - Strict Mode : `it's a wrapper component which helps to identify any potential problems in an application during development.`
- Components Basics
  **Note :** Name of file must be PascalCase. Then only transpiler will convert the jsx to js. And name of  component must be descriptive eg. ProductList ✅ , List ❌

  - JSX
    - What is transpillers and polyfills.
    - How to write multiline jsx.
    - Fragments
  - Props vs State
    - How react updates it's state, what checks it does for primitives and for reference types?
    - What is children prop
  - Conditional Rendering
  - Composition
- Rendering

  - Component Life cycle
  - Lists and Keys
  - Render Props
  - Events
    - How event system works in React-JS.
    - Synthetic Event, Event Propogation and Event Bubbling and how to stop propogation ?
    - Event Daligation.
  - Higher Order Components
    - React.memo
- Hooks

  - What are side effects?
  - Mostly Used : useState, useReducer, useRef, useContext, useMemo, useID
  - Other Remaining.
  - Creating custom hooks.
    - **Note :** when naming custom hooks, use camelCase but always prefix the name with `use` eg. `useFetchData`.
- Controlled / UnControlled Components

  - what are refs hooks and how to pass ref in other component(forward ref).
  - How to handle and validate forms
  - React Hook Forms
- Context API's
- Portals
- Suspense
- Error Boundaries
- Fetching API Data

  - Using Fetch : And how to pass data and what is its limitation.
    - How to cancel the fetch when required?
  - Axios
  - React Query
- React- Router
- Lazy Loading in React

  - Also see bundle optimization
- React-Accessibility
- State Management

  - Redux : It also comes with the API
  - Zustand : Recommended.
- Testing

  - Unit Testing : vitest.
  - Component Testing : React-testing library.

## See what's new in latest version of React ?

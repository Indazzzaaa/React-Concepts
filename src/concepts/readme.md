# [Topics](https://roadmap.sh/react)

- 1. **Components ✅**

  - Class Components
  - Functional Components
  - How to style components. : `inline styles, external css file, tailwind.`
  - Component Purity/ Pure Function : `given the same inputs, always returns the same output, does not produce side-effects like modifying external variables or making network requests. In context of component only rely on its props and state to determine its output(i.e. the jsx it returns), and does not modify any external state or variables, or trigger side effects like network requests or DOM manipulation inside the render method.`
  - Strict Mode : `it's a wrapper component which helps to identify any potential problems in an application during development.`
- 2. **Components Basics✅**
     **Note :** Name of file must be PascalCase. Then only transpiler will convert the jsx to js. And name of  component must be descriptive eg. ProductList ✅ , List ❌

  - JSX
    - What is transpillers and polyfills.
    - How to write multiline jsx.
    - [Fragments](https://react.dev/reference/react/Fragment), [Profiler](https://react.dev/reference/react/Profiler), [StrictMode](https://react.dev/reference/react/StrictMode), [Suspense](https://react.dev/reference/react/Suspense)
  - Props vs State
    - How react updates it's state, what checks it does for primitives and for reference types?
    - What is children prop
    - what is props drilling.
  - Conditional Rendering
  - Thinking in terms of UI and Composition
- 3. **Rendering ✅**

  - Component Life cycle
  - Lists and Keys
  - Render Props
  - Events
    - How event system works in React-JS.
    - How js handles event
    - Synthetic Event, Event Propogation and Event Bubbling and how to stop propogation ?
    - Event Daligation.
  - Higher Order Components
    - React.memo
- [4. Hooks](https://react.dev/reference/react/hooks) ✅

  - What are side effects?
    - What are effects and how to use `useEffect` hooks.
  - Mostly Used : useState, useReducer, useRef, useContext, useMemo, useID
  - Other Remaining.
  - Creating custom hooks.
    - **Note :** when naming custom hooks, use camelCase but always prefix the name with `use` eg. `useFetchData`.
- 5. Controlled / UnControlled Components ✅

  - How to create controlled and uncontrolled forms
    - what are refs hooks and how to pass ref in other component(forward ref).
  - How to handle and validate forms
    - What are actions we can do on form eg. submit, reset etc.
  - React Hook Forms
  - Vlidating Forms using ZOD.
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

  Info : We have used `shadcn` for UI and `react-icons` for icons

## See what's new in latest version of React ?

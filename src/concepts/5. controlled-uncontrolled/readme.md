# Controlled / Uncontrolled Components

- The controlled and uncontrolled are always works in context of the form, where in `controlled` we access the data of input fields in form using the `useState` hooks while in uncontrolled we access it using `useRef` hook.

## useRef hook

- This hook use to access the actual rendered component in the DOM tree , so we can play with that node directly without re-rendering anything. It's usefull in the forms and fields where we have to modify/access data of the dom elements directly without causing re-render.
- This is how works : at the first initialization it's null , but when component is mounted on the DOM tree it return the reference of that node on the variable defined for example see the UnControlled component section.
- We can also pass some initial value, if our need is to store state but don't want them update the UI when we update the state.
- we pass this hook in `ref` and if have to pass this hook to child componenet we can't pass it in prop, we have to wrap that child componenet in `forwardRef` first then in arguments we can define field which will accept it.


### When to Use `useRef`:

* Accessing or manipulating a DOM element.
* Storing a value that needs to persist across renders but doesn't need to cause re-renders (e.g., timer IDs, previous state values).
* Implementing mutable values like form field values that don't necessarily require re-renders.


## Common actions used on the forms

1. Form submission Action :  Triggers when form is submitted or Enter is pressed on the form field. Submitting form triggers page reload untill unless this default behaviour is prevented using `event.preventDefault()` . `<form onSubmit={handleSubmit}>`
2. Input field change Actions : Triggers every time a user changes the value of an input, textarea or select element. This is usually used in the controlled forms where the input value is tied to component state. `<input type="text" onChange={handleChange} />`
3. Form Reset Action :  `onReset` triggered when a form is reset typically via a reset button or calling the `reset()` method on the form.`<form onReset={handleReset}>`
4. Validation Action : `onInvalid` triggered when form validation fails for specific input field. It allows us to handle invalid inputs and display custom error messages.`<input type="text" onInvalid={handleInvalid} required />`
5. Focus and Blur actions : `onFocus` and `onBlur` triggered when an input element gains focus or loses focus.`<input type="text" onFocus={handleFocus} /> <input type="text" onBlur={handleBlur} />`
6. key and mouse actions : using onKeyPress `it has variants as well like onKeyDown and onKeyUp` and mouse action like onClick. `<input type="text" onKeyPress={handleKeyPress} />`
7. Custom input actions : `onInput` triggered when value of input field changes it's similar to `onChange` but can detect changes earlier in some browsers. `<input type="text" onInput={handleInput} /> `
8. Custom button action works inside form only `submit` and `reset` `<button type="submit">Submit</button> <button type="reset">Reset</button> `


## React- Hook Form

- `react-hook-form` is a popular library in React that simplifies form handling, validation, and submission by leveraging uncontrolled components. It helps minimize re-renders and offers a clean, declarative API for handling forms.
- For more see the example.

### Benefits of Using `react-hook-form`:

* **Minimal Re-renders** : Because it uses uncontrolled components, it avoids unnecessary re-renders when input values change.
* **Easy Validation** : Built-in validation is straightforward and customizable.
* **Small Bundle Size** : It is lightweight and efficient compared to many form libraries.


## ZOD

- It's use to validate our inputs, and easly able to integrate with the react.

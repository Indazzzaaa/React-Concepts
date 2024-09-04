# Portals

- In React, **portals** provide a way to render children into a different part of the DOM that exists outside the main component hierarchy. Even though the portal's content appears elsewhere in the DOM, it behaves as if it's part of the React component hierarchy in terms of event handling and state management.


### Why Use Portals?

1. **Modals, Dialogs, Popups** : Portals are ideal for rendering components like modals that need to be positioned outside their parent's DOM hierarchy but still have access to the same React state and logic.
2. **Tooltips** : Tooltips might need to escape the boundaries of their parent component for positioning but still need the same behavior and logic as the component they are related to.
3. **Performance** : By placing content directly in the body, you can avoid unnecessary styling issues (like overflow or `z-index`) and make rendering more efficient for certain components.

Usecases : Modals/Dialogs ` portals allow modal content to be visuall separated from its parent but still share state and events.`, Tooltips and Dropdowns ` these can be rendered at different DOM levels without worrying about position issues.`, Notifications   `portal makes it easier to render floating notifications without breaking the component hierarchy.`


### Event Bubbling with Portals

Even though the portal renders outside the DOM hierarchy,  **event bubbling still works as expected** .


### This how to create portal

- Syntex : `ReactDOM.createPortal(child, container); child : The react Node to render, container: The DOM element where the portal will be rendered.`

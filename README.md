📦 **react-alert-modal**

A simple React Alert Modal component.

## The link to the npm library 📦: https://www.npmjs.com/package/react-alert-modal

## 🚀 Installation

Run the following command:

```bash
npm install react-alert-modal
```
## Usage

Here's an example of how to use the AlertModal component in your React application:
```bash
import React from 'react';
import AlertModal from 'react-alert-modal';

const App = () => (
  <div>
    <AlertModal message="This is an alert!" onClose={() => console.log('Closed')} />
  </div>
);

export default App;
```

## Props

message (string, required): The message to display inside the modal.

onClose (function, required): A function to be called when the modal is closed.

## Example

In the above example, the modal will display the message "This is an alert!", and when the user closes the modal, "Closed" will be logged in the browser's console.

## Styling

You can customize the styling of the modal by modifying the AlertModal.css file included in the package, or by overriding the styles in your project.

## Author

Name: Amal Nasr

Email: nasr.amal88@gmail.com
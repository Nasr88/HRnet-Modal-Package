import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AlertModal from './lib/AlertModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      {modalVisible && (
        <AlertModal message="This is a test modal!" onClose={() => setModalVisible(false)} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


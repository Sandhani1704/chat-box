import './App.css';
import React from 'react';

function App() {
  const [messageToShow, setMessageToShow] = React.useState(0)

  const messages = [
    { text: 'how to get better at react?' },
    { text: 'just build something' },
    { text: 'OK! What shoild I build?' },
    { text: 'OK! What shoild I build?' },
    { text: 'JONO, Just Google it?' },
    { text: 'Oh, This course looks cool?' },
    { text: 'Send me the link' },
    { text: '20ReactApps.com' }

  ]
  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {



          return <Message key={index} message={message} />

        })}
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <div className="message">
      <div className="avatar"></div>
      <div className="text">{message.text}</div>
      <div className="avatar"></div>
    </div>
  )
}
export default App;

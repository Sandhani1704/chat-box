import './App.css';
import React from 'react';
import useInterval from "@use-it/interval";
import man from '../images/man.svg'
import woman from '../images/woman.svg'
import { motion } from 'framer-motion';

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

  useInterval(() => {
    setMessageToShow((messageToShow) => messageToShow + 1)
  }, 2000)

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index % 2 === 0;
          if (messageToShow + 1 === index) return <Typing key={index} even={even} />

          if (index > messageToShow) return <div key={index} />


          return <Message key={index} message={message} />

        })}
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <motion.div className="message" initial={{ rotate: -5, scale: 0 }} animate={{ rotate: 0, scale: 1 }} >
      <div className="avatar"><img className='avatar__image' src={man} alt={man} /></div>
      <div className="text">{message.text}</div>
      <div className="avatar"><img className='avatar__image' src={woman} alt={woman} /></div>
    </motion.div>
  )
}

function Typing({ even }) {
  return (
    <motion.div className={`typing ${even ? 'is-right' : 'is-left'}`}
      initial={{ rotate: 10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="dots">
        <div />
        <div />
        <div />

      </div>

    </motion.div>
  )
}

// const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

// function findVowels(str) {

//   return str.split('').reduce((result, i) => {
//     if (vowels.includes(i)) {
//       return result + 1
//     }
//     return result
//   }, 0)
// }


// findVowels('кошка');

export default App;

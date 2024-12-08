import { useState } from 'react'
import './App.css'

function App() {
  const [selectedId,setSelectedId] = useState(null);
  const handleClick = (id) =>{
    console.log(`Clicked : ${id}`)
    setSelectedId( selectedId  ? null : id ) ;
  }
  const questions = [
    {
      id : 1,
      question:'HTTP',
      answer:'Hyper text transfer protocol'
    },
    {
      id : 2,
      question:'DNS',
      answer:'Domain Name System'
    },
    {
      id : 3,
      question:'IP',
      answer:'Internet Protocol'
    },
    {
      id : 4,
      question:'TCP',
      answer:'Transfer Control Protocol'
    }
  ]
  return (
    <>
      <div className="flashcards">
        {
          questions.map((question)=>(
            <div className={selectedId === question.id ? 'selected':'no'}
            key={question.id}
            onClick={() => handleClick(question.id)}
            >
              <p>{selectedId === question.id ? question.answer : question.question}</p>
            </div> 
          ))
        }
      </div>
    </>
  )
}

export default App

import './App.css'

import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './BookMarks/BookMarks'
import { useState } from 'react'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = blog => {
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks);
  }

  const handleMarkAsRead = (time, id) => {
    const Time = parseInt(time);
    const newReadingTime = readingTime + Time;
    setReadingTime(newReadingTime);

    const reamingBooksMarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(reamingBooksMarks);

  }

  return (
    <>

      <Header></Header>
      <div className='md:flex mt-10'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>

    </>
  )
}

export default App

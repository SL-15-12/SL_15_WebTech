import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Sebastian Lipiński",
    technologiesCount: 3
  };
  const student = {
    name: "Sebastian",
    surname: "Lipiński",
    className: "4P",
    specialization: "technik programista"
  };
  const course = {
    name: "Sebastian",
    teacher: "Rafał Taraszka",
    hours: "4",
    completed: "3"
  };

  return (
    <>
      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>
      <p>{student.name} - {student.surname} - {student.className} - {student.specialization}</p>
      <section>
        <p>{course.name} - {course.teacher} - {course.hours} - {course.completed}</p>
      </section>
    </>
  )
}

export default App

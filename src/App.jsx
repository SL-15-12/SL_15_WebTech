import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './components/Student.jsx';
import InfoBox from './components/InfoBox.jsx';
import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import Books from"./components/Books.jsx";




function App() {
  const students = [
  { id: 1, name: "Anna", className: "4P" , age: 18, specialization:"Programista"},
  { id: 2, name: "Jan", className: "4P" , age: 17 , specialization:"Programista"},
  { id: 3, name: "Adam", className: "4P" , age: 20 , specialization:"Programista"},
  { id: 4, name:"Tomek", className: "4P" , age: 16, specialization:"Programista"}
];
const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    }
  ];

  const books = [
  { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
  { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];


 return(
 <>


      <Header />

      {
        technologies.map((technology)=>{
          return(
            <Technology
            name={technology.name}
            hours={technology.hours}
            category={technology.category}
            />
          )
        })
      }

      <hr/>
      {
        students.map((student)=>{
          return (
            <Student
            key={student.id}
            name={student.name}
            className={student.className}
            age={student.age}
            specialization={student.specialization}
            />)
          })
        }
      <hr/>
      {
        books.map((book)=>{
          return (
            <Books
            book={book.title}
            author={book.author}
            />
          )
        })
      }
      <Footer />
    </>
 );
  
}

export default App

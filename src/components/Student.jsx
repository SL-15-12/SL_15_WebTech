function Student({key,name,age,className,specialization})
{
  return(
<section className="student">
  <p>Imie: {name}</p>
  <p>Wiek: {age}</p>
  <p>Klasa: {className}</p>
  <p>Specjalizacja: {specialization}</p>
</section>
  )
}


export default Student;
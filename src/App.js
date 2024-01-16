import{ useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  let links = ['Главная', 'Работы', 'Отзывы',];

  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  }

  const minus = () => {
    setCounter(counter - 1);
  }

  
  return (
    <div className="App">
      <Header links={links} bgcolor="#ffffff"/>
      <Main img="https://glasnarod.ru/wp-content/uploads/2022/11/photo_2022-11-26_13-22-18-886x0-c-default.jpg" maintext="Lorem ipsum, dolor sit amet" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga tenetur iste in a dignissimos optio voluptatibus molestiae magnam veniam, ipsa quo dolorum! Nam, voluptatum pariatur ad odio totam ipsa quisquam!" btn="кнопка"/>
      {/* <h1>{counter}</h1>
      <button onClick={() => minus()}>-</button>
      <button onClick={() => plus()}>+</button> */}
    </div>
  );
}

export default App;

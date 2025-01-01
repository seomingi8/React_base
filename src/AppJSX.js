import logo from './logo.svg';
import './App.css';

function App() {
  const name = "민기";
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`hello ${name}`}</h1>
      <h1>ming</h1>
      <ui>
        {
          list.map(item => (
          <li>{item}</li>
        ))}
      </ui>
      <p>{name}</p>
    </>
  );
}

export default App;

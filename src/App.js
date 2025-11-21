import Card from "./day2/Card";
import './day2/App.css';

const App = ()=>{
  return (
    //화면에 보여지는 영역 : JSX 
    <div className="card-wrap">
      <Card file='1' title='DAY 1'/>
      <Card file='2' title='DAY 2'/>
      <Card file='3' title='Krew Day' />
    </div>
  ) ;
}
export default App;
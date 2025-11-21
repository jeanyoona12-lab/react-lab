import Props from "./day1/Props";
const App = ()=>{
  return (
    <div className="card">
      <Props idx={1} text='AI 생태계와 새로워진 카카오톡이 선사하는 일상 혁신' text_2='일상의 AI 혁신' text_3='DAY1' />
      <Props idx={2} text='카나나, AI Agent, MCP까지 카카오가 만드는 모두를 위한 기술' text_2='기술 하나의 가능성' text_3='DAY2' />
      <Props idx={3} text='카카오 크루들이 나누는 인사이트 이야기' text_2='가능성을 만드는 사람들' text_3='KREW DAY' />
    </div>
    
  );
}
export default App;
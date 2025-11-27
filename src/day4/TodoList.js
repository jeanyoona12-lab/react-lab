import React, { useState } from "react";

const TodoList = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(["오늘의 수업 리엑트", "리엑트 추가"]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' ){
            console.log('키이벤트발생')
            setTodos(prev=>[...prev,text]);
            setText('');
        }
    }
    const handleDelete = (index)=>{
        //todos 배열에서 index에 해당되는 정보를 제외
        //새로운 값이 만들어져야함, index값을 제외하고 나머지 값으로
        setTodos(prev=>prev.filter((_,i)=> i !== index));
            // const updated = prev.filter((_,i)=>{ return i !== index});
            // return updated;
    }
    return (
        <div className="todo-list">
            <h1>오늘 해야 할 일</h1>
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul>
                {
                todos.map((value, idx)=>{
                    return <li key={idx}>
                        <span>🎗{value}</span>
                        <button onClick={()=>{handleDelete(idx)}}> X </button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default TodoList;

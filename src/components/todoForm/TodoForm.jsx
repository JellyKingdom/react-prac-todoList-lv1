import React, { useState } from "react";
import './todoForm.css';

const TodoForm = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);     
    };

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    };

    const addTodos = (e) => {
        e.preventDefault();

        const newTodos = {
            id: todos.length + 1,
            title,
            body,
            isDone: false,
        };

        if(e.target.value == ''){
            alert('ddd')
        }

        //원래있던 todos를 스프레드연산자로 풀어주고, 거기서 newTodos를 다시 넣은 것!
        setTodos([...todos, newTodos]);
        setTitle('');   //추가하고 제목인풋창 클리어
        setBody('');    //추가하고 내용인풋창 클리어
    
    };
    return (
        <form className="todoForm" onSubmit={addTodos}>
            <div className="inputs">
                <label>제목 : </label>
                <input
                    className="inputbox"
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                required/>
                <label>내용 : </label>
                <input 
                className="inputbox"
                type="text" 
                value={body} 
                onChange={bodyChangeHandler} required/>
            </div>
            <button className="addBtn">추가하기</button>
        </form>
    );
};

export default TodoForm;
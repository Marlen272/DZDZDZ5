
import React, { useRef } from 'react';

const NameInput = ({ name, setName, handleAddName }) => {
    const inputRef = useRef(null); // Создаем ссылку на поле ввода

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter нажат!');
            handleAddName(); // Вызываем функцию добавления, если Enter нажат
        }
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
                ref={inputRef} // Привязываем ссылку к полю ввода
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddName} disabled={!name.trim()}>Добавить</button>
        </div>
    );
};

export default NameInput;


import React from 'react';

const NamesList = ({ namesList, handleChangeName, name }) => {
    return namesList.length === 0 ? (
        <p>Список пуст</p>
    ) : (
        <ul>
            {namesList.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleChangeName(index)} disabled={!name.trim()}>Поменять</button>
                </li>
            ))}
        </ul>
    );
};

export default NamesList;

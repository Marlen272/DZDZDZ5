import React, { useState } from 'react';
import NameInput from './components//nameInput/NameInput';
import NamesList from './components/nameList/NameList';

const App = () => {
    const [name, setName] = useState('');
    const [namesList, setNamesList] = useState([]);

    const handleAddName = () => {
        if (name.trim()) {
            setNamesList([...namesList, name]);
            setName('');
        }
    };

    const handleChangeName = (index) => {
        if (name.trim()) {
            const updatedNames = namesList.map((item, i) => (i === index ? name : item));
            setNamesList(updatedNames);
            setName('');
        }
    };

    return (
        <div>
            <NameInput name={name} setName={setName} handleAddName={handleAddName} />
            <NamesList namesList={namesList} handleChangeName={handleChangeName} name={name} />
        </div>
    );
};

export default App;
import React, { useState } from 'react'
import Content from './Content'

const Notes = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([]);

    const descriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const addNote = () => {
        if (title && description) {
            let values = {
                title,
                description
            }

            setItems([...items, values]);
            setTitle('');
            setDescription('');
        } else {
            alert("Fill the values first")
        }
    }

    const deleteItem = (id) => {
        let filteredItems = items.filter((val, index) => {
            return id !== index
        })
        setItems(filteredItems);
    };

    const clearAll = () => {
        setItems([]);
    };

    return (
        <div>
            <Content
                title={title}
                descriptionChange={descriptionChange}
                titleChange={titleChange}
                description={description}
                addNote={addNote}
                items={items}
                deleteItem={deleteItem}
                clearAll={clearAll}
            />
        </div>
    )
}

export default Notes;
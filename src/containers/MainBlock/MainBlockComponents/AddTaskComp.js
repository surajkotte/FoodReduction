import "../minBlockcss/AddTask.css";
import { useEffect, useState } from "react";
import Note from "./Note";
import DatePicker from "./DatePicker";
import "../minBlockcss/DatePicker.css";
const AddTaskComp = () => {
  useEffect(() => {
    addNotes();
  }, []);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const [noteData, setNoteData] = useState([]);

  const updateNote = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addNote = async (event) => {
    event.preventDefault();
   const data = await fetch("http://localhost:3000/todo/new", {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        text:note
      }
      )
    })
    setNoteData([...noteData,note]);
    console.log(data)
  };

  const addNotes = async (event) => {
    const data = await fetch("http://localhost:3000/data")
      .then((res) => {
        const data = res.json();
        console.log(data);
        data.then((res) => {
          setNoteData(res);
        });
      })
      .catch((err) => console.log(err));
      console.log(data)
  };

  return (
    <div className="AddTaskMain">
      <div>
        <form>
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={updateNote}
          />
          <textarea
            name="description"
            value={note.description}
            placeholder="description"
            onChange={updateNote}
            rows="3"
          />
          <DatePicker className="datePicker" />
          <button onClick={addNote}>Add</button>
        </form>
      </div>
      {noteData.map((todo) => {
        console.log(todo._id)
        return <Note id={todo._id} title={todo.title} description={todo.description} />;
      })}
    </div>
  );
};

export default AddTaskComp;

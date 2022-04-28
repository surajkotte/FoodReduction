import "../minBlockcss/Note.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const Note = (props) => {
  const deleteClicked = async (id) =>{

    const data = await fetch("http://localhost:3000/todo/delete/"+id , {
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res=>res.json())
    console.log(data);
  }
  return (
    <div className="note" key={props.id}>
      <h1>{props.title}</h1>
      <hr></hr>
      <p>{props.description}</p>
      <IconButton className="Notebtn" aria-label="delete" size="large">
        <DeleteIcon onClick={()=>deleteClicked(props.id)} fontSize="inherit" />
      </IconButton>
    </div>
  );
};
export default Note;

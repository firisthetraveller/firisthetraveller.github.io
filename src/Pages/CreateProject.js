import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('Test');
  const [date, setDate] = useState('');
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = tag.split(",");
    tags.forEach((s) => s.trim());
    const project = { title, description, date, tags };

    setIsPending(true);

    fetch('http://localhost:8000/articles', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    }).then(() => {
      console.log("New project added");
      setIsPending(false);
      navigate('/creations');
    });
  }

  return (
    <div className="create">
      <h2>Create a project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="text"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="DD/MM/YYYY"
        />
        <label>Tags:</label>
        <input
          type="text"
          required
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        {!isPending && <button>Add project</button>}
        {isPending && <button disabled>Adding project...</button>}
      </form>
    </div>
  );
}

export default CreateProject;


import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <h3>Loading todos...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      <p>Total Tasks: {todos.length}</p>

      {todos.map((todo) => (
        <div key={todo.id} style={styles.card}>
          
          <h3> Title : {todo.title}</h3>

          <p>
            <strong>User ID:</strong> {todo.userId}
          </p>
           <p>
            <strong>id:</strong> {todo.id+0}
          </p>
          <p>
            <strong>Completed:</strong>{' '}
            <span
              style={{
                color: todo.completed ? 'green' : 'orange'
              }}
            >
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '12px',
    backgroundColor: '#f9f9f9'
  }
};

export default TodoList;

import './index.css'

const TodoItem = props => {
  const {eachTodo, removeTodoItem} = props
  const {title, id} = eachTodo

  const onDelete = () => {
    removeTodoItem(id)
  }

  return (
    <li>
      <div className="list-items">
        <p>{title}</p>
        <button onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

import { useState } from "react"
import AddTodo from "./AddTodo"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { useEffect } from "react";
import FilterTodos from "./FilterTodos";
import SortTodos from "./SortTodos";


function TodoWrapper() {


    const loadTodosFromLocalStorage = () => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
          return JSON.parse(savedTodos);
        }
        return [];
      };

    const [todos, setTodos] = useState(loadTodosFromLocalStorage);
    

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); 
      }, [todos])
    
      
  

    const addNewTodo = todo => {
        const {title, description, timeEstimate, category, deadline, status} = todo
        const parsedDeadline = new Date(deadline);
        setTodos((prevTodos) => [...prevTodos, {id: uuidv4(), task: {title, description, timeEstimate, category, deadline: parsedDeadline, status}, completed: false, isEditing: false}
        ]);
    }



    const changeStatus = id => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, task: { ...todo.task, status: todo.task.status === "Completed" ? "Not started yet" : "Completed"}} : todo)
        );
    };
    

    const deleteTodo  = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
};

    

    const reDoTodo = id => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
        );
    }

    const editTask = (task, id) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
        );
    }


    const [filteredTodos, setFilteredTodos] = useState([])
    const [selectedStatusFilters, setSelectedStatusFilters] = useState([])
    const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([])

    const statusFilters = ["Not started yet", "Completed"]
    const categoryFilters = ["Household", "Errands", "Shopping"]


    const handleStatusFilterClick = (status) => {
        if(selectedStatusFilters.includes(status)) {
            setSelectedStatusFilters(selectedStatusFilters.filter((filter) => filter !== status))
        }else {
            setSelectedStatusFilters([...selectedStatusFilters, status])
        }
    }

    const handleCategoryFilters = (category) => {
        if(selectedCategoryFilters.includes(category)) {
            setSelectedCategoryFilters(selectedCategoryFilters.filter((filter) => filter !== category))
        }else {
            setSelectedCategoryFilters([...selectedCategoryFilters, category])
        }
    }


    const filterTodos = () =>  {
        let filtered = [...todos]
        if(selectedStatusFilters.length > 0) {
            filtered = filtered.filter((todo) => selectedStatusFilters.includes(todo.task.status))
        } if(selectedCategoryFilters.length > 0) {
            filtered = filtered.filter((todo) => selectedCategoryFilters.includes(todo.task.category))
          }

          setFilteredTodos(filtered)
        
        }

        useEffect(() => {
            filterTodos()
          }, [selectedStatusFilters, selectedCategoryFilters, todos])


          const sortTodos = (field, order) => {
            const sorted = [...todos]
            sorted.sort((a, b) => {
            const valueA = a.task[field]
            const valueB = b.task[field]
              
            if (field === "status") {
                const statusOrder = ["Not started yet", "Completed"]
                return order === "asc" ? statusOrder.indexOf(valueA) - statusOrder.indexOf(valueB) : statusOrder.indexOf(valueB) - statusOrder.indexOf(valueA);
              }
        
           if (field === "deadline" || field === "timeEstimate") {
                const dateA = field === "deadline" ? new Date(valueA) : valueA
                const dateB = field === "deadline" ? new Date(valueB) : valueB
                return order === "asc" ? dateA - dateB : dateB - dateA
              }

              
              return 0;
            });


            setTodos(sorted);

          };


    return(
        <div className="todoWrapper">
        <h1>Todo List!</h1>
        <AddTodo addNewTodo={addNewTodo} />
        <FilterTodos title="Status Filters" filters={statusFilters} selectedFilters={selectedStatusFilters} handleFilterClick={handleStatusFilterClick}/>
        <FilterTodos title="Category Filters" filters={categoryFilters} selectedFilters={selectedCategoryFilters} handleFilterClick={handleCategoryFilters}/>
        <SortTodos sortTodos={sortTodos} /> 
        {filteredTodos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodo key={index} task={todo} editTask={editTask} />) :
             (  <Todo key={index} task={todo} changeStatus={changeStatus} deleteTodo={deleteTodo} reDoTodo={reDoTodo} />
          )
        )}
      </div>
    );
  };

export default TodoWrapper  
import create from 'zustand'
import {generateId} from "../helper";

// описание типов
interface Task {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void; // ничего void не возвращать
    removeTask: (id: string) => void;
}

// создаем стор
export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        {
            id: 'asd',
            title: 'Моя дефолтная таска',
            createdAt: 123123,
        },
        {
            id: 'asd123',
            title: 'Моя дефолтная таска 2',
            createdAt: 321123,
        },
    ],
    createTask: (title) => {
        const { tasks } = get()
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
        }

        set({
            tasks: [newTask].concat(tasks),
        })
    },
    updateTask: (id: string, title: string) => {
        const {tasks} = get()
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })
    },
    removeTask: (id: string) => {
        const {tasks} = get()
        set({
            tasks: tasks.filter((task) => task.id !== id)
        })
    },
}))
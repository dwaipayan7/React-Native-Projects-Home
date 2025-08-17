import { queryOptions } from "@tanstack/react-query";
import { Todo } from "../../types/todoTypes";

const getTodos = async (): Promise<Todo[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json();
};

export default function createTodoQueryOptions() {
    return queryOptions<Todo[]>({
        queryKey: ['todo'],
        queryFn: getTodos,
    });
}

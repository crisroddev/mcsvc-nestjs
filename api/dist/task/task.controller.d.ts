import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(taskDto: TaskDTO): Promise<unknown>;
    getTasks(): import("./task.interface").ITask[];
    getTask(id: string): import("./task.interface").ITask;
    updateTask(id: string, taskDto: TaskDTO): import("./task.interface").ITask;
    deleteTask(id: string): string;
}

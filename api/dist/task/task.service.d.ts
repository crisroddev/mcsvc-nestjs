import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
export declare class TaskService {
    tasks: ITask[];
    create(taskDto: TaskDTO): ITask;
    getTasks(): ITask[];
    getTask(id: string): ITask;
    updateTask(id: string, taskDto: TaskDTO): ITask;
    deleteTask(id: string): string;
}

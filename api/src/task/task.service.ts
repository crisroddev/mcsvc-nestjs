import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];

  create(taskDto: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDto,
    };
    this.tasks.push(task);
    return task;
  }

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTask(id: string): ITask {
    console.log(id);
    return this.tasks.find((t) => t.id === id);
  }

  updateTask(id: string, taskDto: TaskDTO): ITask {
    const newTask = { id, ...taskDto };
    this.tasks = this.tasks.map((t) => (t.id === id ? newTask : t));
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id != id);
    return `Task deleted ${id}`;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  // Inject Service
  constructor(private readonly taskService: TaskService) {}

  @Post()
  // @UsePipes(new ValidationPipe())
  create(@Body() taskDto: TaskDTO) {
    // return this.taskService.create(taskDto);
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Error'), 15000);
    });
  }

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() taskDto: TaskDTO){
    return this.taskService.updateTask(id, taskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string){
    return this.taskService.deleteTask(id);
  }
}

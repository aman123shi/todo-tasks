import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { TodoDto } from './dtos/todo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAllTodos(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findTodoById(@Param('id') id: number): Promise<Todo> {
    return await this.todoService.findOne(id);
  }

  @Post()
  async createTodo(@Body() todoDto: TodoDto): Promise<Todo> {
    return await this.todoService.create(todoDto);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<void> {
    return await this.todoService.delete(id);
  }
}

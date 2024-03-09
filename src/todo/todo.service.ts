import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { TodoDto } from './dtos/todo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find({ relations: { tasks: true } });
  }

  async findOne(id: number): Promise<Todo> {
    const task = await this.todoRepository.find({
      where: { id },
      relations: { tasks: true },
    });
    return task[0];
  }

  async create(todo: TodoDto): Promise<Todo> {
    let newTodo: Todo = new Todo();
    Object.assign(newTodo, todo);
    return this.todoRepository.save(todo);
  }

  async update(id: number, todo: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return this.todoRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    this.todoRepository.delete(id);
  }
}

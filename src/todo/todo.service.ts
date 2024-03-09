import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  async create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return this.todoRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    this.todoRepository.delete(id);
  }
}

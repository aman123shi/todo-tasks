import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  async create(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async update(id: number, task: Task): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    this.taskRepository.delete(id);
  }
}

import { Task } from '../../task/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Task, (task) => task.todo)
  tasks: Task[];

  @Column({ default: true })
  isActive: boolean;
}

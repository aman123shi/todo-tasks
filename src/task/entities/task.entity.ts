import { Todo } from '../../todo/entities/todo.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Todo, (todo) => todo.tasks)
  todo: Todo;

  @Column({ default: true })
  isActive: boolean;
}

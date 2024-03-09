import { IsNotEmpty, IsBoolean, ValidateNested } from 'class-validator';

export class TaskDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  todoId: number;

  @IsBoolean()
  isActive: boolean;
}

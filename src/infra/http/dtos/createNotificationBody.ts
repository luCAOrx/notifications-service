import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  category: string;
}

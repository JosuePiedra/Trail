import { IsString, IsNotEmpty } from 'class-validator';
export class UpdateStationDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  location?: string;

  @IsString()
  img?: string;
}

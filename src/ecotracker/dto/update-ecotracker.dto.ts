import { PartialType } from '@nestjs/mapped-types';
import { CreateEcotrackerDto } from './create-ecotracker.dto';

export class UpdateEcotrackerDto extends PartialType(CreateEcotrackerDto) {}

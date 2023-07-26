import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EcotrackerService } from './ecotracker.service';
import { CreateEcotrackerDto } from './dto/create-ecotracker.dto';
import { UpdateEcotrackerDto } from './dto/update-ecotracker.dto';

@Controller('ecotracker')
export class EcotrackerController {
  constructor(private readonly ecotrackerService: EcotrackerService) {}

  @Post()
  create(@Body() createEcotrackerDto: CreateEcotrackerDto) {
    return this.ecotrackerService.create(createEcotrackerDto);
  }

  @Get()
  findAll() {
    return this.ecotrackerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ecotrackerService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEcotrackerDto: UpdateEcotrackerDto,
  ) {
    return this.ecotrackerService.update(+id, updateEcotrackerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ecotrackerService.remove(+id);
  }
}

import { Controller, Get } from '@nestjs/common';
import { Person } from '../interfaces/person.controller';
import { PersonService } from '../services/person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }
}

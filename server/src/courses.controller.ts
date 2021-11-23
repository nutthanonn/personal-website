import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): { message: string } {
    return { message: 'Hello' };
  }
}

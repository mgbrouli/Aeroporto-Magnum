import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './core/db/database.module.js'
import { EmployeesModule } from './employees/employees.module.js';

@Module({
  imports: [DatabaseModule ,EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

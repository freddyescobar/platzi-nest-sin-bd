import { Injectable, Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    // @Inject('TASKS') private tasks: any[],
    // private config: ConfigService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    // console.log(this.tasks);
    // const apiKey = this.config.get<string>('API_KEY');
    // const db = this.config.get('DATABASE_NAME');
    const apiKey = this.configService.apiKey;
    const db = this.configService.database.name;
    const port = this.configService.database.port;
    return `Hello World! ${apiKey} database: ${db} puerto: ${port}`;
  }
}

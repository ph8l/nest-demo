To watch for changes in your files, you can run the following command to start the application:


$ npm run start:dev

HINT
For quickly creating a CRUD controller with the validation built-in, you may use the CLI's CRUD generator: nest g resource [name].

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}

HINT
In order to take advantage of express typings (as in the request: Request parameter example above), install @types/express package.
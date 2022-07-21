import { Controller, Get } from '@nestjs/common';
import { Request } from 'express';
//url.com/policies
@Controller('policies')
export class PoliciesController {
    
    @Get()
    findPolicy(): string {
        return 'this action returns all cats'
    }
    
}

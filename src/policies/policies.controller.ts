import { Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';
//url.com/policies
@Controller('policies')
export class PoliciesController {
//return handles all HTTP fun. Status etc.
    //status 201
    @Post()
    addPolicy(): string {
        return 'policy added'
    }
    //status 200
    @Get()
    findPolicy(): string {
        return 'this is your policy'
    }
    
}

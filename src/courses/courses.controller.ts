import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CreateUseDto } from "../dto/create-course.dto";
import { UpdateCourseDto } from "src/dto/update-course.dto";

@Controller("courses")
export class CoursesController {
    public constructor(
        private readonly coursesService: CoursesService
    ) { }

    @Get()
    public findAll() {
        return this.coursesService.findAll();
    }

    @Get(":id")
    public findOne(@Param("id") id: number) {
        return this.coursesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    public create(@Body() body: CreateUseDto) {
        return this.coursesService.create(body);
    }

    @Patch(":id")
    public update(@Param("id") id: number, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.update(id, updateCourseDto);
    }

    @Delete(":id")
    public remove(@Param("id") id: number) {
        return this.coursesService.remove(id);
    }
}

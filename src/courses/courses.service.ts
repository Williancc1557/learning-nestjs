import { Injectable } from "@nestjs/common";
import type { UpdateCourseDto } from "src/dto/update-course.dto";
import type { Course } from "src/entities/course.entity";
import type { CreateUseDto } from "../dto/create-course.dto";

@Injectable()
export class CoursesService {
    private readonly courses: Array<Course> = [{
        id: 1,
        name: "Framework nestjs",
        description: "Framework nestjs",
        tags: ["noje.js", "nestjs", "typescript"],
    }];

    public findAll() {
        return this.courses;
    }

    public findOne(id: number) {
        return this.courses.find((course: Course) => course.id === id);
    }

    public create(createCourseDto: CreateUseDto) {
        const additionalId = 1;

        this.courses.push({
            description: createCourseDto.description,
            id: this.courses.length + additionalId,
            name: createCourseDto.name,
            tags: createCourseDto.tags,
        });
    }

    public update(id: number, updateCourseDto: UpdateCourseDto) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === id);

        this.courses[indexCourse] = {
            id: id,
            description: updateCourseDto.description,
            name: updateCourseDto.name,
            tags: updateCourseDto.tags,
        };
    }

    public remove(id: number) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === id);
        const courseNotFound = -1;
        if (indexCourse > courseNotFound) {
            const deleteServiceQuantity = 1;
            this.courses.splice(indexCourse, deleteServiceQuantity);
        }

    }
}

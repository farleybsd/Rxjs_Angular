import { Component, OnInit,inject  } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Category, Course } from '../../../shared/models/course';
import { CoursesService } from '../../../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  imports: [
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule
    ,MatButtonModule]  
})
export class CourseListComponent implements OnInit {
  public courseList: Course[] = [];
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  public categoryValue = Object.values(Category);
  public form!: FormGroup;

  totalCount: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    });
  }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
    this.form.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value ?? '',
          this.f.search.value ?? ''
        );
      }
    });
    this.getCourses(1, 5, '', '');
  }

  public doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

  public getCourses(
    currentPage: number,
    pageSize: number,
    category: string,
    search: string
  ): void {
    this.courseService
      .get(currentPage, pageSize, category, search)
      .subscribe((response: HttpResponse<any>) => {
        this.courseList = response.body as Course[];
        let totalCount = response.headers.get('X-Total-Count');
        this.totalCount = totalCount ? Number(totalCount) : 0;
      });
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}

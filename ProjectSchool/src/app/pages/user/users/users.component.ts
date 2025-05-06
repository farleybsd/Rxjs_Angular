import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarTitleComponent } from '../../../shared/components/toolbar-title/toolbar-title.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule, RouterOutlet, MatTabsModule,
    MatIconModule,ToolbarTitleComponent,MatButtonModule,FlexLayoutModule]
})
export class UsersComponent {
  selectedIndex = 1;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe(urlSegment => {
      const path = urlSegment[0]?.path;
      this.selectedIndex = this.getTabIndexFromPath(path);
    });
  }

  onTabChange(index: number): void {
    const paths = ['myProfile', 'myDisciplines', 'myConquests'];
    this.router.navigate([paths[index]], { relativeTo: this.route });
  }

  private getTabIndexFromPath(path: string | undefined): number {
    switch (path) {
      case 'myDisciplines': return 1;
      case 'myConquests': return 2;
      default: return 0; // myProfile or undefined
    }
  }
}

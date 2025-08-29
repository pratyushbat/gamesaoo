import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildContactComponent } from './child-contact/child-contact.component';
import { ParentContactComponent } from './parent-contact/parent-contact.component';

@NgModule({
  declarations: [ChildContactComponent, ParentContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'child', component: ChildContactComponent },
      { path: 'parent', component: ParentContactComponent },
    ]),
  ],
})
export class ContactModule {}

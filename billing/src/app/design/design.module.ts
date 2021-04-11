import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DesignModule { }

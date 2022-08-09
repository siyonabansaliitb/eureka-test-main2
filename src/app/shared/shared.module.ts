import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { StatsComponent } from './stats/stats.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    TestimonialComponent,
    StatsComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports:[    
    FormsModule,
    RouterModule
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    TestimonialComponent,
    StatsComponent,
    FooterComponent,
    NavbarComponent,
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }

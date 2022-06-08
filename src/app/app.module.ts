import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { RoundBlockDirective } from './shared/directives/round-block.directive';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgStyleComponent,
    RoundBlockDirective,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    PropertyBindingComponent,
    PipesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BuilderComponent} from './builder/builder.component';
import {FormListComponent} from './form-list/form-list.component';

const routes : Routes = [
    { path:'builder', component: BuilderComponent},
    { path:'form-list', component:FormListComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [BuilderComponent,FormListComponent]
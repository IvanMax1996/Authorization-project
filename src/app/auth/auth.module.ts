import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {PersistenceService} from "../shared/services/persistence.service";
import {HostDirective} from "./directives/host.directive";
import {TooltipComponent} from "../shared/components/tooltip/tooltip.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent, HostDirective, TooltipComponent, DashboardComponent],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {}

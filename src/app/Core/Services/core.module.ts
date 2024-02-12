import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/Shared/Models/shared.module";
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { environment } from "src/environments/environment";
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    ApolloModule
  ],
  exports:[
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `${environment.ApiPath}`
          }),
        } as ApolloClientOptions<any>;
      },
      deps: [HttpLink],
    },
  ],
})
export class CoreModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ShipsData, ShipsResponse } from 'src/app/Shared/Models/ships.interface';
import { environment } from 'src/environments/environment';
import { gql } from 'graphql-tag';
@Injectable({
  providedIn: 'root',
})
export class ShipsApiService {

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ){}


  getShipsData() {
    console.log("mama")
    return this.http.get<any>(
      `${environment.ApiPath}`
    );
  }
  getShipsData2() {
    console.log("mama2")

    return this.apollo.query({
      query: gql`
        query {
          vehicles {
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
              title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                smal
                medium
                large
              }
            }
          }
        }
      `
    })
  }
}

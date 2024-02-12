import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ShipsResponse } from 'src/app/Shared/Models/ships.interface';
import { gql } from 'graphql-tag';
@Injectable({
  providedIn: 'root',
})
export class ShipsApiService {

  constructor(
    private apollo: Apollo
  ){}
  getShipsData() {
    return this.apollo.query<ShipsResponse>({
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
                small
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

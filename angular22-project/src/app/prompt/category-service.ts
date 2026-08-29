import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Category } from './category.model'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  httpClient = inject(HttpClient)
  baseUrl: string = environment.apiUrl+ "categories"

  getCategory() {
    return this.httpClient.get<Category[]>(this.baseUrl)
  }
}

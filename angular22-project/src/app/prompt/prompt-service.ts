import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TerminalTokenSections } from '@primeuix/themes/types/terminal'
import { PromptModel } from './prompt.model'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  httpClient = inject(HttpClient)
  url = environment.apiUrl + `prompts`

  getPrompts() {
    return this.httpClient.get<PromptModel[]>(this.url)
  }
  getOnePrompt(id: number) {
    return this.httpClient.get<PromptModel>(this.url + '/' + id)
  }
  updateOnePrompt(id: number, prompt: { title: string; content: string; categoryId: number }) {
    return this.httpClient.put(this.url + '/' + id, prompt)
  }
  savePrompt(prompt: { title: string; content: string; categoryId: number }) {
    return this.httpClient.post<PromptModel>(this.url, prompt)
  }
  deletePrompt(id: number) {
    return this.httpClient.delete(this.url + '/' + id)
  }
}

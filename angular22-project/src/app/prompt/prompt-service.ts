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
  savePrompt(prompt :{ title: string; content: string; categoryId: number }) {
    return this.httpClient.post<PromptModel>(this.url, prompt)
  }
}

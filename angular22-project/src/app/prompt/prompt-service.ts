import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TerminalTokenSections } from '@primeuix/themes/types/terminal'
import Prompt = TerminalTokenSections.Prompt
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
}

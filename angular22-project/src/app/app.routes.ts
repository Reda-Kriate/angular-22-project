import { Routes } from '@angular/router'
import { PromptForm } from './prompt/prompt-form/prompt-form'
import { PromptList } from './prompt/prompt-list/prompt-list'

export const routes: Routes = [
  { path: '', redirectTo: 'prompts', pathMatch: 'full' },
  { path: 'prompts', component: PromptList },
  { path: 'prompts/create', component: PromptForm },
]

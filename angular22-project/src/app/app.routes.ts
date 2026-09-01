import { Routes } from '@angular/router'
import { PromptForm } from './prompt/prompt-form/prompt-form'
import { PromptList } from './prompt/prompt-list/prompt-list'
import { Auth } from './auth/auth'

export const routes: Routes = [
  { path: '', redirectTo: 'prompts', pathMatch: 'full' },
  { path: 'prompts', component: PromptList },
  { path: 'auth', component: Auth },
  { path: 'prompts/create', component: PromptForm },
  { path: 'prompts/:promptId/edit', component: PromptForm },
]

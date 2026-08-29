import { Component, inject } from '@angular/core'
import { CategoryService } from '../category-service'
import { Card } from 'primeng/card'
import { InputText } from 'primeng/inputtext'
import { Textarea } from 'primeng/textarea'
import { Select } from 'primeng/select'
import { toSignal } from '@angular/core/rxjs-interop'
import { Button } from 'primeng/button'
import { Router, RouterLink } from '@angular/router'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { PromptService } from '../prompt-service'

@Component({
  selector: 'app-prompt-form',
  imports: [
    Card,
    InputText,
    Textarea,
    Select,
    Button,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {
  categoryService = inject(CategoryService)
  promptService = inject(PromptService)
  router = inject(Router)
  category = toSignal(this.categoryService.getCategory(), { initialValue: [] })

  form = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.max(30)],
      nonNullable: true,
    }),
    content: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    categoryId: new FormControl(-1, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true,
    }),
  })

  submitForm() {
    console.log(this.form.value)
    if (this.form.invalid) return

    const prompt = this.form.getRawValue()
    this.promptService.savePrompt(prompt).subscribe(() => {
      void this.router.navigate(['/prompts'])
    })
  }
}

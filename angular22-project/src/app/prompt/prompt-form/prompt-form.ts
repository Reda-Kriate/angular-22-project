import { Component, effect, inject, input } from '@angular/core'
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

  promptId = input<number>()

  constructor() {
    effect(() => {
      const promptId = this.promptId()
      if (promptId) {
        this.promptService.getOnePrompt(promptId).subscribe(pr => {
          this.form.patchValue({
            title: pr.title,
            content: pr.content,
            categoryId: pr.category.id,
          })
        })
      }
    })
  }

  form = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(30)],
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
    this.form.markAllAsTouched()
    if (this.form.invalid) return

    const prompt = this.form.getRawValue()
    const promptId = this.promptId()

    if (promptId){
      this.promptService.updateOnePrompt(promptId, prompt ).subscribe(() => {
        void this.router.navigate(['/prompts'])
      })
    }else {
      this.promptService.savePrompt(prompt).subscribe(() => {
        void this.router.navigate(['/prompts'])
      })
    }


  }

  deletePrompt() {
      this.promptService.deletePrompt(this.promptId()!).subscribe(()=>{
        this.router.navigate(['/prompts'])
      })

  }
}

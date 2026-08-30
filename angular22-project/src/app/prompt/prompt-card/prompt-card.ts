import { Component, input } from '@angular/core'
import { PromptModel } from '../prompt.model'
import { Card } from 'primeng/card'
import { Button } from 'primeng/button'
import { Textarea } from 'primeng/textarea'
import { Tag } from 'primeng/tag'
import { ThumbsUp } from '@primeicons/angular/thumbs-up'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-prompt-card',
  imports: [Card, Button, Textarea, Tag, RouterLink],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  prompt = input.required<PromptModel>()

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}

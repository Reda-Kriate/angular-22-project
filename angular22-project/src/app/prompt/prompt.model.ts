import { Category } from './category.model'

export interface PromptModel {
    id: number,
    title: string,
    content: string,
    score: number,
    createdAt: string,
    category: Category,
    author: {
      id: number,
      username: string,
    },
    userVote: "up" | "down" | null,
}

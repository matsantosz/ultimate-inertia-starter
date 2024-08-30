export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  user: User
}

export type User = {
  id: number
  name: string
  email: string
  email_verified_at?: string
}

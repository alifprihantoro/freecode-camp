import { marked } from 'marked'

export default function markdown(e:string) {
  const html: any = marked.parse(e)
  return html
}

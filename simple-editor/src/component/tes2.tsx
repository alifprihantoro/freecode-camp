import { marked } from 'marked'

export default function markdown(e:string) {
  const html: any = marked.parse(e)
  console.log(html)
  return html
}

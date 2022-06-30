import BtnNew from '@comp/btn-new'
import QuoteAuthor from '@comp/quote-author'
import QuoteTxt from '@comp/quote-txt'
import Twitter from '@comp/twitter'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [data, add_data] = React.useState([
    {
      quote: '',
      author: '',
    },
  ])
  const [quote, upQuote] = React.useState('')
  const [auth_quote, up_auth_Quote] = React.useState('')
  const [loading, noLoading] = React.useState(false)
  const randomNum = (): number => Math.floor(Math.random() * 11)
  const url =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  React.useEffect(() => {
    async function getData() {
      const request = await fetch(url)
      const response = await request.json()
      add_data(response.quotes)
      const get_data = response.quotes[randomNum()]
      upQuote(get_data.quote)
      up_auth_Quote(get_data.author)
      noLoading(true)
    }
    getData()
  }, [])

  return (
    <>
      <div id="quote-box">
        <QuoteTxt />
        {!loading ? (
          <p>loading...</p>
        ) : (
          <>
            <QuoteAuthor quote={quote} author={auth_quote} />
            <button
              id="new-quote"
              onClick={function (e) {
                e.preventDefault()
                const get_data = data[randomNum()]
                upQuote(get_data.quote)
                up_auth_Quote(get_data.author)
              }}
            >
              New Quote
            </button>
            <Twitter quote={quote} />
          </>
        )}
      </div>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

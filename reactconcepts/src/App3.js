import React, { useState } from 'react'
import Article from './useeffects/Article'
import { useEffect } from 'react'
import Header from './useeffects/Header'

function App3() {
  const [viewArticle, setViewArticle] = useState(false)
  const [countView, setCountView] = useState(0)
  const [article, setArticle] = useState(null)

  const toggleView = ()=>{
    setViewArticle(!viewArticle)
  }
  useEffect(()=>{
    if (viewArticle) {
      setCountView(prev => prev + 1 )
    }
  },[viewArticle])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(Res => Res.json())
    .then(data =>setArticle(data))
    .catch(error => console.error('Error fetching article:', error))

  }, [])
  return (
    <div>
      <Header title = 'Comprende Hooks UseEffect' />
      <button onClick={toggleView} > {viewArticle ?'Hide Article': 'See article'}  </button>
      <p> l'article ouvert {countView} fois </p>
      {
        viewArticle && article && <Article title= {article.title} >
          <p>
            {article.body}
          </p>

        </Article>

      }

    </div>
  )
}

export default App3
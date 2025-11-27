import author from './author'
import category from './category'
import faq from './faq'
import landingPage from './landingPage'
import page from './page'
import post from './post'
import siteSettings from './siteSettings'

export const schemaTypes = [
  // Document types
  page,
  post,
  author,
  category,
  faq,

  // Singletons
  siteSettings,
  landingPage,
]

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Tipos para TypeScript
export interface SanityAuthor {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  role?: string
  bio?: string
}

export interface SanityCategory {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color?: string
}

export interface SanityPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  author: SanityAuthor
  category: SanityCategory
  tags?: string[]
  readTime: number
  featured?: boolean
  publishedAt: string
  content: any[] // Rich text content
}

// Función para obtener la URL de una imagen de Sanity
export function urlFor(source: any) {
  if (!source?.asset?._ref) {
    return 'https://via.placeholder.com/400x300?text=No+Image'
  }
  
  const [, id, dimensions, format] = source.asset._ref.split('-')
  const [width, height] = dimensions.split('x')
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`
}
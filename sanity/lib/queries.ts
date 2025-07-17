import { client, SanityPost } from './client'

// Query para obtener todos los posts
export async function getAllPosts(): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        _id,
        name,
        slug,
        image {
          asset
        },
        role,
        bio
      },
      category-> {
        _id,
        title,
        slug,
        description,
        color
      },
      tags,
      readTime,
      featured,
      publishedAt,
      content[] {
        ...,
        _type == 'image' => {
          ...,
          asset->
        }
      }
    }
  `)
}

// Query para obtener posts por categoría
export async function getPostsByCategory(categorySlug: string): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        _id,
        name,
        slug,
        image {
          asset
        },
        role,
        bio
      },
      category-> {
        _id,
        title,
        slug,
        description,
        color
      },
      tags,
      readTime,
      featured,
      publishedAt,
      content[] {
        ...,
        _type == 'image' => {
          ...,
          asset->
        }
      }
    }
  `, { categorySlug })
}

// Query para obtener posts destacados
export async function getFeaturedPosts(): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        _id,
        name,
        slug,
        image {
          asset
        },
        role,
        bio
      },
      category-> {
        _id,
        title,
        slug,
        description,
        color
      },
      tags,
      readTime,
      featured,
      publishedAt,
      content[] {
        ...,
        _type == 'image' => {
          ...,
          asset->
        }
      }
    }
  `)
}

// Query para obtener un post por slug
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        _id,
        name,
        slug,
        image {
          asset
        },
        role,
        bio
      },
      category-> {
        _id,
        title,
        slug,
        description,
        color
      },
      tags,
      readTime,
      featured,
      publishedAt,
      content[] {
        ...,
        _type == 'image' => {
          ...,
          asset->
        }
      }
    }
  `, { slug })
}

// Query para obtener todas las categorías
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color
    }
  `)
}

// Query para obtener posts relacionados (misma categoría, excluyendo el actual)
export async function getRelatedPosts(currentPostId: string, categoryId: string, limit: number = 3): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post" && _id != $currentPostId && category._ref == $categoryId] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        _id,
        name,
        slug,
        image {
          asset
        },
        role
      },
      category-> {
        _id,
        title,
        slug
      },
      readTime,
      publishedAt
    }
  `, { currentPostId, categoryId, limit })
}

// Exportar urlFor para que esté disponible desde queries
export { urlFor } from './client'
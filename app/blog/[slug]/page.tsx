"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { PortableText } from '@portabletext/react'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  Eye, 
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  ChevronRight
} from "lucide-react"
import { getPostBySlug, urlFor } from "@/sanity/lib/queries"
import { client, SanityPost } from "@/sanity/lib/client"

// Componentes personalizados para PortableText
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          className="w-full rounded-lg my-8"
          src={urlFor(value)}
          alt={value.alt || ' '}
          loading="lazy"
        />
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel}
          className="text-emerald-600 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h4>,
    normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-emerald-200 bg-emerald-50 text-emerald-800 italic px-6 py-4 my-6 rounded-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    number: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
}

interface RelatedPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage?: {
    asset: any
    alt?: string
  }
  category?: {
    title: string
  }
  readTime: number
  publishedAt: string
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  const [post, setPost] = useState<SanityPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return
      
      try {
        setLoading(true)
        const postData = await getPostBySlug(slug)
        
        if (!postData) {
          setError("Post not found")
          setLoading(false)
          return
        }
        
        setPost(postData)
        
        // Fetch related posts from same category
        if (postData.category?.title) {
          const related = await client.fetch(`
            *[_type == "post" && _id != $currentId && category->title == $categoryTitle] | order(publishedAt desc) [0...3] {
              _id,
              title,
              slug,
              mainImage {
                asset,
                alt
              },
              category-> {
                title
              },
              readTime,
              publishedAt
            }
          `, { 
            currentId: postData._id, 
            categoryTitle: postData.category.title 
          })
          setRelatedPosts(related)
        }
        
        setLoading(false)
      } catch (err) {
        console.error('Error fetching post:', err)
        setError("Failed to load post")
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header showForm={showForm} setShowForm={setShowForm} />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header showForm={showForm} setShowForm={setShowForm} />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Return to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const shareUrl = `https://meerkat-lending.com/blog/${post.slug.current}`

  const handleShare = (platform: string) => {
    const text = post.title
    const url = shareUrl

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
        break
    }
    setShowShareMenu(false)
  }

  // Función para obtener URL de imagen con fallback
  const getImageUrl = (image: any) => {
    if (image?.asset) {
      return urlFor(image)
    }
    return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop'
  }

  // Función para obtener avatar del autor con fallback
  const getAuthorAvatar = (author: any) => {
    if (author?.image?.asset) {
      return urlFor(author.image)
    }
    return 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop'
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showForm={showForm} setShowForm={setShowForm} />
      
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Breadcrumb */}
        <nav className="py-4 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-emerald-600">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900">{post.category?.title}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-6 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              <div className="mb-6">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
                  {post.category?.title}
                </Badge>
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Meta Info */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <img 
                    src={getAuthorAvatar(post.author)} 
                    alt={post.author?.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{post.author?.name}</p>
                    <p className="text-sm text-gray-600">{post.author?.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  
                  {showShareMenu && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px]">
                      <div className="p-2">
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          <Twitter className="h-4 w-4 mr-3 text-blue-400" />
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          <Facebook className="h-4 w-4 mr-3 text-blue-600" />
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          <Linkedin className="h-4 w-4 mr-3 text-blue-700" />
                          Share on LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="flex items-center w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          <Copy className="h-4 w-4 mr-3 text-gray-600" />
                          Copy link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src={getImageUrl(post.mainImage)} 
                alt={post.mainImage?.alt || post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <article className="lg:col-span-8">
                  <div className="prose prose-lg max-w-none">
                    {post.content && (
                      <PortableText 
                        value={post.content} 
                        components={portableTextComponents}
                      />
                    )}
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-4">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-gray-600 border-gray-300 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 cursor-pointer">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Author Bio */}
                  <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={getAuthorAvatar(post.author)} 
                        alt={post.author?.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{post.author?.name}</h4>
                        <p className="text-emerald-700 font-medium mb-3">{post.author?.role}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{post.author?.bio}</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Sidebar - resto del código permanece igual */}
                <aside className="lg:col-span-4">
                  <div className="sticky top-8 space-y-8">
                    {/* Newsletter Signup */}
                    <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg border-0">
                      
                    </Card>

                    {/* Quick Calculator 
                    <Card className="bg-white shadow-md border-0">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Loan Calculator</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-gray-600 block mb-1">Loan Amount</label>
                            <input type="number" placeholder="$25,000" className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-600 block mb-1">Interest Rate</label>
                            <input type="number" placeholder="6.5%" className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                          </div>
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
                            Calculate Payment
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    */}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts - resto del código permanece igual */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost._id} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
                      <div className="relative">
                        <img 
                          src={getImageUrl(relatedPost.mainImage)} 
                          alt={relatedPost.mainImage?.alt || relatedPost.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-emerald-600 text-white border-0 text-xs">
                            {relatedPost.category?.title}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(relatedPost.publishedAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {relatedPost.readTime} min
                          </span>
                        </div>
                        <Link href={`/blog/${relatedPost.slug.current}`}>
                          <Button variant="ghost" className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                            Read Article
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Apply for Your Loan?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Use these tips to get pre-qualified with better rates and terms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/">
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                  Check Your Rate
                </Button>
                </a>
              </div>
              <p className="text-sm text-emerald-200 mt-4">
                No impact to credit score • Get rates in minutes
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

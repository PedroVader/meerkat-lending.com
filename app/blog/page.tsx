"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye, Share2, Bookmark } from "lucide-react"
import { getAllPosts, getAllCategories, urlFor } from "@/sanity/lib/queries"
import { SanityPost } from "@/sanity/lib/client"

interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showForm, setShowForm] = useState(false)
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData, categoriesData] = await Promise.all([
          getAllPosts(),
          getAllCategories()
        ])
        
        setPosts(postsData)
        setCategories([{ _id: 'all', title: 'All', slug: { current: 'all' } }, ...categoriesData])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header showForm={showForm} setShowForm={setShowForm} />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category?.title === selectedCategory)
  
  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  // Función para obtener URL de imagen con fallback
  const getImageUrl = (image: any) => {
    if (image?.asset) {
      return urlFor(image)
    }
    return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop'
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
        {/* Header Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Financial Insights & Guides
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                Expert advice, industry insights, and practical tips to help you make smarter financial decisions
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-emerald-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{posts.length}+</p>
                  <p className="text-sm">Expert Articles</p>
                </div>
                <div className="text-center border-l border-emerald-400 pl-6">
                  <p className="text-3xl font-bold text-white">2M+</p>
                  <p className="text-sm">Monthly Readers</p>
                </div>
                <div className="text-center border-l border-emerald-400 pl-6">
                  <p className="text-3xl font-bold text-white">4.9★</p>
                  <p className="text-sm">Reader Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category._id}
                  variant={selectedCategory === category.title ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.title)}
                  className={`${
                    selectedCategory === category.title
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "text-gray-600 hover:text-emerald-600 hover:border-emerald-600"
                  } transition-all duration-200`}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "All" && featuredPosts.length > 0 && (
          <section className="py-12 bg-gradient-to-br from-emerald-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Featured Articles</h2>
                <Badge className="ml-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                  Editor's Choice
                </Badge>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={post._id} className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group ${index === 0 ? 'lg:col-span-2' : ''}`}>
                    <div className={`${index === 0 ? 'lg:flex' : ''}`}>
                      <div className={`relative ${index === 0 ? 'lg:w-1/2' : ''}`}>
                        <img 
                          src={getImageUrl(post.mainImage)} 
                          alt={post.mainImage?.alt || post.title}
                          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${index === 0 ? 'h-64 lg:h-full' : 'h-48'}`}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-emerald-600 text-white border-0">
                            {post.category?.title}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                            <Eye className="h-4 w-4 text-gray-600" />
                          </div>
                        </div>
                      </div>
                      <CardContent className={`p-6 ${index === 0 ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                        <div className="flex items-center space-x-4 mb-3">
                          <img 
                            src={getAuthorAvatar(post.author)} 
                            alt={post.author?.name}
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-100"
                          />
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{post.author?.name}</p>
                            <p className="text-xs text-gray-600">{post.author?.role}</p>
                          </div>
                        </div>
                        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                          {post.title}
                        </h3>
                        <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime} min read
                            </span>
                          </div>
                          <Link href={`/blog/${post.slug.current}`}>
                            <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0">
                              Read more
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            {regularPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found in this category.</p>
                <Button 
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700"
                >
                  View All Articles
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post._id} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
                    <div className="relative">
                      <img 
                        src={getImageUrl(post.mainImage)} 
                        alt={post.mainImage?.alt || post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-emerald-600 text-white border-0 text-xs">
                          {post.category?.title}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                          <Share2 className="h-3 w-3 text-gray-600" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src={getAuthorAvatar(post.author)} 
                          alt={post.author?.name}
                          className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-100"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{post.author?.name}</p>
                          <p className="text-xs text-gray-600">{post.author?.role}</p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs text-gray-600 border-gray-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}min
                          </span>
                        </div>
                        <Link href={`/blog/${post.slug.current}`}>
                          <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0">
                            Read
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Stay Updated with Financial Insights
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Get weekly tips, market updates, and exclusive guides delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-emerald-200 mt-4">
                Join 50,000+ readers • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
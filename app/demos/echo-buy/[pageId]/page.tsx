"use client"

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react'
import { echoBuyCategories, EchoBuyPage } from '@/data/echoBuyPages'

export default function EchoBuyDemoPage() {
  const params = useParams()
  const router = useRouter()
  const [page, setPage] = useState<EchoBuyPage | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const pageId = params.pageId as string
    
    // Find the page in categories
    let foundPage: EchoBuyPage | null = null
    for (const category of echoBuyCategories) {
      const page = category.pages.find(p => p.id === pageId)
      if (page) {
        foundPage = page
        break
      }
    }
    
    if (foundPage) {
      setPage(foundPage)
    } else {
      // Redirect to home if page not found
      router.push('/')
    }
    setLoading(false)
  }, [params.pageId, router])

  const handleBackToShowcase = () => {
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-pink-500" />
          <p className="text-gray-600">Loading Echo Buy demo...</p>
        </div>
      </div>
    )
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Page not found</h1>
          <Button onClick={handleBackToShowcase} className="bg-pink-500 hover:bg-pink-600">
            Back to Showcase
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleBackToShowcase}
                variant="outline"
                size="sm"
                className="border-pink-200 text-pink-600 hover:bg-pink-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Showcase
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{page.title}</h1>
                <p className="text-sm text-gray-600">{page.category === 'frontend' ? 'Frontend' : 'Admin'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-xs font-medium">
                {page.category === 'frontend' ? 'Frontend' : 'Admin'}
              </span>
              <Button
                onClick={() => window.open(`/demos/echo-buy/${page.id}/demo.html`, '_blank')}
                variant="outline"
                size="sm"
                className="border-pink-200 text-pink-600 hover:bg-pink-50"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="flex-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            {/* Page Preview */}
            <div className="relative h-96 w-full overflow-hidden">
              <div className={`w-full h-full ${
                page.category === 'frontend' 
                  ? 'bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400'
                  : 'bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400'
              }`}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-4">{page.title.charAt(0)}</div>
                    <div className="text-xl opacity-80">{page.title}</div>
                    <div className="text-sm opacity-60 mt-2">{page.description}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page Info */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{page.title}</h3>
                  <p className="text-gray-600 mb-6">{page.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {page.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    {page.category === 'frontend' ? (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                          Responsive design for all devices
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Modern UI/UX with smooth animations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Optimized performance and loading
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Comprehensive data management
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Real-time analytics and reporting
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                          Secure admin authentication
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
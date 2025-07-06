"use client"

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react'
import { websites, Website } from '@/data/websites'

export default function DemoPage() {
  const params = useParams()
  const router = useRouter()
  const [website, setWebsite] = useState<Website | null>(null)
  const [loading, setLoading] = useState(true)
  const [iframeLoading, setIframeLoading] = useState(true)

  useEffect(() => {
    const slug = params.slug as string
    const foundWebsite = websites.find(w => w.slug === slug)
    
    if (foundWebsite) {
      setWebsite(foundWebsite)
    } else {
      // Redirect to 404 or home if website not found
      router.push('/')
    }
    setLoading(false)
  }, [params.slug, router])

  const handleBackToPortfolio = () => {
    router.push('/')
  }

  const handleIframeLoad = () => {
    setIframeLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-orange-500" />
          <p className="text-gray-600">Loading demo...</p>
        </div>
      </div>
    )
  }

  if (!website) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Demo not found</h1>
          <Button onClick={handleBackToPortfolio} className="bg-orange-500 hover:bg-orange-600">
            Back to Portfolio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleBackToPortfolio}
                variant="outline"
                size="sm"
                className="border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{website.title}</h1>
                <p className="text-sm text-gray-600">{website.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {website.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
              <Button
                onClick={() => window.open(website.demoUrl, '_blank')}
                variant="outline"
                size="sm"
                className="border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="flex-1 relative">
        {iframeLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-orange-500" />
              <p className="text-gray-600">Loading {website.title}...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={website.demoUrl}
          className="w-full h-[calc(100vh-80px)] border-0"
          onLoad={handleIframeLoad}
          title={website.title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>

      {/* Footer Info */}
      <div className="bg-white border-t border-orange-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-800">{website.title}</h3>
              <p className="text-sm text-gray-600">{website.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {website.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

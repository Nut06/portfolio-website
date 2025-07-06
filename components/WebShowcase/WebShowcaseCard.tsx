"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Website } from '@/data/websites'

interface WebShowcaseCardProps {
  website: Website;
}

export default function WebShowcaseCard({ website }: WebShowcaseCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    router.push(`/demos/${website.slug}`)
  }

  return (
    <div
      className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 transform transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Placeholder gradient background instead of image */}
        <img src={website.image} alt={website.slug} />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium bg-orange-500 px-3 py-1 rounded-full">
                {website.category}
              </span>
              {website.featured && (
                <span className="text-white text-sm font-medium bg-yellow-500 px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {website.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {website.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {website.technologies.map((tech, index) => (
            <Badge
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* View Demo Button */}
        {website.featured && (
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 px-4 rounded-lg transition-all duration-300">
          View Demo
        </button>
        )}
      </div>
    </div>
  )
} 
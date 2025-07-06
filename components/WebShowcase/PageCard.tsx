"use client"

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { EchoBuyPage } from '@/data/echoBuyPages'

interface PageCardProps {
  page: EchoBuyPage;
  onPageClick: (pageId: string, category: 'frontend' | 'admin') => void;
}

export default function PageCard({ page, onPageClick }: PageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    onPageClick(page.id, page.category)
  }

  return (
    <div
      className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        {/* Placeholder gradient background */}
        <div className={`w-full h-full ${
          page.category === 'frontend' 
            ? 'bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400'
            : 'bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400'
        }`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-center">
              <div className="text-4xl font-bold mb-2">{page.title.charAt(0)}</div>
              <div className="text-sm opacity-80">{page.category}</div>
            </div>
          </div>
        </div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium bg-pink-500 px-3 py-1 rounded-full">
                {page.category === 'frontend' ? 'Frontend' : 'Admin'}
              </span>
              <span className="text-white text-sm font-medium bg-purple-500 px-3 py-1 rounded-full">
                {page.technologies[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {page.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {page.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {page.technologies.map((tech, index) => (
            <Badge
              key={index}
              className="px-2 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
} 
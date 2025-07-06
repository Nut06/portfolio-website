"use client"

import { useState } from 'react'
import ShinyText from '@/components/ShinyText'
import WebShowcaseCard from './WebShowcaseCard'
import { websites, Website } from '@/data/websites'
import { Badge } from '@/components/ui/badge'

interface WebShowcaseSectionProps {
  language: 'th' | 'en';
}

export default function WebShowcaseSection({ language }: WebShowcaseSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(websites.map(website => website.category)))]

  const filteredWebsites = selectedCategory === 'all' 
    ? websites 
    : websites.filter(website => website.category === selectedCategory)

  const translations = {
    en: {
      title: "Web Development Showcase",
      viewDemo: "View Demo",
      all: "All",
    },
    th: {
      title: "ผลงาน Web Development",
      viewDemo: "ดูตัวอย่าง",
      all: "ทั้งหมด",
    }
  }

  const t = translations[language]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-5 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          <ShinyText 
            text={t.title}
            disabled={false}
            speed={3}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          />
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                  : 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300'
              }`}
            >
              {category === 'all' ? t.all : category}
            </Badge>
          ))}
        </div>

        {/* Websites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWebsites.map((website) => (
            <WebShowcaseCard key={website.id} website={website} />
          ))}
        </div>

        {/* Empty State */}
        {filteredWebsites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === 'th' ? 'ไม่พบผลงานในหมวดหมู่นี้' : 'No projects found in this category'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
} 
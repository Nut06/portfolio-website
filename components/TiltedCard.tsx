import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface TiltedCardProps {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
  className?: string;
  // Project specific props
  category?: string;
  title?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  icon?: React.ReactNode;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText,
  captionText,
  containerHeight,
  containerWidth,
  imageHeight,
  imageWidth,
  rotateAmplitude = 8,
  scaleOnHover = 1.02,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
  className = "",
  // Project specific props
  category,
  title,
  description,
  technologies,
  image,
  demoLink,
  githubLink,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use project data if available, otherwise use direct props
  const finalImageSrc = image || imageSrc || "/placeholder.svg";
  const finalAltText = altText || title || "Project Image";
  const finalCaptionText = captionText || title;

  // Check if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform motion values to rotation
  const rotateX = useTransform(y, [-1, 1], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(x, [-1, 1], [-rotateAmplitude, rotateAmplitude]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    
    x.set(mouseX / (rect.width / 2));
    y.set(mouseY / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  if (isMobile && showMobileWarning) {
    return (
      <div className={`tilted-card-mobile-warning ${className}`}>
        <p>This component works best on desktop devices</p>
      </div>
    );
  }

  return (
    <div className={`tilted-card-container ${className}`}>
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isHovered ? scaleOnHover : 1,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        whileHover={isMobile ? {} : { scale: scaleOnHover }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        {/* CardHeader - Same as original */}
        <div className="pb-4 px-6 pt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              {icon}
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
              {category}
            </Badge>
          </div>
          <h3 className="text-xl group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
        </div>

        {/* CardContent - Same as original */}
        <div className="space-y-4 px-6 pb-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
            <Image
              src={finalImageSrc}
              alt={finalAltText}
              width={300}
              height={200}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <p className="text-gray-600 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, techIndex) => (
              <Badge key={techIndex} variant="outline" className="text-xs border-orange-200 text-orange-700">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons - Same as original */}
          {(demoLink || githubLink) && (
            <div className="flex gap-2 pt-2">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a>
              )}
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TiltedCard; 
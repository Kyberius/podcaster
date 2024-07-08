import React from 'react'
interface AudioPlayerProps {
  src: string
  className?: string
}
export const AudioPlayer = ({ src, className }: AudioPlayerProps) => {
  return <audio src={src} controls className={className} />
}

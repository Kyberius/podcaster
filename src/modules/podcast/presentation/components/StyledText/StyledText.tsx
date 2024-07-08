import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface StyledTextProps {
  children: string
  className?: string
}
export const StyledText = ({ children, className }: StyledTextProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className={className}
    >
      {children}
    </Markdown>
  )
}

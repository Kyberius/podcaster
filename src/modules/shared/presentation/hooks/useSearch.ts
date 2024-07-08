import Fuse from 'fuse.js'
import { useCallback, useMemo, useState } from 'react'

export default function useSearch<T>(
  list: T[],
  keys: string[],
): [T[], (term: string) => void] {
  const [resultList, setResultList] = useState<T[]>([])

  const fuse = useMemo(() => new Fuse(list, { keys }), [list, keys])

  const setSearchTerm = useCallback(
    (term: string) => {
      const result = fuse.search(term)
      if (result.length) setResultList(result.map((res) => res.item))
    },
    [fuse],
  )

  return [resultList, setSearchTerm]
}

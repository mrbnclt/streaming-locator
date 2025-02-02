import { createContext, Dispatch, SetStateAction } from 'react'

export interface Metadata {
  showType: string
  showTitle: string
}

export interface MetadataContext {
  metadata: Metadata
  setMetadata: Dispatch<SetStateAction<Metadata>>
}

export const MetadataContext = createContext<MetadataContext>({
  metadata: { showType: '', showTitle: '' },
  setMetadata: () => {
    console.error('DEFAULT CONTEXT SETTER USED')
  },
})

import { ReactNode, useState } from 'react'
import { MetadataContext } from '..'
import { Metadata } from './MetadataContext'
import PropTypes from 'prop-types'

interface MetadataContextProps {
  children: ReactNode
}

export const MetadataContextProvider: React.FC<MetadataContextProps> = ({
  children,
}) => {
  const [metadata, setMetadata] = useState<Metadata>({
    showType: '',
    showTitle: '',
  })
  return (
    <MetadataContext.Provider value={{ metadata, setMetadata }}>
      {children}
    </MetadataContext.Provider>
  )
}

MetadataContextProvider.propTypes = {
  children: PropTypes.node,
}

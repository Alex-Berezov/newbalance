import React, { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import ImageViewer from 'react-simple-image-viewer'

import CoreGrey1 from '../../../../assets/images/574CoreGrey/574-core-1.png'
import CoreGrey2 from '../../../../assets/images/574CoreGrey/574-core-2.png'
import CoreGrey3 from '../../../../assets/images/574CoreGrey/574-core-3.png'
import CoreGrey4 from '../../../../assets/images/574CoreGrey/574-core-4.png'
import CoreGrey5 from '../../../../assets/images/574CoreGrey/574-core-5.png'
import CoreGrey6 from '../../../../assets/images/574CoreGrey/574-core-6.png'

const ImagesViewer: FC = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = [
    CoreGrey1,
    CoreGrey2,
    CoreGrey3,
    CoreGrey4,
    CoreGrey5,
    CoreGrey6,
  ]

  const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <Styled.Root>
      {images.map((src, index) => (
        <Styled.Image
          src={src}
          onClick={() => openImageViewer(index)}
          key={src}
          alt={src}
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </Styled.Root>
  )
}

export default ImagesViewer

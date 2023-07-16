import { Box, Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'
import GalleryTab from './GalleryTab'

Gallery.propTypes = { images: PropTypes.array }

function Gallery({ images }) {
  
  return (
    <Box className="flex flex-col-reverse">
       
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Box className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Box>
      </div>
      <Box className="aspect-square w-full">
        {images.map((image) => (
          <Box key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Gallery

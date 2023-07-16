import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image, Tab } from '@chakra-ui/react'
import clsx from 'clsx'

GalleryTab.propTypes = {
  image: PropTypes.object,
}

function GalleryTab({ image }) {
  return (
    <Box className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {/* {({ selected }) => ( */}
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={clsx(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              // selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      {/* )} */}
    </Box>
  )
}

export default GalleryTab

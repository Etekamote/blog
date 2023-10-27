import React from 'react'

const useFormatTags = (tags: string | undefined) => {

return tags? tags.split(", ") : []
}

export default useFormatTags
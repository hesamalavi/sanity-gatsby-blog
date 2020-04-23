import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({
      node
    }) => < span > {
      node.author.name
    } < /span>,
    mainImage: Figure,
    code: props => < pre > {
      JSON.stringify(props, null, 2)
    } < /pre>
  }
}

export default serializers

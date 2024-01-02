import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>blogs</h1>
        <Button><Link href="/blogs/new">Create a Blog Post</Link></Button>
    </div>
  )
}

export default page
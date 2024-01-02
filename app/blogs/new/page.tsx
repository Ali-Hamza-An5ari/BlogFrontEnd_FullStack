'use client'
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes';

const NewBlogPost = () => {
  return (
    //max-w-xl is a tailwind class that sets the max width of the element to 36rem or alias as xl
    //space-y-3 is a tailwind class that sets the max height of the element to 0.75rem or alias as 3
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder="Blog Title" />
        </TextField.Root>
        <TextArea placeholder="Blog Content" />
        <Button> Create Blog Post </Button>
    </div>
  )
}

export default NewBlogPost
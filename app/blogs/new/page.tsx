'use client'
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import {useForm,Controller} from 'react-hook-form';
import 'easymde/dist/easymde.min.css';


const NewBlogPost = () => {

  //de structure register from useFrom which is using Blog. 
  //the register can be used to get the value of the input in the same blue print as the model specified in it (Blog in our case)
  //control handles to get the value of the input
  //handleSubmit handles the submit of the form
  const {register,control,handleSubmit} = useForm<Blog>()
  //console.log(register('title'))

  return (
    //max-w-xl is a tailwind class that sets the max width of the element to 36rem or alias as xl
    //space-y-3 is a tailwind class that sets the max height of the element to 0.75rem or alias as 3
    
    //<div className='max-w-xl space-y-3'>
    //after handlesubmit we changed to form to apply submission to the form
     //just needed to restrt app after div replaced with form and onSUbmit applied
    <form className='max-w-xl space-y-3' 
    onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField.Root>
            <TextField.Input placeholder="Blog Title" {...register('title')}/>
        </TextField.Root>
        {/* <TextArea placeholder="Blog Content" /> */}

      
        <Controller 
          name='content'
          control={control}
          // renders the component and register the 
          render={({field}) => <SimpleMDE placeholder="Blog Content" {...field}/>}
        />
       
        <Button > Create Blog Post </Button>
    </form>
  )
}

export default NewBlogPost
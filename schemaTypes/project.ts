import { defineField, defineType } from "sanity"; // these two methods help us to define our schema 😉

export const project = defineType({
    name:'project',   // this will be the API key name we use from frontend repo to retrive this schema's data 😎
    title: 'Project🎄',  // the title of this schema we will see in the dashboard 😎
    type: 'document',
    fields: [
        defineField({   // field-1
            name:'name',
            title: 'Project Name😎',
            type: 'string',
            validation: rule => rule.required().min(10).max(50),
        }),
        defineField({   // field-2
            name: 'company',
            title: 'Company Name😎',
            type: 'string',
            validation: rule => rule.required(), 
            // validation: rule => rule.email() //to make the filed only accept a valid email😉 
        }),
        defineField({   // field-3
            name: 'slug',
            title: 'Slug-Ending of URL to see the project work😎',
            type: 'string',
            validation: rule => rule.required(),
        }),
        defineField({   // field-4 (image)
            name: 'image',
            title: 'Image😎',
            type: 'image',
            options: {hotspot: true}, // to put different focus on the image😉
            validation: rule => rule.required(),
        }),
        defineField({   // field-5  ()
            name: 'dateAccomplished',
            title: 'When did you do this project?😎',
            type: 'date',
            options:{dateFormat: 'YYYY-MM'}, // to format the date to YYYY-MM😉
            validation: rule => rule.required(),
        }),
        defineField({   // field-6 (array)
            name: 'content',
            title: 'Project Content😎',
            type: 'array',
            of: [ {type: 'block'}, {type: 'image', options:{hotspot: true}}],
            validation: rule => rule.required()
        }),
        defineField({   // field-7 (array)
            name: 'stack',
            title: 'Teck Stack😎',
            type: 'array',
            of: [ {type: 'string'} ],
            options: {layout: 'tags'}, 
        })
    ]

})
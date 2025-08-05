import { defineField, defineType } from "sanity"; // these two methods help us to define our schema 😉

export const skills =defineType({
    name: 'skills',
    title: 'Skills🎁',
    type: 'document',
    fields: [
        defineField({
            name: 'skillsList',
            title: 'Skills List🎭',
            type: 'array',
            of: [
                {type: 'object',
                    fields:[
                        defineField({
                            name: 'name',
                            title: 'Skill Name👩‍🦰',
                            type: 'string',
                            validation: rule=> rule.required(),
                        }),
                        defineField({
                            name: 'iconClass',
                            title: 'Icon Class Name👲',
                            type: 'string',
                            validation: rule => rule.required(),
                        }),
                    ]
                }
            ]
        })
    ]
})
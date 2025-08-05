import { defineField, defineType } from "sanity"; // these two methods help us to define our schema 😉

export const devExperience = defineType({
    name: 'devExperience',  // this will be the API key name we use from frontend repo to retrive this schema's data 😎
    title: ' Work Experience 🤑', // the title of this schema we will see in the dashboard 😎
    type: 'document',
    fields: [
        defineField({  //field 1
            name:'jobTitle', 
            title: 'Job Title😎',
            type: 'string',
            validation: rule => rule.required().min(10).max(80),
        }),
        defineField({  //field 2
            name:'company',
            title: 'Company😎',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({  //field 3
            name:'startDate',
            title: 'Start Date😎',
            type: 'date',
            options: {dateFormat: 'YYYY-MM-DD'}, //to format the date to YYYY-MM-DD😉
            validation: rule => rule.required(),
        }),
        defineField({  //field 4
            name:'endDate',
            title:'End Date😎',
            type:'date',
            options: {dateFormat: 'YYYY-MM'} //to format the date to YYYY-MM😉
        })
    ]
})
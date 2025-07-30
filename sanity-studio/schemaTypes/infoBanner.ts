import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'infoBanner',
  title: 'Info Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Banner Text',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Leave empty to hide the button',
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url',
      description: 'Where the button should link to',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
      description: 'Only one banner should be active at a time',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'isActive',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle ? 'Active' : 'Inactive',
      }
    },
  },
}) 
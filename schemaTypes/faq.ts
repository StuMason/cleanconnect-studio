import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'General Questions', value: 'general'},
          {title: 'For Clients', value: 'clients'},
          {title: 'For Cleaners', value: 'cleaners'},
          {title: 'Payments & Pricing', value: 'payments'},
          {title: 'Safety & Trust', value: 'safety'},
          {title: 'Account & Settings', value: 'account'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within each category',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
    },
    prepare({title, category}) {
      const categoryLabels: Record<string, string> = {
        general: 'General',
        clients: 'Clients',
        cleaners: 'Cleaners',
        payments: 'Payments',
        safety: 'Safety',
        account: 'Account',
      }
      return {
        title,
        subtitle: categoryLabels[category] || category,
      }
    },
  },
  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'headline', type: 'string', title: 'Headline', validation: (Rule) => Rule.required()},
        {name: 'subheadline', type: 'text', title: 'Subheadline', rows: 2},
        {name: 'ctaPrimary', type: 'string', title: 'Primary CTA Text'},
        {name: 'ctaSecondary', type: 'string', title: 'Secondary CTA Text'},
      ],
    }),
    defineField({
      name: 'howItWorks',
      title: 'How It Works Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'steps',
          type: 'array',
          title: 'Steps',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', type: 'string', title: 'Step Title'},
                {name: 'description', type: 'text', title: 'Description', rows: 2},
                {
                  name: 'icon',
                  type: 'string',
                  title: 'Icon',
                  description: 'Lucide icon name (e.g., clipboard, inbox, credit-card, sparkles)',
                },
              ],
              preview: {
                select: {title: 'title', icon: 'icon'},
                prepare({title, icon}) {
                  return {title, subtitle: icon}
                },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'subtitle', type: 'text', title: 'Section Subtitle', rows: 2},
        {
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', type: 'string', title: 'Feature Title'},
                {name: 'description', type: 'text', title: 'Description', rows: 2},
                {
                  name: 'icon',
                  type: 'string',
                  title: 'Icon',
                  description: 'Lucide icon name (e.g., shield-check, banknotes, lock-closed)',
                },
              ],
              preview: {
                select: {title: 'title', icon: 'icon'},
                prepare({title, icon}) {
                  return {title, subtitle: icon}
                },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {
          name: 'items',
          type: 'array',
          title: 'Testimonials',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'quote', type: 'text', title: 'Quote', rows: 3},
                {name: 'author', type: 'string', title: 'Author Name'},
                {name: 'role', type: 'string', title: 'Role/Location'},
                {
                  name: 'rating',
                  type: 'number',
                  title: 'Rating',
                  validation: (Rule) => Rule.min(1).max(5),
                  initialValue: 5,
                },
              ],
              preview: {
                select: {title: 'author', subtitle: 'role'},
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subtitle', type: 'text', title: 'Subtitle', rows: 2},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'},
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(170),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing Page Content',
      }
    },
  },
})

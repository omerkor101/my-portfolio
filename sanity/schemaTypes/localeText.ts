import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Localized Text',
  name: 'localeText',
  type: 'object',
  fields: [
    defineField({
      title: 'Türkçe',
      name: 'tr',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'İngilizce',
      name: 'en',
      type: 'text',
    }),
  ],
});
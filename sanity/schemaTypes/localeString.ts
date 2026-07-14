import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      title: 'Türkçe',
      name: 'tr',
      type: 'string',
      validation: (Rule) => Rule.required(), // Türkçe zorunlu olsun
    }),
    defineField({
      title: 'İngilizce',
      name: 'en',
      type: 'string',
    }),
  ],
});
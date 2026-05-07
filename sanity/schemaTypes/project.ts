export const project = {
    name: 'project',
    title: 'Projelerim',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Proje Başlığı',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Açıklama',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Proje Görseli',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'link',
            title: 'Proje Linki',
            type: 'url',
        },
        {
            name: 'tags',
            title: 'Teknolojiler / Etiketler',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }
    ],
}
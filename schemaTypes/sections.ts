import {defineType, defineField} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
  ],
})

export const statsContent = defineType({
  name: 'statsContent',
  title: 'Stats Content',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

export const iconCardGrid = defineType({
  name: 'iconCardGrid',
  title: 'Icon Card Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({name: 'variant', title: 'Variant', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})

export const contentWithImage = defineType({
  name: 'contentWithImage',
  title: 'Content With Image',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {list: ['left', 'right']},
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

export const teamGrid = defineType({
  name: 'teamGrid',
  title: 'Team Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'designation', title: 'Designation', type: 'string'}),
            defineField({name: 'bio', title: 'Bio', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
})

export const aboutHero = defineType({
  name: 'aboutHero',
  title: 'About Hero',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
  ],
})

export const aboutIntro = defineType({
  name: 'aboutIntro',
  title: 'About Intro',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({name: 'points', title: 'Points', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'highlights', title: 'Highlights', type: 'array', of: [{type: 'string'}]}),
  ],
})

export const highlightQuote = defineType({
  name: 'highlightQuote',
  title: 'Highlight Quote',
  type: 'object',
  fields: [
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
  ],
})

export const reasonsGrid = defineType({
  name: 'reasonsGrid',
  title: 'Reasons Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})

export const valuesSection = defineType({
  name: 'valuesSection',
  title: 'Values Section',
  type: 'object',
  fields: [
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})

export const statsProgress = defineType({
  name: 'statsProgress',
  title: 'Stats Progress',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
  ],
})

export const facilityFeature = defineType({
  name: 'facilityFeature',
  title: 'Facility Feature',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {list: ['left', 'right']},
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
  ],
})

export const patientCareServices = defineType({
  name: 'patientCareServices',
  title: 'Patient Care Services',
  type: 'object',
  fields: [
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'inpatient',
      title: 'Inpatient',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
        }),
      ],
    }),
    defineField({
      name: 'outpatient',
      title: 'Outpatient',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
        }),
      ],
    }),
  ],
})

export const timelineSlider = defineType({
  name: 'timelineSlider',
  title: 'Timeline Slider',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'position', title: 'Position', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
        },
      ],
    }),
  ],
})

export const heroSlider = defineType({
  name: 'heroSlider',
  title: 'Hero Slider',
  type: 'object',
  fields: [
    defineField({name: 'titlePrefix', title: 'Title Prefix', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
  ],
})

export const imageCardGrid = defineType({
  name: 'imageCardGrid',
  title: 'Image Card Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({name: 'variant', title: 'Variant', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
})

export const inquiryForm = defineType({
  name: 'inquiryForm',
  title: 'Inquiry Form',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'formId', title: 'Form ID', type: 'string'}),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {list: ['detailed', 'simple']},
    }),
  ],
})

export const mapEmbed = defineType({
  name: 'mapEmbed',
  title: 'Map Embed',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'object',
      fields: [
        defineField({name: 'address', title: 'Address', type: 'string'}),
        defineField({name: 'embedUrl', title: 'Embed URL', type: 'url'}),
        defineField({name: 'latitude', title: 'Latitude', type: 'string'}),
        defineField({name: 'longitude', title: 'Longitude', type: 'string'}),
      ],
    }),
  ],
})

export const paragraphEditor = defineType({
  name: 'paragraphEditor',
  title: 'Paragraph Editor',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})

export const sectionTypes = [
  hero,
  statsContent,
  iconCardGrid,
  contentWithImage,
  teamGrid,
  aboutHero,
  aboutIntro,
  highlightQuote,
  reasonsGrid,
  valuesSection,
  statsProgress,
  ctaSection,
  facilityFeature,
  patientCareServices,
  timelineSlider,
  heroSlider,
  imageCardGrid,
  inquiryForm,
  mapEmbed,
  paragraphEditor,
]

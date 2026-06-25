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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Hero',
        subtitle: title || subtitle,
        media,
      }
    },
  },
})

export const statsContent = defineType({
  name: 'statsContent',
  title: 'Stats Content',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'contentTitle', title: 'Content Title', type: 'string'}),
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Stats Content',
        subtitle: title || subtitle,
        media,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Icon Card Grid',
        subtitle: title || subtitle,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'imagePosition',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Content With Image',
        subtitle: title ? `${title}${subtitle ? ` · image ${subtitle}` : ''}` : undefined,
        media,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Team Grid',
        subtitle: title || subtitle,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'About Hero',
        subtitle: title || subtitle,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'About Intro',
        subtitle: title || subtitle,
      }
    },
  },
})

export const highlightQuote = defineType({
  name: 'highlightQuote',
  title: 'Highlight Quote',
  type: 'object',
  fields: [
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
  preview: {
    select: {
      description: 'description',
    },
    prepare({description}) {
      return {
        title: 'Highlight Quote',
        subtitle: description,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Reasons Grid',
        subtitle: title || subtitle,
      }
    },
  },
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
  preview: {
    select: {
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({subtitle, media}) {
      return {
        title: 'Values Section',
        subtitle,
        media,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({title, description}) {
      return {
        title: 'Stats Progress',
        subtitle: title || description,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      ctaLabel: 'primaryCta.label',
    },
    prepare({title, ctaLabel}) {
      return {
        title: 'CTA Section',
        subtitle: title || ctaLabel,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Facility Feature',
        subtitle: title || subtitle,
        media,
      }
    },
  },
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
  preview: {
    select: {
      inpatientTitle: 'inpatient.title',
      outpatientTitle: 'outpatient.title',
      media: 'inpatient.image',
    },
    prepare({inpatientTitle, outpatientTitle, media}) {
      return {
        title: 'Patient Care Services',
        subtitle: [inpatientTitle, outpatientTitle].filter(Boolean).join(' · '),
        media,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Timeline Slider',
        subtitle: title || subtitle,
      }
    },
  },
})

export const heroSlider = defineType({
  name: 'heroSlider',
  title: 'Hero Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      description: 'Add multiple slides to show in the Hero Slider',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
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
          preview: {
            select: {
              titlePrefix: 'titlePrefix',
              titleHighlight: 'titleHighlight',
              media: 'image',
            },
            prepare({titlePrefix, titleHighlight, media}) {
              return {
                title: [titlePrefix, titleHighlight].filter(Boolean).join(' ') || 'Slide',
                media,
              }
            },
          },
        },
      ],
    }),
    // Legacy Single Slide fields for compatibility
    defineField({name: 'titlePrefix', title: 'Title Prefix (Legacy Single Slide)', type: 'string', description: 'Used only if slides array is empty'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight (Legacy Single Slide)', type: 'string', description: 'Used only if slides array is empty'}),
    defineField({name: 'subtitle', title: 'Subtitle (Legacy Single Slide)', type: 'string', description: 'Used only if slides array is empty'}),
    defineField({
      name: 'image',
      title: 'Image (Legacy Single Slide)',
      type: 'image',
      description: 'Used only if slides array is empty',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA (Legacy Single Slide)',
      type: 'object',
      description: 'Used only if slides array is empty',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA (Legacy Single Slide)',
      type: 'object',
      description: 'Used only if slides array is empty',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      slides: 'slides',
      titleHighlight: 'titleHighlight',
      media: 'image',
    },
    prepare({slides, titleHighlight, media}) {
      const slideCount = Array.isArray(slides) ? slides.length : 0;
      return {
        title: 'Hero Slider',
        subtitle: slideCount > 0 ? `${slideCount} Slides` : `1 Slide (Legacy: ${titleHighlight || 'Untitled'})`,
        media: slideCount > 0 ? slides[0]?.image : media,
      }
    },
  },
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Image Card Grid',
        subtitle: title || subtitle,
      }
    },
  },
})

export const inquiryForm = defineType({
  name: 'inquiryForm',
  title: 'Inquiry Form',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'formId', title: 'Form ID (Legacy)', type: 'string', description: 'Used for legacy forms linked by ID'}),
    defineField({
      name: 'form',
      title: 'Select Form',
      type: 'reference',
      to: [{type: 'form'}],
      description: 'Select a form built with the Sanity Form Builder',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {list: ['detailed', 'simple']},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      variant: 'variant',
    },
    prepare({title, variant}) {
      return {
        title: 'Inquiry Form',
        subtitle: title ? `${title}${variant ? ` · ${variant}` : ''}` : variant,
      }
    },
  },
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
  preview: {
    select: {
      pageTitle: 'title',
    },
    prepare({pageTitle}) {
      return {
        title: 'Map Embed',
        subtitle: pageTitle,
      }
    },
  },
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
  preview: {
    select: {
      content: 'content',
    },
    prepare({content}) {
      const firstBlock = Array.isArray(content) && content[0]
      const text =
        firstBlock?.children
          ?.filter((c: {_type: string}) => c._type === 'span')
          ?.map((c: {text: string}) => c.text)
          ?.join('') ?? ''
      return {
        title: 'Paragraph Editor',
        subtitle: text || undefined,
      }
    },
  },
})

const rawSectionTypes = [
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

// Prepend the hideSection field to each section type dynamically for easy toggle in Sanity Studio
rawSectionTypes.forEach((section) => {
  if (section.fields) {
    section.fields.unshift(
      defineField({
        name: 'hideSection',
        title: 'Hide Section',
        type: 'boolean',
        initialValue: false,
      })
    )
  }
})

export const sectionTypes = rawSectionTypes

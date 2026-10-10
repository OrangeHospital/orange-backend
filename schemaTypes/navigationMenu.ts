import {defineType, defineField} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    defineField({
      name: 'menuName',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Accessible Title',
      type: 'string',
    }),
    defineField({
      name: 'isClickable',
      title: 'Is Clickable',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable Item',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on to disable this menu item so it is excluded from frontend',
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'Page', value: 'page'},
          {title: 'Blog', value: 'blog'},
          {title: 'External URL', value: 'external'},
        ],
      },
    }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => (parent as {linkType?: string})?.linkType !== 'page',
    }),
    defineField({
      name: 'blog',
      title: 'Blog Post',
      type: 'reference',
      to: [{type: 'blog'}],
      hidden: ({parent}) => (parent as {linkType?: string})?.linkType !== 'blog',
    }),
    defineField({
      name: 'externalLink',
      title: 'External URL',
      type: 'string',
      hidden: ({parent}) => (parent as {linkType?: string})?.linkType !== 'external',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'number',
      options: {
        list: [
          {title: 'Active (1)', value: 1},
          {title: 'Disabled (0)', value: 0},
        ],
      },
      initialValue: 1,
      description: '1 = Active, 0 = Disabled',
    }),
    defineField({
      name: 'children',
      title: 'Sub-items',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {title: 'menuName', status: 'status', isDisabled: 'isDisabled'},
            prepare({title, status, isDisabled}) {
              const disabled = isDisabled === true || status === 0
              return {
                title: title || 'Untitled Sub-item',
                subtitle: disabled ? '🔴 Disabled' : '🟢 Active',
              }
            },
          },
          fields: [
            defineField({name: 'menuName', type: 'string', title: 'Label'}),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Accessible Title',
            }),
            defineField({
              name: 'isClickable',
              type: 'boolean',
              title: 'Is Clickable',
              initialValue: true,
            }),
            defineField({
              name: 'isDisabled',
              type: 'boolean',
              title: 'Disable Sub-item',
              initialValue: false,
              description: 'Toggle on to disable this sub-item from frontend',
            }),
            defineField({
              name: 'linkType',
              type: 'string',
              title: 'Link Type',
              options: {
                list: [
                  {title: 'Page', value: 'page'},
                  {title: 'Blog', value: 'blog'},
                  {title: 'External URL', value: 'external'},
                ],
              },
            }),
            defineField({
              name: 'page',
              type: 'reference',
              title: 'Page',
              to: [{type: 'page'}],
            }),
            defineField({
              name: 'blog',
              type: 'reference',
              title: 'Blog Post',
              to: [{type: 'blog'}],
            }),
            defineField({
              name: 'externalLink',
              type: 'string',
              title: 'External URL',
            }),
            defineField({
              name: 'sortOrder',
              type: 'number',
              title: 'Sort Order',
            }),
            defineField({
              name: 'status',
              type: 'number',
              title: 'Status',
              options: {
                list: [
                  {title: 'Active (1)', value: 1},
                  {title: 'Disabled (0)', value: 0},
                ],
              },
              initialValue: 1,
              description: '1 = Active, 0 = Disabled',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'menuName', status: 'status', isDisabled: 'isDisabled'},
    prepare({title, status, isDisabled}) {
      const disabled = isDisabled === true || status === 0
      return {
        title: title || 'Untitled Menu Item',
        subtitle: disabled ? '🔴 Disabled' : '🟢 Active',
      }
    },
  },
})

export const navigationMenu = defineType({
  name: 'navigationMenu',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'menuType',
      title: 'Menu Type',
      type: 'reference',
      to: [{type: 'menuType'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable Entire Menu',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on to disable/hide this entire navigation menu from the frontend',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'number',
      options: {
        list: [
          {title: 'Active (1)', value: 1},
          {title: 'Disabled (0)', value: 0},
        ],
      },
      initialValue: 1,
      description: '1 = Active, 0 = Disabled',
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{type: 'menuItem'}],
    }),
  ],
  preview: {
    select: {title: 'menuType.name', status: 'status', isDisabled: 'isDisabled'},
    prepare({title, status, isDisabled}) {
      const disabled = isDisabled === true || status === 0
      return {
        title: title || 'Navigation Menu',
        subtitle: disabled ? '🔴 Disabled' : '🟢 Active',
      }
    },
  },
})

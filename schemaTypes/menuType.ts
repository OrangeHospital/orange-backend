import { defineType, defineField } from "sanity";

export const menuType = defineType({
  name: "menuType",
  title: "Menu Type",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isDisabled",
      title: "Disable Menu Type",
      type: "boolean",
      initialValue: false,
      description: "Toggle on to disable this menu type from frontend",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "number",
      options: {
        list: [
          { title: "Active (1)", value: 1 },
          { title: "Disabled (0)", value: 0 },
        ],
      },
      initialValue: 1,
      description: "1 = Active, 0 = Disabled",
    }),
  ],
  preview: {
    select: { title: "name", status: "status", isDisabled: "isDisabled" },
    prepare({ title, status, isDisabled }) {
      const disabled = isDisabled === true || status === 0;
      return {
        title: title || "Untitled Menu Type",
        subtitle: disabled ? "🔴 Disabled" : "🟢 Active",
      };
    },
  },
});

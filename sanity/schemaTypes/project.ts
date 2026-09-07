import { defineField, defineType } from "sanity";

const ICON_OPTIONS = [
  { title: "Shopping Bag", value: "ShoppingBag" },
  { title: "Image / Gallery", value: "ImageIcon" },
  { title: "Cookie", value: "Cookie" },
  { title: "Utensils", value: "UtensilsCrossed" },
  { title: "Coffee", value: "Coffee" },
  { title: "Code (genérico)", value: "Code2" },
];

export const project = defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Título (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEs",
      title: "Título (ES)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descriptionEn",
      title: "Descripción (EN)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "descriptionEs",
      title: "Descripción (ES)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Imagen de preview",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "icon",
      title: "Ícono",
      type: "string",
      options: { list: ICON_OPTIONS },
      initialValue: "Code2",
    }),
    defineField({
      name: "accentColor",
      title: "Color de acento",
      description: "Formato oklch(...), ej: oklch(0.65 0.12 20)",
      type: "string",
      initialValue: "oklch(0.75 0.12 180)",
    }),
    defineField({
      name: "tags",
      title: "Stack / tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "repoUrl",
      title: "Link a GitHub",
      type: "url",
    }),
    defineField({
      name: "demoUrl",
      title: "Link al deploy",
      type: "url",
    }),
    defineField({
      name: "githubRepo",
      title: "Repo (owner/repo)",
      description: "Usado por el sync automático para no duplicar. No editar a mano.",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "Completado", value: "completed" },
          { title: "En desarrollo", value: "in-development" },
        ],
        layout: "radio",
      },
      initialValue: "in-development",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Orden",
      description: "Número más chico aparece primero.",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "visible",
      title: "Visible en el sitio",
      description: "Los proyectos sincronizados automáticamente desde GitHub entran en false.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "titleEs",
      status: "status",
      visible: "visible",
    },
    prepare({ title, status, visible }) {
      const visibilityFlag = visible ? "👁️ visible" : "🙈 oculto";
      const statusLabel = status === "completed" ? "completado" : "en desarrollo";
      return {
        title: title || "(sin título)",
        subtitle: `${visibilityFlag} · ${statusLabel}`,
      };
    },
  },
});

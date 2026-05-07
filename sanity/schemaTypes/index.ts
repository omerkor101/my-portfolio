import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project' // project.ts aynı klasörde olmalı

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
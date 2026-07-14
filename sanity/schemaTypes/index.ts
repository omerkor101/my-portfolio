import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project' 

// 1. Yeni oluşturduğumuz çok dilli tipleri içeri aktarıyoruz
import localeString from './localeString'
import localeText from './localeText'

export const schema: { types: SchemaTypeDefinition[] } = {
  // 2. Sanity'nin tanıması için tipleri diziye ekliyoruz
  types: [localeString, localeText, project],
}
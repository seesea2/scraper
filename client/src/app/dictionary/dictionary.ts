export interface OxfordDict {
  lexicalEntries: {
    entries: string[];
    lexicalCategory: string;
    pronunciations: { audioFile: string; phoneticSpelling: string }[];
  }[];
}

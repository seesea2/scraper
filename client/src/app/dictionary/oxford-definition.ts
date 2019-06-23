// oxford dictionary definitions
export interface OxfordDefinition {
  metadata: {
    provider: string;
  };
  results: {
    id: string;
    language: string;
    lexicalEntries: {
      entries: {
        homographNumber: string;
        senses: {
          definitions: string[];
          id: string;
          subsenses: {
            definitions: string[];
            id: string;
          }[];
        }[];
      }[];
      language: string;
      lexicalCategory: string;
      text: string;
    }[];
  }[];
  type: string;
  word: string;
}

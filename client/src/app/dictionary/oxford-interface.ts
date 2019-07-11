// oxford dictionary definitions
interface CheckEntriesResult {
  lexicalEntries: {
    entries: string[];
    lexicalCategory: string;
    pronunciations: { audioFile: string; phoneticSpelling: string }[];
  }[];
}

export default CheckEntriesResult;

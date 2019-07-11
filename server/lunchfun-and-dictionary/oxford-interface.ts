interface OdPronunciation {
  audioFile: string;
  dialects: [string];
  phoneticNotation: string;
  phoneticSpelling: string;
  regions: [
    {
      id: string;
      text: string;
    }
  ];
}

interface OxfordLemmas {
  metadata: {
    provider: string;
  };
  results: [
    {
      id: string;
      language: string;
      lexicalEntries: [
        {
          grammaticalFeatures: [
            {
              id: string;
              text: string;
              type: string;
            }
          ];
          inflectionOf: [
            {
              id: string;
              text: string;
            }
          ];
          language: string;
          lexicalCategory: {
            id: string;
            text: string;
          };
          text: string;
        }
      ];
      type: string;
      word: string;
    }
  ];
}

interface OxfordEntries {
  id: string;
  metadata: {
    operation: string;
    provider: string;
    schema: string;
  };
  results: [
    {
      id: string;
      language: string;
      lexicalEntries: [
        {
          derivativeOf: [
            {
              domains: [
                {
                  id: string;
                  text: string;
                }
              ];
              id: string;
              language: string;
              regions: [
                {
                  id: string;
                  text: string;
                }
              ];
              registers: [
                {
                  id: string;
                  text: string;
                }
              ];
              text: string;
            }
          ];
          derivatives: [
            {
              domains: [
                {
                  id: string;
                  text: string;
                }
              ];
              id: string;
              language: string;
              regions: [
                {
                  id: string;
                  text: string;
                }
              ];
              registers: [
                {
                  id: string;
                  text: string;
                }
              ];
              text: string;
            }
          ];
          entries: [
            {
              etymologies: [string];
              grammaticalFeatures: [
                {
                  id: string;
                  text: string;
                  type: string;
                }
              ];
              homographNumber: string;
              notes: [
                {
                  id: string;
                  text: string;
                  type: string;
                }
              ];
              pronunciations: [OdPronunciation];
              senses: [
                {
                  crossReferenceMarkers: [string];
                  crossReferences: [
                    {
                      id: string;
                      text: string;
                      type: string;
                    }
                  ];
                  definitions: [string];
                  domains: [
                    {
                      id: string;
                      text: string;
                    }
                  ];
                  examples: [
                    {
                      definitions: [string];
                      domains: [
                        {
                          id: string;
                          text: string;
                        }
                      ];
                      notes: [
                        {
                          id: string;
                          text: string;
                          type: string;
                        }
                      ];
                      regions: [
                        {
                          id: string;
                          text: string;
                        }
                      ];
                      registers: [
                        {
                          id: string;
                          text: string;
                        }
                      ];
                      senseIds: [string];
                      text: string;
                    }
                  ];
                  id: string;
                  notes: [
                    {
                      id: string;
                      text: string;
                      type: string;
                    }
                  ];
                  pronunciations: [OdPronunciation];
                  regions: [
                    {
                      id: string;
                      text: string;
                    }
                  ];
                  registers: [
                    {
                      id: string;
                      text: string;
                    }
                  ];
                  shortDefinitions: [string];
                  subsenses: [{ definitions: [string]; id: string }];
                  thesaurusLinks: [
                    {
                      entry_id: string;
                      sense_id: string;
                    }
                  ];
                  variantForms: [
                    {
                      domains: [
                        {
                          id: string;
                          text: string;
                        }
                      ];
                      notes: [
                        {
                          id: string;
                          text: string;
                          type: string;
                        }
                      ];
                      pronunciations: [OdPronunciation];
                      regions: [
                        {
                          id: string;
                          text: string;
                        }
                      ];
                      registers: [
                        {
                          id: string;
                          text: string;
                        }
                      ];
                      text: string;
                    }
                  ];
                }
              ];
              variantForms: [
                {
                  domains: [
                    {
                      id: string;
                      text: string;
                    }
                  ];
                  notes: [
                    {
                      id: string;
                      text: string;
                      type: string;
                    }
                  ];
                  pronunciations: [OdPronunciation];
                  regions: [
                    {
                      id: string;
                      text: string;
                    }
                  ];
                  registers: [
                    {
                      id: string;
                      text: string;
                    }
                  ];
                  text: string;
                }
              ];
            }
          ];
          grammaticalFeatures: [
            {
              id: string;
              text: string;
              type: string;
            }
          ];
          language: string;
          lexicalCategory: {
            id: string;
            text: string;
          };
          notes: [
            {
              id: string;
              text: string;
              type: string;
            }
          ];
          pronunciations: [OdPronunciation];
          text: string;
          variantForms: [
            {
              domains: [
                {
                  id: string;
                  text: string;
                }
              ];
              notes: [
                {
                  id: string;
                  text: string;
                  type: string;
                }
              ];
              pronunciations: [OdPronunciation];
              regions: [
                {
                  id: string;
                  text: string;
                }
              ];
              registers: [
                {
                  id: string;
                  text: string;
                }
              ];
              text: string;
            }
          ];
        }
      ];
      pronunciations: [OdPronunciation];
      type: string;
      word: string;
    }
  ];
}

interface OxfordResponseCode {
  400: `Invalid value for filters such as lexicalCategory, registers, domains, etc.\n Invalid value for fields projections accepted, Let's say that we cannot project an non-existing field.`;
  404: `No entry was found matching the selection parameters; OR An invalid filter was specified.`;
  414: `URL is too long.`;
  500: `Internal Error. An error occurred during processing.`;
}

interface CheckEntriesResult {
  lexicalEntries: {
    entries: string[];
    lexicalCategory: string;
    pronunciations: { audioFile: string; phoneticSpelling: string }[];
  }[];
}

export { CheckEntriesResult, OxfordEntries, OxfordLemmas, OxfordResponseCode };

export type Chunk = {
  pageContent: string;
  metadata: {
    loc: {
      lines: {
        from: number;
        to: number;
      };
    };
  };
};

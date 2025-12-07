export interface LetterPart {
  id: number;
  text: string;
  imageUrl: string;
}

export interface LetterData {
  title: string;
  parts: LetterPart[];
}

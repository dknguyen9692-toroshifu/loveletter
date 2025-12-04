export interface LetterPart {
  id: number;
  text: string;
  illustrationPrompt: string;
  imageUrl: string;
}

export interface LetterData {
  title: string;
  parts: LetterPart[];
}

export enum LoadingState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}
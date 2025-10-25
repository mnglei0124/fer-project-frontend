export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  emotion: string;
}

export interface Emotion {
  name: string;
  confidence: number;
  color: string;
  icon: React.ReactNode;
}

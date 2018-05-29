// @flow
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ElementEventTemplate<E> = {
  target: E
} & Event;

declare type InputEvent = ElementEventTemplate<HTMLInputElement>;

export type Show = {
  title: string,
  description: string,
  poster: string,
  year: string,
  imdbID: string,
  trailer: string
};

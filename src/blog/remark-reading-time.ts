import type { Root } from 'mdast';
import type { Transformer } from 'unified';
import { countWords } from 'alfaaz';
import { toString } from 'mdast-util-to-string';

const WORDS_PER_MINUTE = 238;

const transform: Transformer<Root, Root> = (tree, file) => {
  const text = toString(tree);
  const words = countWords(text);
  file.data.readingTime = Math.round(words / WORDS_PER_MINUTE);
};

export function remarkReadingTime(): Transformer<Root> {
  return transform;
}

function toCapitalizeFirstLetter(word: string): string {
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);

  return newWord;
}

export default toCapitalizeFirstLetter;

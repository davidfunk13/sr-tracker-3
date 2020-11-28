function parseUnderscores(str: string): string {
    let temp: string = '';

    const splitWords = str.split('_');

    splitWords.forEach((word, i) => {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        if (i === 0) {
            return temp += capitalized;
        }
        temp += " " + capitalized;
    });

    return temp;
};

export default parseUnderscores;
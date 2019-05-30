function LongestWord(sen) {

    var words = sen.split(" ");
    var maxLength = 0;
    var longestWord = "";
    for (var i = 0; i < words.length - 1; i++)
    {
 
        if (words[i].length > maxLength)
        {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(LongestWord("The love of a cat."));

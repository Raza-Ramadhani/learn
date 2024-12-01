'use server'

export async function deKommaCheck(formData:FormData, rawText:string, words:Array<string>) {
        const correctWords = rawText.split(' ')
        const commas = []
        let everythingCorrect = true
        for (let i = 0; i < words.length; i++) {
            const checkingWord = `${words[i]}${formData.get(i.toString()) == 'on' ? ',' : ''}`
            console.log(checkingWord + " - " + correctWords[i])
            if (correctWords[i] == checkingWord) {
                commas.push({correct:true, comma:formData.get(i.toString()) == 'on' ? true:false})
            } else {
                commas.push({correct:false, comma:formData.get(i.toString()) == 'on' ? true:false})
                everythingCorrect = false
            }
        }
/*
        const sentences = rawText.split('.')
        const sentencesLength = []
        for (let i = 0; i < sentences.length; i++) {
            const wordsInSentence = sentences[i].split(' ')
            const numberOfWordsInSentence = wordsInSentence.length
            sentencesLength.push(numberOfWordsInSentence)
        }
*/
        return {correct:commas, everythingCorrect:everythingCorrect}
}
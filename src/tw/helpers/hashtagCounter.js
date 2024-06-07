

export const hastagBrowser = (tweets = []) => {
    const hastags = [];
    if (tweets.length === 0) return [];
    for (let i = 0; i < tweets.length; i++) {
        const palabras = tweets[i].tw.split(' ');
        const palabrasConHashtag = palabras.filter(p => p.startsWith('#'))
        if (palabrasConHashtag.length > 0) {
            hastags.push(palabrasConHashtag);
        }
    }
    return hastags;
}

export const hastagsCounter = (hashtags = []) => {
    const contador = {};
    for (const subarray of hashtags) {
        for (const elemento of subarray) {
            contador[elemento] = (contador[elemento] || 0) + 1;
        }
    }
    return contador;

}





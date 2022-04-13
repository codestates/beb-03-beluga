const fetchMetaData = async (tokenURI) => {
    let tokenMetaData;
    if(!tokenURI.startsWith('https')){
        tokenMetaData = await fetch(`https://ipfs.infura.io/ipfs/${tokenURI}`);
    } else {
        tokenMetaData = await fetch(tokenURI);
    }
    return tokenMetaData;
}

export default fetchMetaData;
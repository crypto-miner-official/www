
function search(p) {
    let item = document.getElementById('sme');
    console.log(item.value.split(' '))
    alert(item.value.split(' '))
}
function pickrandomfromdict(param) {
    var keys = Object.values(param['urlset']['url']);
    return keys[keys.length * Math.random() << 0]['loc'];
}
function gotorandomblog() {
    fetch('/sitemap.json')
        .then(res => res.json())
        .then((out) => {
            let randomblog = pickrandomfromdict(out);
            while (randomblog) {
                if (randomblog == "https://crypto-miner.tech" || randomblog == "https://crypto-miner.tech/index.html" || randomblog == "https://crypto-miner.tech/mining" || randomblog == "https://crypto-miner.tech/budget-mining" || randomblog == "https://crypto-miner.tech/mobile" || randomblog == "https://crypto-miner.tech/other" || randomblog == "https://crypto-miner.tech/contact.html") {
                    console.log('retrying')
                    randomblog = pickrandomfromdict(out);
                    continue;
                } else {
                    window.open(randomblog, '_blank')
                    break;
                }

            }
        }).catch(err => console.error(err));
}
function latestblog() {
    window.open('https://crypto-miner.tech/mining/rx-570-vs-3070ti-hashrate.html', '_blank')
}
// document.getElementsByClassName('card')[0].innerHTML = ''

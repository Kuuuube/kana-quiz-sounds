const kana_dict = {
    'hiragana': {
        'hsingle': { 'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o' },
        'hk': { 'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko' },
        'hs': { 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so' },
        'ht': { 'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to' },
        'hn': { 'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no' },
        'hh': { 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho' },
        'hm': { 'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo' },
        'hy': { 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo' },
        'hr': { 'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro' },
        'hw': { 'わ': 'wa', 'を': 'wo' },
        'hn1': { 'ん': 'n' },
        'hg': { 'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go' },
        'hz': { 'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo' },
        'hd': { 'だ': 'da', 'ぢ': 'di', 'づ': 'du', 'で': 'de', 'ど': 'do' },
        'hb': { 'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo' },
        'hp': { 'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po' },

        'hdk': { 'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo' },
        'hds': { 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho' },
        'hdc': { 'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho' },
        'hdn': { 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo' },
        'hdh': { 'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo' },
        'hdm': { 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo' },
        'hdr': { 'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo' },
        'hdg': { 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo' },
        'hdj': { 'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo' },
        'hdj2': { 'ぢゃ': 'dya', 'ぢゅ': 'dyu', 'ぢょ': 'dyo' },
        'hdb': { 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo' },
        'hdp': { 'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo' },
    },

    'katakana': {
        'ksingle': { 'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o' },
        'kk': { 'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko' },
        'ks': { 'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so' },
        'kt': { 'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to' },
        'kn': { 'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no' },
        'kh': { 'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho' },
        'km': { 'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo' },
        'ky': { 'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo' },
        'kr': { 'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro' },
        'kw': { 'ワ': 'wa', 'ヲ': 'o' },
        'kn1': { 'ン': 'n' },
        'kg': { 'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go' },
        'kz': { 'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo' },
        'kd': { 'ダ': 'da', 'ヂ': 'di', 'ヅ': 'du', 'デ': 'de', 'ド': 'do' },
        'kb': { 'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo' },
        'kp': { 'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po' },

        'kdk': { 'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo' },
        'kds': { 'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho' },
        'kdc': { 'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho' },
        'kdn': { 'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo' },
        'kdh': { 'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo' },
        'kdm': { 'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo' },
        'kdr': { 'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo' },
        'kdg': { 'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo' },
        'kdj': { 'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo' },
        'kdj2': { 'ヂャ': 'dya', 'ヂュ': 'dyu', 'ヂョ': 'dyo' },
        'kdb': { 'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo' },
        'kdp': { 'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo' },
    }
}

let correct_answer = '';

let started = false;

function check_all(element_selector) {
    let trs = document.querySelector(element_selector);
    let tds = trs.children;
    for (let x = 0; x < tds.length; x++) {
        tds[x].children[0].checked = true;
    }
}

function uncheck_all(element_selector) {
    let trs = document.querySelector(element_selector);
    let tds = trs.children;
    for (let x = 0; x < tds.length; x++) {
        tds[x].children[0].checked = false;
    }
}

function setup_checkalls() {
    document.querySelector("#hiragana-checkall").addEventListener("click", () => {check_all(".hiragana-check")})
    document.querySelector("#hiragana-uncheckall").addEventListener("click", () => {uncheck_all(".hiragana-check")})

    document.querySelector("#hiragana-combinations-checkall").addEventListener("click", () => {check_all(".hiragana-combinations-check")})
    document.querySelector("#hiragana-combinations-uncheckall").addEventListener("click", () => {uncheck_all(".hiragana-combinations-check")})

    document.querySelector("#katakana-checkall").addEventListener("click", () => {check_all(".katakana-check")})
    document.querySelector("#katakana-uncheckall").addEventListener("click", () => {uncheck_all(".katakana-check")})

    document.querySelector("#katakana-combinations-checkall").addEventListener("click", () => {check_all(".katakana-combinations-check")})
    document.querySelector("#katakana-combinations-uncheckall").addEventListener("click", () => {uncheck_all(".katakana-combinations-check")})
}

function get_checked() {
    const kanacheck = document.getElementsByClassName('kanacheck');
    const selected_tab = get_selected_tab();
    const active = [];
    for (let i = 0; i < kanacheck.length; i++) {
        const cur = kanacheck[i];
        if (cur.checked == true) {
            for (const p in kana_dict[selected_tab][cur.id]) {
                active.push([p, kana_dict[selected_tab][cur.id][p]]);
            }
        }
    }
    return active;
}

function get_selected_tab() {
    return document.querySelector("#hiragana-tab").hidden ? "katakana" : "hiragana";
}

function switch_tab() {
    const hiragana_tab = document.querySelector("#hiragana-tab");
    const katakana_tab = document.querySelector("#katakana-tab");
    hiragana_tab.hidden = !hiragana_tab.hidden;
    katakana_tab.hidden = !katakana_tab.hidden;

    const tab_selectors = document.querySelectorAll(".kana-tab-selector");
    for (const tab_selector of tab_selectors) {
        tab_selector.classList.toggle("selected-tab");
    }
    if (started) {
        set_audio();
    }
}

function get_random_character() {
    let character = ['', ''];
    const checked_characters = get_checked();
    do {
        character = checked_characters[Math.floor(Math.random() * checked_characters.length)];
    } while (character[0] === correct_answer);
    return character;
}

function set_audio() {
    const new_character = get_random_character();
    const kana_audio = document.querySelector("#kana-audio");
    kana_audio.src = "audio/" + new_character[1] + "_" + Math.floor(Math.random() * 2) + ".mp3";
    correct_answer = new_character[0];
}

function handle_answer(character) {
    if (character === correct_answer) {
        highlight_answer(character, "correct-answer");
        setTimeout(set_audio, 1000);
    } else {
        highlight_answer(character, "wrong-answer");
    }
}

function highlight_answer(answer, highlight_class) {
    const kana_boxes = document.querySelectorAll(".kana");
    for (const kana_box of kana_boxes) {
        if (kana_box.innerText === answer) {
            kana_box.parentElement.classList.add(highlight_class);
            setTimeout(() => {
                kana_box.parentElement.classList.remove(highlight_class);
            }, 500);
        }
    }
}

setup_checkalls();

const tab_selectors = document.querySelectorAll(".kana-tab-selector");
for (const tab_selector of tab_selectors) {
    tab_selector.addEventListener("click", switch_tab);
}

const kana_items = document.querySelectorAll("td");
for (const kana_item of kana_items) {
    kana_item.addEventListener("click", (e) => {
        const selected_character = e.target.innerText;
        handle_answer(selected_character);
    });
}

document.querySelector("#start-button").addEventListener("click", () => {
    started = true;
    document.querySelector("#start-button").hidden = true;

    document.querySelector("#kana-audio").hidden = false;
    document.querySelector("#reveal-button").hidden = false;
    document.querySelector("#skip-button").hidden = false;
    set_audio();
});

document.querySelector("#skip-button").addEventListener("click", () => {
    set_audio();
});

document.querySelector("#reveal-button").addEventListener("click", () => {
    highlight_answer(correct_answer, "correct-answer");
});

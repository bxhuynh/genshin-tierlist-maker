const characters: string[] = [
    'albedo',
    'aloy',
    'amber',
    'itto',
    'ayaka',
    'barbara',
    'beidou',
    'bennett',
    'chongyun',
    'diluc',
    'diona',
    'eula',
    'fischl',
    'ganyu',
    'gorou',
    'hutao',
    'jean',
    'kaeya',
    'kazuha',
    'keqing',
    'klee',
    'kokomi',
    'lisa',
    'mona',
    'ningguang',
    'noelle',
    'qiqi',
    'raiden',
    'razor',
    'rosaria',
    'sara',
    'sayu',
    'shenhe',
    'shinobu',
    'sucrose',
    'tartaglia',
    'thoma',
    'venti',
    'xiangling',
    'xiao',
    'xingqiu',
    'xinyan',
    'yae',
    'yanfei',
    'yelan',
    'yoimiya',
    'yunjin',
    'zhongli',
];

interface Tier {
    id: string;
    label: string;
    color: string;
    characterIds: string[];
}

interface Tierlist {
    [key: string]: Tier;
}

const initRows: Tierlist = {
    'tier-S': { id: 'tier-S', label: 'S', color: '#FF7F7F', characterIds: [] },
    'tier-A': { id: 'tier-A', label: 'A', color: '#FFBF7F', characterIds: [] },
    'tier-B': { id: 'tier-B', label: 'B', color: '#FFDF7F', characterIds: [] },
    'tier-C': { id: 'tier-C', label: 'C', color: '#FFFF7F', characterIds: [] },
    'tier-D': { id: 'tier-D', label: 'D', color: '#BFFF7F', characterIds: [] },
};

const initRowOrder: string[] = ['tier-S', 'tier-A', 'tier-B', 'tier-C', 'tier-D'];

export { characters, initRows, initRowOrder };

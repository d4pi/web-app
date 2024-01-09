export default class D4Filterable {
    name = '';
    type = '';
    itemPower = '';
    upgrades = '';
    attributes = [] as string[];

    constructor(rawWords: string[]) {
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');
        rawWords.push('');

        let i = 0;
        let u = 0;

        const nameStoppers = [
            'ancestral'
        ];

        const typeStoppers = [
            'amulet',
            'dagger',
            'helm'
        ];

        //

        while (i < rawWords.length && nameStoppers.every(stopper => stopper.localeCompare(rawWords[i], undefined, { sensitivity: 'base' }) !== 0)) {
            ++i;
        }
        this.name = rawWords.slice(u, i).join(' ');
        u = i;

        //

        while (i < rawWords.length && typeStoppers.every(stopper => stopper.localeCompare(rawWords[i], undefined, { sensitivity: 'base' }) !== 0)) {
            ++i;
        }
        ++i;
        this.type = rawWords.slice(u, i).join(' ');
        u = i;

        //

        while (u < rawWords.length && !/\d+(\+\d+)/.test(rawWords[u])) {
            ++u;
        }
        while (i < rawWords.length && 'power'.localeCompare(rawWords[i], undefined, { sensitivity: 'base' }) !== 0) {
            ++i;
        }
        ++i;
        this.itemPower = rawWords.slice(u, i).join(' ');
        u = i;

        //

        // while (u < rawWords.length && !/^Upgrades.*/i.test(rawWords[u])) {
        //     ++u;
        // }
        // i = u + 1;
        // while (i < rawWords.length && !/\d\/\d/.test(rawWords[i])) {
        //     ++i;
        // }
        // ++i;
        // this.upgrades = rawWords.slice(u, i).join(' ');
        // u = i;

        //
        const startIndex = u;
        //

        { const a = find('Basic Skill Attack Speed'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Cold Resistance'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Cooldown Reduction'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Damage to Close Enemies'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Damage to Crowd Controlled Enemies'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Intelligence'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Life Regeneration while Not Damaged Recently'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Mana Cost Reduction'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Mastery Skill Damage'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Movement Speed'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Ranks of All Defensive Skills'.split(' ')); if (a !== null) { this.attributes.push(a); } }
        { const a = find('Ranks of Ice Blades'.split(' ')); if (a !== null) { this.attributes.push(a); } }

        function find(template: string[]): string | null {
            for (let u = startIndex; u <= rawWords.length - template.length; ++u) {
                console.log(`rawWords[u]: ${rawWords[u]}`);
                let i = 0;
                while (i < template.length && template[i].localeCompare(rawWords[u + i], undefined, { sensitivity: 'base' }) === 0) {
                    console.log(`rawWords[u+i] template[i]: ${rawWords[u + i]} ${template[i]}`);
                    ++i;
                }
                if (i == template.length) {
                    return rawWords.slice(u - 1, u + i).join(' ');
                }
            }
            return null;
        }
    }
}

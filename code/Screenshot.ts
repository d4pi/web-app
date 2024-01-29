import Attribute from "./Attribute";

export default class Screenshot {
    private _imageProcessor_InputImageBrightnessThreshold: number;
    private _imageProcessor_ItemImageMaxWidth: number;
    private _imageProcessor_ItemImageMinWidth: number;
    private _imageProcessor_ItemPictureHeight: number;
    private _imageProcessor_ItemPictureWidth: number;
    private _imageProcessor_TextImageBorderTrimSize: number;
    private _imageProcessor_TextImageCornerTrimSize: number;
    private _itemAttributes: Attribute[];
    private _itemName: string;
    private _itemPower: string;
    private _itemType: string;
    private _processTime_end_timestamp: number;
    private _processTime_Image_end_timestamp: number;
    private _processTime_Image_start_timestamp: number;
    private _processTime_start_timestamp: number;
    private _processTime_Text_end_timestamp: number;
    private _processTime_Text_start_timestamp: number;
    private _screenshotFile_lastModified_timestamp: number;
    private _screenshotFile_name: string;
    private _screenshotFile_size: number;

    private static readonly invalidTimestamp: number = -1;

    itemScore: number;

    constructor(
        imageProcessor_InputImageBrightnessThreshold: number,
        imageProcessor_ItemImageMaxWidth: number,
        imageProcessor_ItemImageMinWidth: number,
        imageProcessor_ItemPictureHeight: number,
        imageProcessor_ItemPictureWidth: number,
        imageProcessor_TextImageBorderTrimSize: number,
        imageProcessor_TextImageCornerTrimSize: number,
        screenshotFile_lastModified_timestamp: number,
        screenshotFile_name: string,
        screenshotFile_size: number
    ) {
        this._imageProcessor_InputImageBrightnessThreshold = imageProcessor_InputImageBrightnessThreshold;
        this._imageProcessor_ItemImageMaxWidth = imageProcessor_ItemImageMaxWidth;
        this._imageProcessor_ItemImageMinWidth = imageProcessor_ItemImageMinWidth;
        this._imageProcessor_ItemPictureHeight = imageProcessor_ItemPictureHeight;
        this._imageProcessor_ItemPictureWidth = imageProcessor_ItemPictureWidth;
        this._imageProcessor_TextImageBorderTrimSize = imageProcessor_TextImageBorderTrimSize;
        this._imageProcessor_TextImageCornerTrimSize = imageProcessor_TextImageCornerTrimSize;
        this._itemAttributes = [];
        this._itemName = 'Processing Item Name ...';
        this._itemPower = 'Processing Item Power ...';
        this.itemScore = 0;
        this._itemType = 'Processing Item Type ...';
        this._processTime_end_timestamp = Screenshot.invalidTimestamp;
        this._processTime_Image_end_timestamp = Screenshot.invalidTimestamp;
        this._processTime_Image_start_timestamp = Screenshot.invalidTimestamp;
        this._processTime_start_timestamp = Date.now();
        this._processTime_Text_end_timestamp = Screenshot.invalidTimestamp;
        this._processTime_Text_start_timestamp = Screenshot.invalidTimestamp;
        this._screenshotFile_lastModified_timestamp = screenshotFile_lastModified_timestamp;
        this._screenshotFile_name = screenshotFile_name;
        this._screenshotFile_size = screenshotFile_size;
    }

    private get itemImage_data() { return _itemImageData[this.itemImage_data_id]; }
    private get text_data() { return _textData[this.text_data_id]; }

    get imageProcessor_InputImageBrightnessThreshold(): number { return this._imageProcessor_InputImageBrightnessThreshold; }
    get imageProcessor_ItemImageMaxWidth(): number { return this._imageProcessor_ItemImageMaxWidth; }
    get imageProcessor_ItemImageMinWidth(): number { return this._imageProcessor_ItemImageMinWidth; }
    get imageProcessor_ItemPictureHeight(): number { return this._imageProcessor_ItemPictureHeight; }
    get imageProcessor_ItemPictureWidth(): number { return this._imageProcessor_ItemPictureWidth; }
    get imageProcessor_TextImageBorderTrimSize(): number { return this._imageProcessor_TextImageBorderTrimSize; }
    get imageProcessor_TextImageCornerTrimSize(): number { return this._imageProcessor_TextImageCornerTrimSize; }
    get inputImage_afterBrightnessThreshold_canvas_id(): string { return `${this.key} inputImage_afterBrightnessThreshold_canvas`; }
    get inputImage_afterItemImageDetection_canvas_id(): string { return `${this.key} inputImage_afterItemImageDetection_canvas`; }
    get inputImage_image_id(): string { return `${this.key} inputImage_image`; };
    get isProcessing_Image(): boolean { return this._processTime_Image_start_timestamp !== -1 && this._processTime_Image_end_timestamp === -1; }
    get isProcessing_Text(): boolean { return this._processTime_Text_start_timestamp !== -1 && this._processTime_Text_end_timestamp === -1; }
    get isProcessing(): boolean { return this._processTime_end_timestamp === -1; }
    get itemAttributes(): Attribute[] { return [...this._itemAttributes]; }
    get itemImage_canvas_id(): string { return `${this.key} itemImage_canvas`; }
    get itemImage_data_bestCandidate(): IRectangle { return this.itemImage_data.bestCandidate; }
    get itemImage_data_candidates(): IRectangle[] { return this.itemImage_data_exists ? [...this.itemImage_data.candidates] : []; }
    get itemImage_data_exists(): boolean { return this.itemImage_data !== undefined; }
    get itemImage_data_id(): string { return `${this.key} itemImage_data`; }
    get itemName(): string { return this._itemName; }
    get itemPower(): string { return this._itemPower; }
    get itemType(): string { return this._itemType; }
    get key(): string { return `Filterable (imageProcessor_InputImageBrightnessThreshold: ${this._imageProcessor_InputImageBrightnessThreshold}) (imageProcessor_ItemImageMaxWidth: ${this._imageProcessor_ItemImageMaxWidth}) (imageProcessor_ItemImageMinWidth: ${this._imageProcessor_ItemImageMinWidth}) (imageProcessor_ItemPictureHeight: ${this._imageProcessor_ItemPictureHeight}) (imageProcessor_ItemPictureWidth: ${this._imageProcessor_ItemPictureWidth}) (imageProcessor_TextImageBorderTrimSize: ${this._imageProcessor_TextImageBorderTrimSize}) (imageProcessor_TextImageCornerTrimSize: ${this._imageProcessor_TextImageCornerTrimSize}) (screenshotFile_lastModified_timestamp: ${this._screenshotFile_lastModified_timestamp}) (screenshotFile_name: ${this._screenshotFile_name}) (screenshotFile_size: ${this._screenshotFile_size})`; }
    get processTime_Image(): number { return this._processTime_Image_end_timestamp - this._processTime_Image_start_timestamp; }
    get processTime_Text(): number { return this._processTime_Text_end_timestamp - this._processTime_Text_start_timestamp; }
    get processTime(): number { return this._processTime_end_timestamp - this._processTime_start_timestamp; }
    get screenshotFile_lastModified_timestamp(): number { return this._screenshotFile_lastModified_timestamp; }
    get screenshotFile_name(): string { return this._screenshotFile_name; }
    get screenshotFile_size(): number { return this._screenshotFile_size; }
    get text_data_confidence(): number { return this.text_data_exists ? this.text_data.confidence : -1; }
    get text_data_exists(): boolean { return this.text_data !== undefined; }
    get text_data_id(): string { return `${this.key} text_data`; }
    get text_data_text(): string { return this.text_data_exists ? this.text_data.text : ''; }
    get text_data_words(): string[] { return this.text_data_exists ? [...this.text_data.words] : []; }
    get textImage_canvas_id(): string { return `${this.key} textImage_canvas`; }

    end_Processing_Image() { this._processTime_Image_end_timestamp = Date.now(); }
    end_Processing_Text() { this._processTime_Text_end_timestamp = Date.now(); }
    start_Processing_Image() { this._processTime_Image_start_timestamp = Date.now(); }
    start_Processing_Text() { this._processTime_Text_start_timestamp = Date.now(); }

    process_Text_Data() {
        const rawWords = this.text_data_words.filter(word => word !== '');
        // Some AttributeMarkerArray has a trailing *negative marker*;
        // therefore we push a garbage string to handle a rare case
        // where rawWords ends *too cleanly*.
        //
        // For example, say rawWords is ['15%', ''Damage', 'Reduction'].
        // It ends *too cleanly* for "Damage Reduction"'s
        // AttributeMarkerArray:
        // [/^[\d,.]+%$/, 'Damage', 'Reduction', /^[^fw].*$/i].
        //
        // By appending a garbage string to rawWords, now "Damage
        // Reduction"'s AttributeMarkerArray will correctly capture the
        // "Damage Reduction" attribute.
        rawWords.push('XXX D4pi Gargabe String XXX');

        this._itemName = 'Unknown Item Name';
        this._itemType = 'Unknown Item Type';
        {
            const itemType_start_markers = [
                'Ancestral',
                'Common',
                'Legendary',
                'Magic',
                'Rare',
                'Sacred',
                'Unique'
            ];
            const itemType_end_markers = [
                'Amulet',
                'Armor',
                'Axe',
                'Boots',
                'Bow',
                'Crossbow',
                'Dagger',
                'Focus',
                'Gloves',
                'Helm',
                'Mace',
                'Pants',
                'Polearm',
                'Ring',
                'Scythe',
                'Shield',
                'Staff',
                'Sword',
                'Totem',
                'Wand'
            ];
            const itemType_start_index = findAny(itemType_start_markers, 0);
            if (0 <= itemType_start_index) {
                if (1 <= itemType_start_index) {
                    this._itemName = rawWords.slice(0, itemType_start_index).map(word => word.replaceAll(/[@©®]/g, 'O')).join(' ');
                }

                const itemType_end_index = findAny(itemType_end_markers, itemType_start_index);
                if (itemType_start_index <= itemType_end_index) {
                    this._itemType = rawWords.slice(itemType_start_index, itemType_end_index + 1).join(' ');
                }
            }
        }

        this._itemPower = 'Unknown Item Power';
        {
            const itemPower_marker_array = [
                /^[\d,+]+$/,
                'Item',
                'Power'
            ];
            const itemPower_start_index = findAll(itemPower_marker_array, 0);
            if (0 <= itemPower_start_index) {
                this._itemPower = rawWords.slice(itemPower_start_index, itemPower_start_index + itemPower_marker_array.length).join(' ');
            }
        }

        {
            const itemAttribute_marker_arrays = [
                ['Lucky', 'Hit:', 'Up', 'to', 'a', '5%', 'Chance', 'to', 'Heal', /^\+[\d,.]+$/, 'Life'],
                ['Lucky', 'Hit:', 'Up', 'to', 'a', '5%', 'Chance', 'to', 'Restore', /^\+[\d,.]+%$/, 'Primary', 'Resource'],
                ['Lucky', 'Hit:', 'Up', 'to', 'a', /^\+[\d,.]+%$/, 'Chance', 'to', 'Execute', 'Injured', 'Non-Elites'],
                ['Lucky', 'Hit:', 'Up', 'to', 'a', /^\+[\d,.]+%$/, 'Chance', 'to', 'Slow'],
                ['Minions', 'Inherit', /^\+[\d,.]+%$/, 'of', 'Your', 'Thorns'],
                ['Trap', 'Skill', 'Arm', 'Time', 'Reduced', 'by', /^[\d,.]+$/, /^Seconds?$/i],
                [/^[\d,.]+%$/, 'Control', 'Impaired', 'Duration', 'Reduction'],
                [/^[\d,.]+%$/, 'Cooldown', 'Reduction'], // Focus, Totem
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'from', 'Bleeding', 'Enemies'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'from', 'Burning', 'Enemies'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'from', 'Close', 'Enemies'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'from', 'Distant', 'Enemies'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'from', 'Poisoned', 'Enemies'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'from', 'Shadow', 'Damage', 'Over', 'Time-Affected', 'Enemies'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'while', 'Control', 'Impaired'], // Topaz
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'while', 'Fortified'], // Sapphire
                [/^[\d,.]+%$/, 'Damage', 'Reduction', 'while', 'Injured'],
                [/^[\d,.]+%$/, 'Damage', 'Reduction', /^[^fw].*$/i], // #from, #while
                [/^[\d,.]+%$/, 'Dodge', 'Chance', 'Against', 'Close', 'Enemies'],
                [/^[\d,.]+%$/, 'Dodge', 'Chance', 'Against', 'Distant', 'Enemies'],
                [/^[\d,.]+%$/, 'Dodge', 'Chance', /^[^A].*$/i], // #Against
                [/^[\d,.]+%$/, 'Energy', 'Cost', 'Reduction'],
                [/^[\d,.]+%$/, 'Essence', 'Cost', 'Reduction'],
                [/^[\d,.]+%$/, 'Fury', 'Cost', 'Reduction'],
                [/^[\d,.]+%$/, 'Imbuement', 'Skill', 'Cooldown', 'Reduction'],
                [/^[\d,.]+%$/, 'Mana', 'Cost', 'Reduction'],
                [/^[\d,.]+%$/, 'Maximum', 'Minion', 'Life'],
                [/^[\d,.]+%$/, 'Resource', 'Generation'],
                [/^[\d,.]+%$/, 'Slow', 'Duration', 'Reduction'],
                [/^[\d,.]+%$/, 'Spirit', 'Cost', 'Reduction'],
                [/^[\d,.]+%$/, 'Storm', 'Skill', 'Cooldown', 'Reduction'],
                [/^[\d,.]+%$/, 'Trap', 'Skill', 'Cooldown', 'Reduction'],
                [/^\+[\d,.]+%$/, 'Attack', 'Speed'],
                [/^\+[\d,.]+%$/, 'Barrier', 'Generation'], // Diamond
                [/^\+[\d,.]+%$/, 'Basic', 'Skill', 'Attack', 'Speed'],
                [/^\+[\d,.]+%$/, 'Basic', 'Skill', 'Damage'], // Topaz
                [/^\+[\d,.]+%$/, 'Berserking', 'Duration'],
                [/^\+[\d,.]+%$/, 'Block', 'Chance'], // Shield
                [/^\+[\d,.]+%$/, 'Blocked', 'Damage', 'Reduction'], // Shield
                [/^\+[\d,.]+%$/, 'Blood', 'Orb', 'Healing'],
                [/^\+[\d,.]+%$/, 'Blood', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Bone', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Brawling', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Cold', 'Damage'],
                [/^\+[\d,.]+%$/, 'Cold', 'Resistance'], // Ring, Sapphire
                [/^\+[\d,.]+%$/, 'Companion', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Conjuration', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Core', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Crackling', 'Energy', 'Damage'],
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Chance', 'Against', 'Injured', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Chance', /^[^A].*$/i], // #Against
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', 'to', 'Crowd', 'Controlled', 'Enemies'], // Sapphire
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', 'to', 'Vulnerable', 'Enemies'], // Emerald
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', 'with', 'Bone', 'Skills'],
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', 'with', 'Earth', 'Skills'],
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', 'with', 'Imbued', 'Skills'],
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', 'with', 'Werewolf', 'Skills'],
                [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', /^[^tw].*$/i], // Sword, #to, #with
                [/^\+[\d,.]+%$/, 'Crowd', 'Control', 'Duration'],
                [/^\+[\d,.]+%$/, 'Cutthroat', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Damage', 'Over', 'Time'], // Amethyst
                [/^\+[\d,.]+%$/, 'Damage', 'Taken', 'Over', 'Time', 'Reduction'], // Amethyst
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Bleeding', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Burning', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Chilled', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Close', 'Enemies'], // Dagger
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Crowd', 'Controlled', 'Enemies'], // Staff
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Daze', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Distant', 'Enemies'], // Bow
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Enemies', 'Affected', 'by', 'Trap', 'Skills'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Freeze', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Healthy', 'Enemies'], // Axe
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Injured', 'Enemies'], // Polearm
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Poisoned', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Shadow', 'Damage', 'Over', 'Time-Affected', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'to', 'Stun', 'Enemies'],
                [/^\+[\d,.]+%$/, 'Damage', 'while', 'Berserking'],
                [/^\+[\d,.]+%$/, 'Damage', 'while', 'in', 'Human'],
                [/^\+[\d,.]+%$/, 'Damage', 'while', 'Shapeshifted'],
                [/^\+[\d,.]+%$/, 'Damage', 'with', 'Dual-Wielded', 'Weapons'],
                [/^\+[\d,.]+%$/, 'Damage', 'with', 'Ranged', 'Weapons'],
                [/^\+[\d,.]+%$/, 'Damage', 'with', 'Skills', 'that', 'Swap', 'to', 'New', 'Weapons'],
                [/^\+[\d,.]+%$/, 'Damage', 'with', 'Two-Handed', 'Bludgeoning', 'Weapons'],
                [/^\+[\d,.]+%$/, 'Damage', 'with', 'Two-Handed', 'Slashing', 'Weapons'],
                [/^\+[\d,.]+%$/, 'Damage', /^[^OTtw].*$/i], // #Over, #Taken, #to, #while, #with
                [/^\+[\d,.]+%$/, 'Darkness', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Dexterity'],
                [/^\+[\d,.]+%$/, 'Earth', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Fire', 'Damage', 'Over', 'Time'],
                [/^\+[\d,.]+%$/, 'Fire', 'Damage', /^[^O].*$/i], // #Over
                [/^\+[\d,.]+%$/, 'Fire', 'Resistance'], // Ring, Ruby
                [/^\+[\d,.]+%$/, 'Fortify', 'Generation'],
                [/^\+[\d,.]+%$/, 'Frost', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Healing', 'Received'], // Skull
                [/^\+[\d,.]+%$/, 'Imbued', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Imbuement', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Intelligence'],
                [/^\+[\d,.]+%$/, 'Lightning', 'Critical', 'Strike', 'Damage'],
                [/^\+[\d,.]+%$/, 'Lightning', 'Damage'],
                [/^\+[\d,.]+%$/, 'Lightning', 'Resistance'], // Ring, Topaz
                [/^\+[\d,.]+%$/, 'Lucky', 'Hit', 'Chance', 'while', 'You', 'Have', 'a', 'Barrier'],
                [/^\+[\d,.]+%$/, 'Lucky', 'Hit', 'Chance', /^[^w].*$/i], // Wand, #while
                [/^\+[\d,.]+%$/, 'Main', 'Hand', 'Weapon', 'Damage'], // Shield
                [/^\+[\d,.]+%$/, 'Marksman', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Mastery', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Minion', 'Attack', 'Speed'],
                [/^\+[\d,.]+%$/, 'Movement', 'Speed'],
                [/^\+[\d,.]+%$/, 'Overpower', 'Damage', 'with', 'Two-Handed', 'Bludgeoning', 'Weapons'],
                [/^\+[\d,.]+%$/, 'Overpower', 'Damage', 'with', 'Werebear', 'Skills'],
                [/^\+[\d,.]+%$/, 'Overpower', 'Damage', /^[^w].*$/i], // Mace, Ruby, #with
                [/^\+[\d,.]+%$/, 'Physical', 'Damage', 'Over', 'Time'],
                [/^\+[\d,.]+%$/, 'Physical', 'Damage', /^[^O].*$/i], // #Over
                [/^\+[\d,.]+%$/, 'Poison', 'Damage'],
                [/^\+[\d,.]+%$/, 'Poison', 'Resistance'], // Ring, Emerald
                [/^\+[\d,.]+%$/, 'Potion', 'Drop', 'Rate'],
                [/^\+[\d,.]+%$/, 'Pyromancy', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Resistance', 'to', 'All', 'Elements'], // Amulet, Ring, Diamond
                [/^\+[\d,.]+%$/, 'Shadow', 'Damage', 'Over', 'Time'],
                [/^\+[\d,.]+%$/, 'Shadow', 'Damage', /^[^O].*$/i], // #Over
                [/^\+[\d,.]+%$/, 'Shadow', 'Resistance'], // Ring, Amethyst
                [/^\+[\d,.]+%$/, 'Shock', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Shrine', 'Buff', 'Duration'],
                [/^\+[\d,.]+%$/, 'Storm', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Strength'],
                [/^\+[\d,.]+%$/, 'Summoning', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Total', 'Armor', 'while', 'in', 'Werebear', 'Form'],
                [/^\+[\d,.]+%$/, 'Total', 'Armor', 'while', 'in', 'Werewolf', 'Form'],
                [/^\+[\d,.]+%$/, 'Total', 'Armor', /^[^w].*$/i], // #while
                [/^\+[\d,.]+%$/, 'Trap', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Ultimate', 'Skill', 'Damage'], // Diamond
                [/^\+[\d,.]+%$/, 'Vulnerable', 'Damage'], // Crossbow
                [/^\+[\d,.]+%$/, 'Weapon', 'Mastery', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Werebear', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Werewolf', 'Skill', 'Damage'],
                [/^\+[\d,.]+%$/, 'Willpower'],
                [/^\+[\d,.]+$/, 'All', 'Stats'],
                [/^\+[\d,.]+$/, 'Armor'], // Skull
                [/^\+[\d,.]+$/, 'Dexterity'],
                [/^\+[\d,.]+$/, 'Intelligence'],
                [/^\+[\d,.]+$/, 'Life', 'On', 'Kill'], // Scythe, Skull
                [/^\+[\d,.]+$/, 'Life', 'Regeneration', 'while', 'Not', 'Damaged', 'Recently'],
                [/^\+[\d,.]+$/, 'Maximum', 'Energy'],
                [/^\+[\d,.]+$/, 'Maximum', 'Essence'],
                [/^\+[\d,.]+$/, 'Maximum', 'Fury'],
                [/^\+[\d,.]+$/, 'Maximum', 'Life'], // Ruby
                [/^\+[\d,.]+$/, 'Maximum', 'Mana'],
                [/^\+[\d,.]+$/, 'Maximum', 'Spirit'],
                [/^\+[\d,.]+$/, 'Potion', 'Capacity'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Agility', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Brawling', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Companion', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Conjuration', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Corpse', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Curse', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Defensive', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Imbuement', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Macabre', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Mastery', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Subterfuge', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Weapon', 'Mastery', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'All', 'Wrath', 'Skills'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Ball', 'Lightning'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Barrage'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Blight'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Blizzard'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Blood', 'Howl'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Blood', 'Lance'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Blood', 'Mist'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Blood', 'Surge'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Bone', 'Prison'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Bone', 'Spear'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Bone', 'Spirit'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Boulder'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Caltrops'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Chain', 'Lightning'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Challenging', 'Shout'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Charge'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Charged', 'Bolts'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Cold', 'Imbuement'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Concealment'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Corpse', 'Explosion'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Corpse', 'Tendrils'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Cyclone', 'Armor'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Dark', 'Shroud'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Dash'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Death', 'Blow'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Debilitating', 'Roar'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Decrepify'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Double', 'Swing'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Earthen', 'Bulwark'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Fireball'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Firewall'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Flame', 'Shield'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Flurry'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Frost', 'Nova'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Frozen', 'Orb'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Ground', 'Stomp'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Hammer', 'of', 'the', 'Ancients'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Hurricane'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Hydra'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Ice', 'Armor'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Ice', 'Blades'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Ice', 'Shards'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Incinerate'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Iron', 'Maiden'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Iron', 'Skin'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Kick'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Leap'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Lightning', 'Spear'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Lightning', 'Storm'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Meteor'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Penetrating', 'Shot'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Poison', 'Creeper'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Poison', 'Imbuement'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Poison', 'Trap'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Pulverize'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Rabies'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Rallying', 'Cry'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Rapid', 'Fire'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Ravens'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Rend'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Rupture'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Sever'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Shadow', 'Imbuement'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Shadow', 'Step'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Shred'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Smoke', 'Grenade'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Steel', 'Grasp'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Teleport'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Amplify', 'Damage', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Brute', 'Force', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Call', 'of', 'the', 'Wild', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Coalesced', 'Blood', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Compound', 'Fracture', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Conjuration', 'Mastery', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Counteroffensive', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Crushing', 'Earth', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Cut', 'to', 'the', 'Bone', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Deadly', 'Venom', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Defiance', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Devouring', 'Blaze', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Elemental', 'Dominance', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Endless', 'Pyre', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Envenom', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Evulsion', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Exploit', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Frigid', 'Finesse', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Fueled', 'by', 'Death', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Glass', 'Cannon', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Gloom', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Heavy', 'Handed', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Hellbent', 'Commander', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Hoarfrost', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Icy', 'Touch', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Imperfectly', 'Balanced', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Impetus', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Inner', 'Flames', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Malice', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Natural', 'Disaster', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'No', 'Mercy', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Outburst', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Permafrost', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Quickshift', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Resonance', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Shocking', 'Impact', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Slaying', 'Strike', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Stone', 'Guard', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Terror', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Tides', 'of', 'Blood', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Tough', 'as', 'Nails', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Toxic', 'Claws', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Wallop', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Weapon', 'Mastery', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', 'Wild', 'Impulses', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', "Death's", 'Reach', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'the', "Nature's", 'Reach', 'Passive'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Tornado'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Trample'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Twisting', 'Blades'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Upheaval'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'War', 'Cry'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Whirlwind'],
                [/^\+[\d,.]+$/, 'Ranks', 'of', 'Wolves'],
                [/^\+[\d,.]+$/, 'Strength'],
                [/^\+[\d,.]+$/, 'Thorns'], // Shield, Emerald
                [/^\+[\d,.]+$/, 'Willpower'],
            ];
            itemAttribute_marker_arrays.forEach(itemAttribute_marker_array => {
                let itemAttribute_start_index = -itemAttribute_marker_array.length;
                do {
                    itemAttribute_start_index = findAll(itemAttribute_marker_array, itemAttribute_start_index + itemAttribute_marker_array.length);
                    if (0 <= itemAttribute_start_index) {
                        const itemAttribute_texts: string[] = [];
                        let itemAttribute_value = 0;
                        itemAttribute_marker_array.forEach((itemAttribute_marker, itemAttribute_marker_index) => {
                            if (itemAttribute_marker instanceof RegExp) {
                                const itemAttribute_marker_string = (itemAttribute_marker as RegExp).toString();
                                if (!itemAttribute_marker_string.startsWith('/^[^')) {
                                    const rawWord = rawWords[itemAttribute_start_index + itemAttribute_marker_index];
                                    const matchedString = rawWord.match(itemAttribute_marker)![0];
                                    if (itemAttribute_marker_string.includes('\\d')) {
                                        itemAttribute_texts.push(rawWord);
                                        itemAttribute_value = Number(matchedString.replaceAll(/[,%]/g, ''));
                                    } else {
                                        itemAttribute_texts.push(matchedString);
                                    }
                                }
                            } else {
                                itemAttribute_texts.push(itemAttribute_marker);
                            }
                        });
                        this._itemAttributes.push(new Attribute(
                            itemAttribute_texts.join(' '),
                            itemAttribute_value
                        ));
                    }
                } while (0 <= itemAttribute_start_index);
            });
        }

        this._processTime_end_timestamp = Date.now();

        function findAny(targetWords: string[], startIndex: number): number {
            if (0 < targetWords.length) {
                for (let i = startIndex; i < rawWords.length; ++i) {
                    if (targetWords.some(targetWord => isMatch(targetWord, rawWords[i]))) {
                        return i;
                    }
                }
            }
            return -1;
        }

        function isMatch(string1: string, string2: string): boolean {
            if (string1 === null || string1 === undefined) { return string1 === string2; }
            return string1.localeCompare(string2, undefined, { sensitivity: 'base' }) === 0;
        }

        function findAll(targetWords: (string | RegExp)[], startIndex: number): number {
            if (0 < targetWords.length) {
                for (let w = startIndex; w < rawWords.length - targetWords.length + 1; ++w) {
                    for (let t = 0; t < targetWords.length; ++t) {
                        if (
                            targetWords[t] instanceof RegExp ?
                                (targetWords[t] as RegExp).test(rawWords[w + t]) :
                                isMatch(targetWords[t] as string, rawWords[w + t])
                        ) {
                            if (t === targetWords.length - 1) {
                                return w;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
            return -1;
        }
    }
}

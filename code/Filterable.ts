import ItemAttribute from "./ItemAttribute";

export default class Filterable {
    screenshot_processor_InputImageBrightnessThreshold = 0;
    screenshot_processor_ItemImageMaxWidth = 0;
    screenshot_processor_ItemImageMinWidth = 0;
    screenshot_processor_ItemPictureHeight = 0;
    screenshot_processor_ItemPictureWidth = 0;
    screenshot_processor_TextImageBorderTrimSize = 0;
    screenshot_processor_TextImageCornerTrimSize = 0;
    screenshotFileLastModifiedTimestamp = 0;
    screenshotFileName = '';
    screenshotFileSize = 0;

    constructor(
        screenshot_processor_InputImageBrightnessThreshold: number,
        screenshot_processor_ItemImageMaxWidth: number,
        screenshot_processor_ItemImageMinWidth: number,
        screenshot_processor_ItemPictureHeight: number,
        screenshot_processor_ItemPictureWidth: number,
        screenshot_processor_TextImageBorderTrimSize: number,
        screenshot_processor_TextImageCornerTrimSize: number,
        screenshotFileLastModifiedTimestamp: number,
        screenshotFileName: string,
        screenshotFileSize: number
    ) {
        this.screenshot_processor_InputImageBrightnessThreshold = screenshot_processor_InputImageBrightnessThreshold;
        this.screenshot_processor_ItemImageMaxWidth = screenshot_processor_ItemImageMaxWidth;
        this.screenshot_processor_ItemImageMinWidth = screenshot_processor_ItemImageMinWidth;
        this.screenshot_processor_ItemPictureHeight = screenshot_processor_ItemPictureHeight;
        this.screenshot_processor_ItemPictureWidth = screenshot_processor_ItemPictureWidth;
        this.screenshot_processor_TextImageBorderTrimSize = screenshot_processor_TextImageBorderTrimSize;
        this.screenshot_processor_TextImageCornerTrimSize = screenshot_processor_TextImageCornerTrimSize;
        this.screenshotFileLastModifiedTimestamp = screenshotFileLastModifiedTimestamp;
        this.screenshotFileName = screenshotFileName;
        this.screenshotFileSize = screenshotFileSize;

        this.processTime_start = Date.now();
    }

    get key(): string { return `Screenshot (fileName: ${this.screenshotFileName}) (fileLastModifiedTimestamp: ${this.screenshotFileLastModifiedTimestamp}) (fileSize: ${this.screenshotFileSize}) (screenshot_processor_BorderTrimSize: ${this.screenshot_processor_TextImageBorderTrimSize}) (screenshot_processor_BrightnessThreshold: ${this.screenshot_processor_InputImageBrightnessThreshold}) (screenshot_processor_MaxWidth: ${this.screenshot_processor_ItemImageMaxWidth}) (screenshot_processor_MinWidth: ${this.screenshot_processor_ItemImageMinWidth}) (screenshot_processor_PictureHeight: ${this.screenshot_processor_ItemPictureHeight}) (screenshot_processor_PictureWidth: ${this.screenshot_processor_ItemPictureWidth})`; }

    get inputImage_afterBrightnessThreshold_canvas_id(): string { return `${this.key} inputImage_afterBrightnessThreshold_canvas`; }
    get inputImage_afterItemImageDetection_canvas_id(): string { return `${this.key} inputImage_afterItemImageDetection_canvas`; }
    get inputImage_image_id(): string { return `${this.key} inputImage_image`; };
    get itemImage_canvas_id(): string { return `${this.key} itemImage_canvas`; }
    get itemImage_data_candidates(): IRectangle[] { return this.itemImage_data_exists ? this.itemImage_data.candidates : []; }
    get itemImage_data_exists(): boolean { return this.itemImage_data !== undefined; }
    get itemImage_data_id(): string { return `${this.key} itemImage_data`; }
    get itemImage_data_winner(): IRectangle { return this.itemImage_data.winner; }
    get itemImage_data() { return _itemImageData[this.itemImage_data_id]; }
    get text_data_confidence(): number { return this.text_data_exists ? this.text_data.confidence : -1; }
    get text_data_exists(): boolean { return this.text_data !== undefined; }
    get text_data_text(): string { return this.text_data_exists ? this.text_data.text : ''; }
    get text_data_words(): string[] { return this.text_data_exists ? this.text_data.words : []; }
    get text_data() { return _textData[this.text_dataId]; }
    get text_dataId(): string { return `${this.key} text_data`; }
    get textImage_canvas_id(): string { return `${this.key} textImage_canvas`; }

    processTime_end = -1;
    processTime_start = -1;
    processTime_Image_end = -1;
    processTime_Image_start = -1;
    processTime_Text_end = -1;
    processTime_Text_start = -1;

    get isProcessed(): boolean { return this.processTime_end !== -1; }
    get isProcessing_Image(): boolean { return this.processTime_Image_start !== -1 && this.processTime_Image_end === -1; }
    get isProcessing_Text(): boolean { return this.processTime_Text_start !== -1 && this.processTime_Text_end === -1; }
    get processTime_Image(): number { return this.processTime_Image_end - this.processTime_Image_start; }
    get processTime_Text(): number { return this.processTime_Text_end - this.processTime_Text_start; }
    get processTime(): number { return this.processTime_end - this.processTime_start; }
    end_Processing_Image() { this.processTime_Image_end = Date.now(); }
    end_Processing_Text() { this.processTime_Text_end = Date.now(); }
    start_Processing_Image() { this.processTime_Image_start = Date.now(); }
    start_Processing_Text() { this.processTime_Text_start = Date.now(); }

    itemName = 'Processing Item Name ...';
    itemType = 'Processing Item Type ...';
    itemType_endIndex = -1;
    itemType_startIndex = -1;
    itemPower = 'Processing Item Power ...';
    itemPower_index = -1;
    itemAttributes = [] as ItemAttribute[];

    score = 0;

    processTextData() {
        const rawWords = this.text_data_words;

        const itemType_Amulet = 'Amulet';
        const itemType_Armor = 'Armor';
        const itemType_Axe = 'Axe';
        const itemType_Boots = 'Boots';
        const itemType_Bow = 'Bow';
        const itemType_Crossbow = 'Crossbow';
        const itemType_Dagger = 'Dagger';
        const itemType_Focus = 'Focus';
        const itemType_Gloves = 'Gloves';
        const itemType_Helm = 'Helm';
        const itemType_Mace = 'Mace';
        const itemType_Pants = 'Pants';
        const itemType_Polearm = 'Polearm';
        const itemType_Ring = 'Ring';
        const itemType_Scythe = 'Scythe';
        const itemType_Shield = 'Shield';
        const itemType_Staff = 'Staff';
        const itemType_Sword = 'Sword';
        const itemType_Totem = 'Totem';
        const itemType_Wand = 'Wand';

        this.itemName = 'Unknown Item Name';
        this.itemType = 'Unknown Item Type';
        let itemType = 'Unknown Item Type';
        const itemType_start_markers = [
            'Ancestral',
            'Common',
            'Legendary',
            'Magic',
            'Rare',
            'Sacred',
            'Unique'
        ];
        this.itemType_startIndex = findAny(itemType_start_markers, 0);
        if (0 <= this.itemType_startIndex) {
            if (1 <= this.itemType_startIndex) {
                this.itemName = rawWords.slice(0, this.itemType_startIndex).map(word => word.replaceAll(/[@©®]/g, 'O')).join(' ');
            }

            const itemType_end_markers = [
                itemType_Amulet,
                itemType_Armor,
                itemType_Axe,
                itemType_Boots,
                itemType_Bow,
                itemType_Crossbow,
                itemType_Dagger,
                itemType_Focus,
                itemType_Gloves,
                itemType_Helm,
                itemType_Mace,
                itemType_Pants,
                itemType_Polearm,
                itemType_Ring,
                itemType_Scythe,
                itemType_Shield,
                itemType_Staff,
                itemType_Sword,
                itemType_Totem,
                itemType_Wand
            ];
            this.itemType_endIndex = findAny(itemType_end_markers, this.itemType_startIndex);
            if (this.itemType_startIndex < this.itemType_endIndex) {
                this.itemType = rawWords.slice(this.itemType_startIndex, this.itemType_endIndex + 1).join(' ');
                itemType = rawWords[this.itemType_endIndex];
            }
        }

        const itemPower_markers = [
            /^[\d+]+$/,
            'Item',
            'Power'
        ];
        this.itemPower_index = findAll(itemPower_markers, this.itemType_endIndex + 1);
        if (0 <= this.itemPower_index) {
            this.itemPower = rawWords.slice(this.itemPower_index, this.itemPower_index + itemPower_markers.length).join(' ');
        } else {
            this.itemPower = 'Unknown Item Power';
        }

        let itemAttribute_markers_Amulet_Resistance_to_All_Elements = [] as (string | RegExp)[];
        let itemAttribute_markers_Axe_Damage_to_Healthy_Enemies = [] as (string | RegExp)[];
        let itemAttribute_markers_Bow_Damage_to_Distant_Enemies = [] as (string | RegExp)[];
        let itemAttribute_markers_Crossbow_Vulnerable_Damage = [] as (string | RegExp)[];
        let itemAttribute_markers_Dagger_Damage_to_Close_Enemies = [] as (string | RegExp)[];
        let itemAttribute_markers_Focus_Cooldown_Reduction = [] as (string | RegExp)[];
        let itemAttribute_markers_Mace_Overpower_Damage = [] as (string | RegExp)[];
        let itemAttribute_markers_Polearm_Damage_to_Injured_Enemies = [] as (string | RegExp)[];
        let itemAttribute_markers_Ring_Cold_Resistance = [] as (string | RegExp)[];
        let itemAttribute_markers_Ring_Fire_Resistance = [] as (string | RegExp)[];
        let itemAttribute_markers_Ring_Lightning_Resistance = [] as (string | RegExp)[];
        let itemAttribute_markers_Ring_Poison_Resistance = [] as (string | RegExp)[];
        let itemAttribute_markers_Ring_Resistance_to_All_Elements = [] as (string | RegExp)[];
        let itemAttribute_markers_Ring_Shadow_Resistance = [] as (string | RegExp)[];
        let itemAttribute_markers_Scythe_Life_On_Kill = [] as (string | RegExp)[];
        let itemAttribute_markers_Shield_Block_Chance = [] as (string | RegExp)[];
        let itemAttribute_markers_Shield_Blocked_Damage_Reduction = [] as (string | RegExp)[];
        let itemAttribute_markers_Shield_Main_Hand_Weapon_Damage = [] as (string | RegExp)[];
        let itemAttribute_markers_Shield_Thorns = [] as (string | RegExp)[];
        let itemAttribute_markers_Staff_Damage_to_Crowd_Controlled_Enemies = [] as (string | RegExp)[];
        let itemAttribute_markers_Sword_Critical_Strike_Damage = [] as (string | RegExp)[];
        let itemAttribute_markers_Totem_Cooldown_Reduction = [] as (string | RegExp)[];
        let itemAttribute_markers_Wand_Lucky_Hit_Chance = [] as (string | RegExp)[];

        const itemAttribute_markers_array = [
            ['Lucky', 'Hit:', 'Up', 'to', 'a', '5%', 'Chance', 'to', 'Heal', /^\+[\d,.]+$/, 'Life'],
            ['Lucky', 'Hit:', 'Up', 'to', 'a', '5%', 'Chance', 'to', 'Restore', /^\+[\d,.]+%$/, 'Primary', 'Resource'],
            ['Lucky', 'Hit:', 'Up', 'to', 'a', /^\+[\d,.]+%$/, 'Chance', 'to', 'Execute', 'Injured', 'Non-Elites'],
            ['Lucky', 'Hit:', 'Up', 'to', 'a', /^\+[\d,.]+%$/, 'Chance', 'to', 'Slow'],
            ['Minions', 'Inherit', /^\+[\d,.]+%$/, 'of', 'Your', 'Thorns'],
            ['Trap', 'Skill', 'Arm', 'Time', 'Reduced', 'by', /^[\d,.]+$/, /^Seconds?$/i],
            [/^[\d,.]+%$/, 'Control', 'Impaired', 'Duration', 'Reduction'],
            itemAttribute_markers_Focus_Cooldown_Reduction =
            itemAttribute_markers_Totem_Cooldown_Reduction =
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
            itemAttribute_markers_Shield_Block_Chance =
            [/^\+[\d,.]+%$/, 'Block', 'Chance'], // Shield
            itemAttribute_markers_Shield_Blocked_Damage_Reduction =
            [/^\+[\d,.]+%$/, 'Blocked', 'Damage', 'Reduction'], // Shield
            [/^\+[\d,.]+%$/, 'Blood', 'Orb', 'Healing'],
            [/^\+[\d,.]+%$/, 'Blood', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Bone', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Brawling', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Cold', 'Damage'],
            itemAttribute_markers_Ring_Cold_Resistance =
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
            itemAttribute_markers_Sword_Critical_Strike_Damage =
            [/^\+[\d,.]+%$/, 'Critical', 'Strike', 'Damage', /^[^tw].*$/i], // Sword, #to, #with
            [/^\+[\d,.]+%$/, 'Crowd', 'Control', 'Duration'],
            [/^\+[\d,.]+%$/, 'Cutthroat', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Damage', 'Over', 'Time'], // Amethyst
            [/^\+[\d,.]+%$/, 'Damage', 'Taken', 'Over', 'Time', 'Reduction'], // Amethyst
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Bleeding', 'Enemies'],
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Burning', 'Enemies'],
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Chilled', 'Enemies'],
            itemAttribute_markers_Dagger_Damage_to_Close_Enemies =
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Close', 'Enemies'], // Dagger
            itemAttribute_markers_Staff_Damage_to_Crowd_Controlled_Enemies =
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Crowd', 'Controlled', 'Enemies'], // Staff
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Daze', 'Enemies'],
            itemAttribute_markers_Bow_Damage_to_Distant_Enemies =
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Distant', 'Enemies'], // Bow
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Enemies', 'Affected', 'by', 'Trap', 'Skills'],
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Freeze', 'Enemies'],
            itemAttribute_markers_Axe_Damage_to_Healthy_Enemies =
            [/^\+[\d,.]+%$/, 'Damage', 'to', 'Healthy', 'Enemies'], // Axe
            itemAttribute_markers_Polearm_Damage_to_Injured_Enemies =
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
            itemAttribute_markers_Ring_Fire_Resistance =
            [/^\+[\d,.]+%$/, 'Fire', 'Resistance'], // Ring, Ruby
            [/^\+[\d,.]+%$/, 'Fortify', 'Generation'],
            [/^\+[\d,.]+%$/, 'Frost', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Healing', 'Received'], // Skull
            [/^\+[\d,.]+%$/, 'Imbued', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Imbuement', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Intelligence'],
            [/^\+[\d,.]+%$/, 'Lightning', 'Critical', 'Strike', 'Damage'],
            [/^\+[\d,.]+%$/, 'Lightning', 'Damage'],
            itemAttribute_markers_Ring_Lightning_Resistance =
            [/^\+[\d,.]+%$/, 'Lightning', 'Resistance'], // Ring, Topaz
            [/^\+[\d,.]+%$/, 'Lucky', 'Hit', 'Chance', 'while', 'You', 'Have', 'a', 'Barrier'],
            itemAttribute_markers_Wand_Lucky_Hit_Chance =
            [/^\+[\d,.]+%$/, 'Lucky', 'Hit', 'Chance', /^[^w].*$/i], // Wand, #while
            itemAttribute_markers_Shield_Main_Hand_Weapon_Damage =
            [/^\+[\d,.]+%$/, 'Main', 'Hand', 'Weapon', 'Damage'], // Shield
            [/^\+[\d,.]+%$/, 'Marksman', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Mastery', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Minion', 'Attack', 'Speed'],
            [/^\+[\d,.]+%$/, 'Movement', 'Speed'],
            [/^\+[\d,.]+%$/, 'Overpower', 'Damage', 'with', 'Two-Handed', 'Bludgeoning', 'Weapons'],
            [/^\+[\d,.]+%$/, 'Overpower', 'Damage', 'with', 'Werebear', 'Skills'],
            itemAttribute_markers_Mace_Overpower_Damage =
            [/^\+[\d,.]+%$/, 'Overpower', 'Damage', /^[^w].*$/i], // Mace, Ruby, #with
            [/^\+[\d,.]+%$/, 'Physical', 'Damage', 'Over', 'Time'],
            [/^\+[\d,.]+%$/, 'Physical', 'Damage', /^[^O].*$/i], // #Over
            [/^\+[\d,.]+%$/, 'Poison', 'Damage'],
            itemAttribute_markers_Ring_Poison_Resistance =
            [/^\+[\d,.]+%$/, 'Poison', 'Resistance'], // Ring, Emerald
            [/^\+[\d,.]+%$/, 'Potion', 'Drop', 'Rate'],
            [/^\+[\d,.]+%$/, 'Pyromancy', 'Skill', 'Damage'],
            itemAttribute_markers_Amulet_Resistance_to_All_Elements =
            itemAttribute_markers_Ring_Resistance_to_All_Elements =
            [/^\+[\d,.]+%$/, 'Resistance', 'to', 'All', 'Elements'], // Amulet, Ring, Diamond
            [/^\+[\d,.]+%$/, 'Shadow', 'Damage', 'Over', 'Time'],
            [/^\+[\d,.]+%$/, 'Shadow', 'Damage', /^[^O].*$/i], // #Over
            itemAttribute_markers_Ring_Shadow_Resistance =
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
            itemAttribute_markers_Crossbow_Vulnerable_Damage =
            [/^\+[\d,.]+%$/, 'Vulnerable', 'Damage'], // Crossbow
            [/^\+[\d,.]+%$/, 'Weapon', 'Mastery', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Werebear', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Werewolf', 'Skill', 'Damage'],
            [/^\+[\d,.]+%$/, 'Willpower'],
            [/^\+[\d,.]+$/, 'All', 'Stats'],
            [/^\+[\d,.]+$/, 'Armor'], // Skull
            [/^\+[\d,.]+$/, 'Dexterity'],
            [/^\+[\d,.]+$/, 'Intelligence'],
            itemAttribute_markers_Scythe_Life_On_Kill =
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
            itemAttribute_markers_Shield_Thorns =
            [/^\+[\d,.]+$/, 'Thorns'], // Shield, Emerald
            [/^\+[\d,.]+$/, 'Willpower'],
        ];
        itemAttribute_markers_array.forEach(itemAttribute_markers => {
            let itemAttribute_rawWords_index = 0 - itemAttribute_markers.length;
            let searchHitCount = 0;
            do {
                itemAttribute_rawWords_index = findAll(itemAttribute_markers, itemAttribute_rawWords_index + itemAttribute_markers.length);
                if (0 <= itemAttribute_rawWords_index) {
                    ++searchHitCount;
                    const itemAttribute_texts = [] as string[];
                    let itemAttribute_value = 0;
                    itemAttribute_markers.forEach((itemAttribute_marker, itemAttribute_marker_index) => {
                        if (itemAttribute_marker instanceof RegExp) {
                            const itemAttribute_marker_string = (itemAttribute_marker as RegExp).toString();
                            if (itemAttribute_marker_string.startsWith('/^[^')) {
                            } else {
                                const rawWord = rawWords[itemAttribute_rawWords_index + itemAttribute_marker_index];
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
                    let isItemTypeBuiltIn = false;
                    switch (itemType) {
                        case itemType_Amulet:

                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Amulet_Resistance_to_All_Elements && searchHitCount <= 2;
                            break;
                        case itemType_Armor:
                            break;
                        case itemType_Axe:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Axe_Damage_to_Healthy_Enemies && searchHitCount <= 1;
                            break;
                        case itemType_Boots:
                            break;
                        case itemType_Bow:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Bow_Damage_to_Distant_Enemies && searchHitCount <= 1;
                            break;
                        case itemType_Crossbow:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Crossbow_Vulnerable_Damage && searchHitCount <= 1;
                            break;
                        case itemType_Dagger:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Dagger_Damage_to_Close_Enemies && searchHitCount <= 1;
                            break;
                        case itemType_Focus:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Focus_Cooldown_Reduction && searchHitCount <= 1;
                            break;
                        case itemType_Gloves:
                            break;
                        case itemType_Helm:
                            break;
                        case itemType_Mace:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Mace_Overpower_Damage && searchHitCount <= 1;
                            break;
                        case itemType_Pants:
                            break;
                        case itemType_Polearm:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Polearm_Damage_to_Injured_Enemies && searchHitCount <= 1;
                            break;
                        case itemType_Ring:
                            const itemAttribute_markers_Ring_built_in_attributes = [
                                itemAttribute_markers_Ring_Cold_Resistance,
                                itemAttribute_markers_Ring_Fire_Resistance,
                                itemAttribute_markers_Ring_Lightning_Resistance,
                                itemAttribute_markers_Ring_Poison_Resistance,
                                itemAttribute_markers_Ring_Resistance_to_All_Elements,
                                itemAttribute_markers_Ring_Shadow_Resistance
                            ];
                            isItemTypeBuiltIn = itemAttribute_markers_Ring_built_in_attributes.some(built_in_attribute => itemAttribute_markers === built_in_attribute) && searchHitCount <= 1;
                            break;
                        case itemType_Scythe:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Scythe_Life_On_Kill && searchHitCount <= 1;
                            break;
                        case itemType_Shield:
                            const itemAttribute_markers_Shield_built_in_attributes = [
                                itemAttribute_markers_Shield_Block_Chance,
                                itemAttribute_markers_Shield_Blocked_Damage_Reduction,
                                itemAttribute_markers_Shield_Main_Hand_Weapon_Damage,
                                itemAttribute_markers_Shield_Thorns
                            ];
                            isItemTypeBuiltIn = itemAttribute_markers_Shield_built_in_attributes.some(built_in_attribute => itemAttribute_markers === built_in_attribute) && searchHitCount <= 1;
                            break;
                        case itemType_Staff:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Staff_Damage_to_Crowd_Controlled_Enemies && searchHitCount <= 1;
                            break;
                        case itemType_Sword:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Sword_Critical_Strike_Damage && searchHitCount <= 1;
                            break;
                        case itemType_Totem:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Totem_Cooldown_Reduction && searchHitCount <= 1;
                            break;
                        case itemType_Wand:
                            isItemTypeBuiltIn = itemAttribute_markers === itemAttribute_markers_Wand_Lucky_Hit_Chance && searchHitCount <= 1;
                            break;
                    }
                    this.itemAttributes.push(new ItemAttribute(
                        isItemTypeBuiltIn,
                        itemAttribute_rawWords_index,
                        itemAttribute_texts.join(' '),
                        itemAttribute_value
                    ));
                }
            } while (0 <= itemAttribute_rawWords_index);
        });

        this.processTime_end = Date.now();

        function findAny(targetWords: string[], startIndex: number): number {
            if (0 < targetWords.length) {
                for (let w = startIndex; w < rawWords.length; ++w) {
                    if (targetWords.some(targetWord => isMatch(targetWord, rawWords[w]))) {
                        return w;
                    }
                }
            }
            return -1;
        }

        function isMatch(string1: string, string2: string): boolean {
            if (string1 === null || string1 === undefined) {
                return string1 === string2;
            }
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

import ItemAttribute from "./ItemAttribute";

export default class Screenshot {
    dataLastModifiedTimestamp = 0;
    dataName = '';
    dataSize = 0;
    screenshot_processor_InputImageBrightnessThreshold = 0;
    screenshot_processor_ItemImageMaxWidth = 0;
    screenshot_processor_ItemImageMinWidth = 0;
    screenshot_processor_ItemPictureHeight = 0;
    screenshot_processor_ItemPictureWidth = 0;
    screenshot_processor_TextImageBorderTrimSize = 0;
    screenshot_processor_TextImageCornerTrimSize = 0;

    constructor(
        dataLastModifiedTimestamp: number,
        dataName: string,
        dataSize: number,
        screenshot_processor_InputImageBrightnessThreshold: number,
        screenshot_processor_ItemImageMaxWidth: number,
        screenshot_processor_ItemImageMinWidth: number,
        screenshot_processor_ItemPictureHeight: number,
        screenshot_processor_ItemPictureWidth: number,
        screenshot_processor_TextImageBorderTrimSize: number,
        screenshot_processor_TextImageCornerTrimSize: number
    ) {
        this.dataLastModifiedTimestamp = dataLastModifiedTimestamp;
        this.dataName = dataName;
        this.dataSize = dataSize;
        this.screenshot_processor_InputImageBrightnessThreshold = screenshot_processor_InputImageBrightnessThreshold;
        this.screenshot_processor_ItemImageMaxWidth = screenshot_processor_ItemImageMaxWidth;
        this.screenshot_processor_ItemImageMinWidth = screenshot_processor_ItemImageMinWidth;
        this.screenshot_processor_ItemPictureHeight = screenshot_processor_ItemPictureHeight;
        this.screenshot_processor_ItemPictureWidth = screenshot_processor_ItemPictureWidth;
        this.screenshot_processor_TextImageBorderTrimSize = screenshot_processor_TextImageBorderTrimSize;
        this.screenshot_processor_TextImageCornerTrimSize = screenshot_processor_TextImageCornerTrimSize;

        this.startTime = Date.now();
    }

    get id(): string { return `Screenshot (fileName: ${this.dataName}) (fileLastModifiedTimestamp: ${this.dataLastModifiedTimestamp}) (fileSize: ${this.dataSize}) (screenshot_processor_BorderTrimSize: ${this.screenshot_processor_TextImageBorderTrimSize}) (screenshot_processor_BrightnessThreshold: ${this.screenshot_processor_InputImageBrightnessThreshold}) (screenshot_processor_MaxWidth: ${this.screenshot_processor_ItemImageMaxWidth}) (screenshot_processor_MinWidth: ${this.screenshot_processor_ItemImageMinWidth}) (screenshot_processor_PictureHeight: ${this.screenshot_processor_ItemPictureHeight}) (screenshot_processor_PictureWidth: ${this.screenshot_processor_ItemPictureWidth})`; }

    get inputImage_afterBrightnessThreshold_canvas(): HTMLCanvasElement { return document.getElementById(this.inputImage_afterBrightnessThreshold_canvasId) as HTMLCanvasElement; }
    get inputImage_afterBrightnessThreshold_canvasId(): string { return `${this.id} inputImage_afterBrightnessThreshold_canvas`; }
    get inputImage_afterItemImageDetection_canvas(): HTMLCanvasElement { return document.getElementById(this.inputImage_afterItemImageDetection_canvasId) as HTMLCanvasElement; }
    get inputImage_afterItemImageDetection_canvasId(): string { return `${this.id} inputImage_afterItemImageDetection_canvas`; }
    get inputImage_image(): HTMLImageElement { return document.getElementById(this.inputImage_imageId) as HTMLImageElement; }
    get inputImage_imageId(): string { return `${this.id} inputImage_image`; };
    get itemImage_canvas(): HTMLCanvasElement { return document.getElementById(this.itemImage_canvasId) as HTMLCanvasElement; }
    get itemImage_canvasId(): string { return `${this.id} itemImage_canvas`; }
    get itemImage_data_candidates(): IRectangle[] { return this.itemImage_data_exists ? this.itemImage_data.candidates : []; }
    get itemImage_data_exists(): boolean { return this.itemImage_data !== undefined; }
    get itemImage_data_winner(): IRectangle { return this.itemImage_data.winner; }
    get itemImage_data() { return d4pi_itemImageData[this.itemImage_dataId]; }
    get itemImage_dataId(): string { return `${this.id} itemImage_data`; }
    get text_data_confidence(): number { return this.text_data_exists ? this.text_data.confidence : -1; }
    get text_data_exists(): boolean { return this.text_data !== undefined; }
    get text_data_text(): string { return this.text_data_exists ? this.text_data.text : ''; }
    get text_data_words(): string[] { return this.text_data_exists ? this.text_data.words : []; }
    get text_data() { return d4pi_textData[this.text_dataId]; }
    get text_dataId(): string { return `${this.id} text_data`; }
    get textImage_canvas(): HTMLCanvasElement { return document.getElementById(this.textImage_canvasId) as HTMLCanvasElement; }
    get textImage_canvasId(): string { return `${this.id} textImage_canvas`; }

    startTime = -1;
    endTime = -1;
    get elapsedTime(): number { return this.endTime - this.startTime; }

    isDone = false;

    itemName = 'Processing Item Name ...';
    itemRarityAndType = 'Processing Item Rarity & Type ...';
    itemRarityAndType_endIndex = -1;
    itemRarityAndType_startIndex = -1;
    itemPower = 'Processing Item Power ...';
    itemPower_index = -1;
    itemAttributes = [] as ItemAttribute[];

    processText() {
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
        this.itemRarityAndType = 'Unknown Item Rarity & Type';
        let itemType = 'Unknown Item Type';
        const itemRarityAndType_start_markers = [
            'Ancestral',
            'Common',
            'Legendary',
            'Magic',
            'Rare',
            'Sacred',
            'Unique'
        ];
        this.itemRarityAndType_startIndex = findAny(itemRarityAndType_start_markers, 0);
        if (0 <= this.itemRarityAndType_startIndex) {
            if (1 <= this.itemRarityAndType_startIndex) {
                this.itemName = rawWords.slice(0, this.itemRarityAndType_startIndex).map(word => word.replaceAll(/[@©®]/g, 'O')).join(' ');
            }

            const itemRarityAndType_end_markers = [
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
            this.itemRarityAndType_endIndex = findAny(itemRarityAndType_end_markers, this.itemRarityAndType_startIndex);
            if (this.itemRarityAndType_startIndex < this.itemRarityAndType_endIndex) {
                this.itemRarityAndType = rawWords.slice(this.itemRarityAndType_startIndex, this.itemRarityAndType_endIndex + 1).join(' ');
                itemType = rawWords[this.itemRarityAndType_endIndex];
            }
        }

        const itemPower_markers = [
            /^[\d+]+$/,
            'Item',
            'Power'
        ];
        this.itemPower_index = findAll(itemPower_markers, this.itemRarityAndType_endIndex + 1);
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
            [/^\+[\d,]+$/,  /**/ ...'All Stats'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Attack Speed'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Barrier Generation'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Basic Skill Attack Speed'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Basic Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Berserking Duration'.split(' ')],
            itemAttribute_markers_Shield_Block_Chance =
            [/^[\d.]+%$/,   /**/ ...'Block Chance'.split(' ')],
            itemAttribute_markers_Shield_Blocked_Damage_Reduction =
            [/^[\d.]+%$/,   /**/ ...'Blocked Damage Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Blood Orb Healing'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Blood Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Bone Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Brawling Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Cold Damage'.split(' ')],
            itemAttribute_markers_Ring_Cold_Resistance =
            [/^\+[\d.]+%$/, /**/ ...'Cold Resistance'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Companion Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Conjuration Skill Damage'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Control Impaired Duration Reduction'.split(' ')],
            itemAttribute_markers_Focus_Cooldown_Reduction =
            itemAttribute_markers_Totem_Cooldown_Reduction =
            [/^[\d.]+%$/,   /**/ ...'Cooldown Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Core Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Crackling Energy Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Chance'.split(' '), /^[^A].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Chance Against Injured Enemies'.split(' ')],
            itemAttribute_markers_Sword_Critical_Strike_Damage =
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Damage'.split(' '), /^[^tw].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Damage with Bone Skills'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Damage with Earth Skills'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Damage with Imbued Skills'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Critical Strike Damage with Werewolf Skills'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Crowd Control Duration'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Cutthroat Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage'.split(' '), /^[^Otw].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Damage Over Time'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction'.split(' '), /^[^f].*$/i],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction from Bleeding Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction from Burning Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction from Close Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction from Distant Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction from Poisoned Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction from Shadow Damage Over Time-Affected Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction while Fortified'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Damage Reduction while Injured'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Bleeding Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Burning Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Chilled Enemies'.split(' ')],
            itemAttribute_markers_Dagger_Damage_to_Close_Enemies =
            [/^\+[\d.]+%$/, /**/ ...'Damage to Close Enemies'.split(' ')],
            itemAttribute_markers_Staff_Damage_to_Crowd_Controlled_Enemies =
            [/^\+[\d.]+%$/, /**/ ...'Damage to Crowd Controlled Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Daze Enemies'.split(' ')],
            itemAttribute_markers_Bow_Damage_to_Distant_Enemies =
            [/^\+[\d.]+%$/, /**/ ...'Damage to Distant Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Enemies Affected by Trap Skills'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Freeze Enemies'.split(' ')],
            itemAttribute_markers_Axe_Damage_to_Healthy_Enemies =
            [/^\+[\d.]+%$/, /**/ ...'Damage to Healthy Enemies'.split(' ')],
            itemAttribute_markers_Polearm_Damage_to_Injured_Enemies =
            [/^\+[\d.]+%$/, /**/ ...'Damage to Injured Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Poisoned Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Shadow Damage Over Time-Affected Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage to Stun Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage while Berserking'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage while in Human'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage while Shapeshifted'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage with Dual-Wielded Weapons'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage with Ranged Weapons'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage with Skills that Swap to New Weapons'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage with Two-Handed Bludgeoning Weapons'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Damage with Two-Handed Slashing Weapons'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Darkness Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Dexterity'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Dexterity'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Dodge Chance'.split(' '), /^[^A].*$/i],
            [/^[\d.]+%$/,   /**/ ...'Dodge Chance Against Close Enemies'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Dodge Chance Against Distant Enemies'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Earth Skill Damage'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Energy Cost Reduction'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Essence Cost Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Fire Damage'.split(' '), /^[^O].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Fire Damage Over Time'.split(' ')],
            itemAttribute_markers_Ring_Fire_Resistance =
            [/^\+[\d.]+%$/, /**/ ...'Fire Resistance'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Fortify Generation'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Frost Skill Damage'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Fury Cost Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Healing Received'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Imbued Skill Damage'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Imbuement Skill Cooldown Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Imbuement Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Intelligence'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Intelligence'.split(' ')],
            itemAttribute_markers_Scythe_Life_On_Kill =
            [/^\+[\d,]+$/,  /**/ ...'Life On Kill'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Life Regeneration while Not Damaged Recently'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Lightning Critical Strike Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Lightning Damage'.split(' ')],
            itemAttribute_markers_Ring_Lightning_Resistance =
            [/^\+[\d.]+%$/, /**/ ...'Lightning Resistance'.split(' ')],
            itemAttribute_markers_Wand_Lucky_Hit_Chance =
            [/^\+[\d.]+%$/, /**/ ...'Lucky Hit Chance'.split(' '), /^[^w].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Lucky Hit Chance while You Have a Barrier'.split(' ')],
            [               /**/ ...'Lucky Hit: Up to a'.split(' '), /^\+[\d.]+%$/, ...'Chance to Execute Injured Non-Elites'.split(' ')],
            [               /**/ ...'Lucky Hit: Up to a'.split(' '), /^\+[\d.]+%$/, ...'Chance to Slow'.split(' ')],
            [               /**/ ...'Lucky Hit: Up to a 5% Chance to Heal'.split(' '), /^\+[\d,]+$/, 'Life'],
            [               /**/ ...'Lucky Hit: Up to a 5% Chance to Restore'.split(' '), /^\+[\d.]+%$/, ...'Primary Resource'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Mana Cost Reduction'.split(' ')],
            itemAttribute_markers_Shield_Main_Hand_Weapon_Damage =
            [/^\+[\d.]+%$/, /**/ ...'Main Hand Weapon Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Marksman Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Mastery Skill Damage'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Maximum Energy'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Maximum Essence'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Maximum Fury'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Maximum Life'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Maximum Mana'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Maximum Minion Life'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Maximum Spirit'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Minion Attack Speed'.split(' ')],
            [               /**/ ...'Minions Inherit'.split(' '), /^\+[\d.]+%$/, ...'of Your Thorns'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Movement Speed'.split(' ')],
            itemAttribute_markers_Mace_Overpower_Damage =
            [/^\+[\d.]+%$/, /**/ ...'Overpower Damage'.split(' '), /^[^w].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Overpower Damage with Two-Handed Bludgeoning Weapons'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Overpower Damage with Werebear Skills'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Physical Damage'.split(' '), /^[^O].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Physical Damage Over Time'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Poison Damage'.split(' ')],
            itemAttribute_markers_Ring_Poison_Resistance =
            [/^\+[\d.]+%$/, /**/ ...'Poison Resistance'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Potion Capacity'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Potion Drop Rate'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Pyromancy Skill Damage'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Agility Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Brawling Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Companion Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Conjuration Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Corpse Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Curse Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Defensive Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Imbuement Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Macabre Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Mastery Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Subterfuge Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Weapon Mastery Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of All Wrath Skills'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Ball Lightning'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Barrage'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Blight'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Blizzard'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Blood Howl'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Blood Lance'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Blood Mist'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Blood Surge'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Bone Prison'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Bone Spear'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Bone Spirit'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Boulder'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Caltrops'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Chain Lightning'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Challenging Shout'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Charge'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Charged Bolts'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Cold Imbuement'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Concealment'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Corpse Explosion'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Corpse Tendrils'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Cyclone Armor'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Dark Shroud'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Dash'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Death Blow'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Debilitating Roar'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Decrepify'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Double Swing'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Earthen Bulwark'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Fireball'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Firewall'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Flame Shield'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Flurry'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Frost Nova'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Frozen Orb'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Ground Stomp'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Hammer of the Ancients'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Hurricane'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Hydra'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Ice Armor'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Ice Blades'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Ice Shards'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Incinerate'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Iron Maiden'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Iron Skin'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Kick'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Leap'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Lightning Spear'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Lightning Storm'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Meteor'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Penetrating Shot'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Poison Creeper'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Poison Imbuement'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Poison Trap'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Pulverize'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Rabies'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Rallying Cry'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Rapid Fire'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Ravens'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Rend'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Rupture'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Sever'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Shadow Imbuement'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Shadow Step'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Shred'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Smoke Grenade'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Steel Grasp'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Teleport'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Amplify Damage Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Brute Force Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Call of the Wild Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Coalesced Blood Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Compound Fracture Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Conjuration Mastery Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Counteroffensive Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Crushing Earth Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Cut to the Bone Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Deadly Venom Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ..."Ranks of the Death's Reach Passive".split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Defiance Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Devouring Blaze Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Elemental Dominance Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Endless Pyre Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Envenom Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Evulsion Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Exploit Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Frigid Finesse Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Fueled by Death Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Glass Cannon Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Gloom Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Heavy Handed Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Hellbent Commander Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Hoarfrost Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Icy Touch Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Imperfectly Balanced Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Impetus Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Inner Flames Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Malice Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Natural Disaster Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ..."Ranks of the Nature's Reach Passive".split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the No Mercy Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Outburst Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Permafrost Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Quickshift Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Resonance Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Shocking Impact Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Slaying Strike Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Stone Guard Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Terror Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Tides of Blood Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Tough as Nails Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Toxic Claws Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Wallop Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Weapon Mastery Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of the Wild Impulses Passive'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Tornado'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Trample'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Twisting Blades'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Upheaval'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of War Cry'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Whirlwind'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Ranks of Wolves'.split(' ')],
            itemAttribute_markers_Amulet_Resistance_to_All_Elements =
            itemAttribute_markers_Ring_Resistance_to_All_Elements =
            [/^\+[\d.]+%$/, /**/ ...'Resistance to All Elements'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Resource Generation'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Shadow Damage'.split(' '), /^[^O].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Shadow Damage Over Time'.split(' ')],
            itemAttribute_markers_Ring_Shadow_Resistance =
            [/^\+[\d.]+%$/, /**/ ...'Shadow Resistance'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Shock Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Shrine Buff Duration'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Slow Duration Reduction'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Spirit Cost Reduction'.split(' ')],
            [/^[\d.]+%$/,   /**/ ...'Storm Skill Cooldown Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Storm Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Strength'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Strength'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Summoning Skill Damage'.split(' ')],
            itemAttribute_markers_Shield_Thorns =
            [/^\+[\d,]+$/,  /**/ ...'Thorns'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Total Armor'.split(' '), /^[^w].*$/i],
            [/^\+[\d.]+%$/, /**/ ...'Total Armor while in Werebear Form'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Total Armor while in Werewolf Form'.split(' ')],
            [               /**/ ...'Trap Skill Arm Time Reduced by'.split(' '), /^[\d,]+$/, /^Second(s)?$/i],
            [/^[\d.]+%$/,   /**/ ...'Trap Skill Cooldown Reduction'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Trap Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Ultimate Skill Damage'.split(' ')],
            itemAttribute_markers_Crossbow_Vulnerable_Damage =
            [/^\+[\d.]+%$/, /**/ ...'Vulnerable Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Weapon Mastery Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Werebear Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Werewolf Skill Damage'.split(' ')],
            [/^\+[\d.]+%$/, /**/ ...'Willpower'.split(' ')],
            [/^\+[\d,]+$/,  /**/ ...'Willpower'.split(' ')]
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

        this.isDone = true;
        this.endTime = Date.now();

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

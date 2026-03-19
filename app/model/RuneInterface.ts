export interface RuneData {
    runes: Rune[]
}

export interface Rune {
    name: string
    imagePath: string
    requiredLevel: number
    weaponEffect: string
    helmetEffect: string
    armorEffect: string
    shieldEffect: string
}
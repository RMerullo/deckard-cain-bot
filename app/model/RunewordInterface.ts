export interface RunewordData {
    name: string
    runes: string[]
    level: number
    sockets: number
    equipment: {
        type: string[]
        substype: string[]
    }
    stats: string[]
}
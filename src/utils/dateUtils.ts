export const SPECIAL_START_DATE = new Date('2025-05-25')
export const SPECIAL_END_DATE = new Date('2025-06-15')

export function isSpecialActive(): boolean {
    const now = new Date()
    return now >= SPECIAL_START_DATE && now <= SPECIAL_END_DATE
}
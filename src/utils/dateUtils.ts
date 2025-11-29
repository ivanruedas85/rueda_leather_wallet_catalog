export const SPECIAL_START_DATE = new Date('2025-11-29')
export const SPECIAL_END_DATE = new Date('2025-12-20')

export function isSpecialActive(): boolean {
    const now = new Date()
    return now >= SPECIAL_START_DATE && now <= SPECIAL_END_DATE
}
/**
 * Skan natijalarini saqlash (xotira). Production da DB/Redis bilan almashtirish mumkin.
 */

export interface StoredScanResult {
  id: string
  type: "url" | "text" | "image" | "audio" | "apk"
  content: string
  riskScore: number
  label: "benign" | "suspicious" | "malicious"
  explanation: Array<{ feature: string; importance: number; detail: string }>
  recommendations: string[]
  details: Record<string, unknown>
  scanDate: string
  /** Result sahifasi uchun format (artifacts, jobId va hokazo) */
  resultPage: {
    jobId: string
    type: string
    score: number
    label: "benign" | "suspicious" | "malicious"
    explanation: Array<{ feature: string; importance: number; detail: string }>
    recommendations: string[]
    artifacts: Record<string, unknown>
    submittedAt: string
    completedAt: string
  }
}

const store = new Map<string, StoredScanResult>()

export function saveScanResult(result: StoredScanResult): void {
  store.set(result.id, result)
}

export function getScanResult(id: string): StoredScanResult | undefined {
  return store.get(id)
}

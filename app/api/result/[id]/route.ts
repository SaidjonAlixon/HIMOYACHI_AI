import { type NextRequest, NextResponse } from "next/server"
import { getScanResult } from "@/lib/scan-store"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const result = getScanResult(id)
  if (!result) {
    return NextResponse.json({ error: "Natija topilmadi" }, { status: 404 })
  }
  return NextResponse.json(result.resultPage)
}

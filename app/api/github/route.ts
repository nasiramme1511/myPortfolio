import { NextResponse } from 'next/server';
import { fetchGitHubStats } from '@/lib/github';

export async function GET() {
  const data = await fetchGitHubStats();
  return NextResponse.json(data);
}

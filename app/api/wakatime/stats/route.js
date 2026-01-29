import { NextResponse } from 'next/server';

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY || 'waka_8d9abed8-b345-4a39-84d0-473eea2f5723';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || 'last_7_days'; // last_7_days, last_30_days, all_time

    // Get WakaTime stats
    // WakaTime uses Basic Auth with API key as both username and password
    const authString = Buffer.from(`${WAKATIME_API_KEY}:`).toString('base64');
    const response = await fetch(`https://wakatime.com/api/v1/users/current/stats/${range}`, {
      headers: {
        'Authorization': `Basic ${authString}`,
      },
    });

    if (!response.ok) {
      throw new Error('WakaTime API error');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('WakaTime API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime stats' },
      { status: 500 }
    );
  }
}


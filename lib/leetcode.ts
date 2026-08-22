import { unstable_cache } from 'next/cache';

const username = 'user8955jU';

const dashboardQuery = `
  query userDashboard($username: String!, $year: Int) {
    matchedUser(username: $username) {
      username
      profile { ranking reputation realName }
      submitStatsGlobal { acSubmissionNum { difficulty count submissions } }
      userCalendar(year: $year) { activeYears streak totalActiveDays submissionCalendar }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
      badge { name }
    }
  }
`;

export type LeetCodeDashboard = {
  matchedUser: {
    username: string;
    profile: { ranking: number; reputation: number; realName: string | null };
    submitStatsGlobal: {
      acSubmissionNum: Array<{ difficulty: string; count: number; submissions: number }>;
    };
    userCalendar: {
      activeYears: number[];
      streak: number;
      totalActiveDays: number;
      submissionCalendar: string;
    } | null;
  } | null;
  userContestRanking: {
    attendedContestsCount: number;
    rating: number | null;
    globalRanking: number | null;
    totalParticipants: number | null;
    topPercentage: number | null;
    badge: { name: string } | null;
  } | null;
};

type GraphQLResponse = {
  data?: LeetCodeDashboard;
  errors?: Array<{ message: string }>;
};

const fetchDashboard = unstable_cache(
  async (): Promise<LeetCodeDashboard | null> => {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        query: dashboardQuery,
        variables: { username, year: new Date().getFullYear() },
      }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as GraphQLResponse;
    if (payload.errors?.length || !payload.data?.matchedUser) {
      throw new Error(payload.errors?.[0]?.message ?? 'LeetCode user was not found');
    }

    return payload.data;
  },
  ['leetcode-dashboard-user8955ju'],
  { revalidate: 3600, tags: ['leetcode-dashboard'] },
);

export async function getLeetCodeDashboard() {
  try {
    return await fetchDashboard();
  } catch {
    return null;
  }
}


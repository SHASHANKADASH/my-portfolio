import { getLeetCodeDashboard } from '../lib/leetcode';

const HEATMAP_WEEKS = 53;
const DAYS_PER_WEEK = 7;

function formatNumber(value: number | null | undefined) {
  return value == null ? '—' : new Intl.NumberFormat('en-US').format(value);
}

function heatColor(count: number) {
  if (count === 0) return '#282828';
  if (count === 1) return '#004b1c';
  if (count <= 3) return '#006d2c';
  if (count <= 6) return '#41ab5d';
  return '#39ff74';
}

function utcDateKey(date: Date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(
    date.getUTCDate()
  ).padStart(2, '0')}`;
}

function createHeatmap(calendar: string | null | undefined) {
  let submissions: Record<string, number> = {};

  try {
    submissions = calendar ? (JSON.parse(calendar) as Record<string, number>) : {};
  } catch {
    submissions = {};
  }

  const submissionsByDate = new Map(
    Object.entries(submissions).map(([timestamp, count]) => [
      utcDateKey(new Date(Number(timestamp) * 1000)),
      count,
    ])
  );
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - HEATMAP_WEEKS * DAYS_PER_WEEK + 1);
  //start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const heatMap = Array.from({ length: HEATMAP_WEEKS * DAYS_PER_WEEK }, (_, index) => {
    const day = new Date(start);
    day.setUTCDate(start.getUTCDate() + index);
    const dateKey = utcDateKey(day);
    const count = submissionsByDate.get(dateKey) ?? 0;
    const date = day.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });

    return {
      dateKey,
      count,
      date,
      month: day.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }),
      dayOfMonth: day.getUTCDate(),
      week: Math.floor(index / DAYS_PER_WEEK),
    };
  });
  return heatMap;
}

export default async function LeetCodeStats() {
  const dashboard = await getLeetCodeDashboard();

  if (!dashboard?.matchedUser) {
    return (
      <section className="pb-24 pt-10 sm:pb-32 sm:pt-14" aria-labelledby="leetcode-heading">
        <div className="leetcode-header">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cp-peach">LeetCode</p>
          <h2
            id="leetcode-heading"
            className="mt-3 text-2xl font-medium tracking-tight text-cp-text"
          >
            Coding activity
          </h2>
          <p className="mt-3 text-sm text-cp-subtext">
            Stats are temporarily unavailable. Please check back shortly.
          </p>
        </div>
      </section>
    );
  }

  const { matchedUser: user, userContestRanking: contest } = dashboard;
  const solved = user.submitStatsGlobal.acSubmissionNum.reduce<Record<string, number>>(
    (totals, stat) => {
      totals[stat.difficulty] = stat.count;
      return totals;
    },
    {}
  );
  const heatmap = createHeatmap(user.userCalendar?.submissionCalendar);
  const monthLabels = heatmap.filter((day, index) => index === 0 || day.dayOfMonth === 1);

  return (
    <section className="pb-24 pt-10 sm:pb-32 sm:pt-14" aria-labelledby="leetcode-heading">
      <div>
        <div className="leetcode-header flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cp-peach">LeetCode</p>
            <h2
              id="leetcode-heading"
              className="mt-3 text-2xl font-medium tracking-tight text-cp-text sm:text-3xl"
            >
              Trying to solve one problem a day :)
            </h2>
          </div>
          <a
            href={`https://leetcode.com/${user.username}/`}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-cp-blue transition-colors hover:text-cp-text"
          >
            @{user.username} ↗
          </a>
        </div>

        <div className="leetcode-dashboard mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12">
          <div>
            <div className="pb-2">
              <div
                className="leetcode-heatmap"
                aria-label="LeetCode submission activity over the last year"
              >
                {heatmap.map((day) => (
                  <span
                    key={day.dateKey}
                    title={`${day.date}: ${day.count} submission${day.count === 1 ? '' : 's'}`}
                    className="leetcode-day"
                    style={{ backgroundColor: heatColor(day.count) }}
                  />
                ))}
              </div>
            </div>
            <div className="leetcode-months mt-2" aria-hidden>
              {monthLabels.map((day) => (
                <span key={day.dateKey} style={{ gridColumnStart: day.week + 1 }}>
                  <span className="leetcode-month-full">{day.month}</span>
                  <span className="leetcode-month-short">{day.month.charAt(0)}</span>
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-cp-subtext">
              <span>Last 52 weeks</span>
              <span className="flex items-center gap-1.5">
                Less
                {[0, 1, 3, 7].map((count) => (
                  <i
                    key={count}
                    className="leetcode-key"
                    style={{ backgroundColor: heatColor(count) }}
                  />
                ))}
                More
              </span>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-1 lg:gap-y-5">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-cp-subtext">
                Global rank
              </dt>
              <dd className="mt-1 text-xl font-medium text-cp-text">
                #{formatNumber(user.profile.ranking)}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-cp-subtext">
                Streak
              </dt>
              <dd className="mt-1 text-xl font-medium text-cp-green">
                {formatNumber(user.userCalendar?.streak)}{' '}
                <span className="text-xs text-cp-subtext">days</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-cp-subtext">
                Active days
              </dt>
              <dd className="mt-1 text-xl font-medium text-cp-text">
                {formatNumber(user.userCalendar?.totalActiveDays)}
              </dd>
            </div>
          </dl>
        </div>

        <div className="leetcode-solved mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-cp-subtext">Solved</p>
            <p className="mt-2 text-3xl font-medium text-cp-text">{formatNumber(solved.All)}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-cp-subtext">Easy</p>
            <p className="mt-2 text-3xl font-medium text-cp-green">{formatNumber(solved.Easy)}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-cp-subtext">Medium</p>
            <p className="mt-2 text-3xl font-medium text-cp-peach">{formatNumber(solved.Medium)}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-cp-subtext">Hard</p>
            <p className="mt-2 text-3xl font-medium text-cp-maroon">{formatNumber(solved.Hard)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Constants and data structure for the coding dashboard
const PLATFORM_COLORS = {
    LeetCode: '#FFA116',
    CodeForces: '#1890FF',
    GeeksForGeeks: '#2E8B57',
    CodeChef: '#5B4638'
  };
  
  const DIFFICULTY_COLORS = {
    Easy: '#22C55E',
    Medium: '#FBBF24',
    Hard: '#EF4444'
  };
  
  export const userData = {
    personalInfo: {
      username: "deepak_v2003",
      fullName: "Deepak Vishwakarma",
      institution: "Walchand College of Engineering, Sangli",
      country: "India",
      languages: ["Java", "C++", "JavaScript"]
    },
    statistics: {
      totalSolved: 747,
      totalAttempted: 3329,
      submissions: 1530,
      contests: 41,
      globalRank: 40693,
      activeDays: 332,
      maxStreak: 170,
      currentStreak: 24,
      viewCount: 625,
      reputation: 3,
      badgeCount: 11
    },
    platformStats: {
      LeetCode: {
        rating: 1820,
        solved: 700,
        rank: "Knight",
        contests: 25,
        bestRank: 325,
        currentStreak: 24,
        maxStreak: 170
      },
      CodeForces: {
        rating: 1227,
        solved: 200,
        rank: "Specialist",
        contests: 15,
        bestRank: 1250
      },
      GeeksForGeeks: {
        score: 1577,
        solved: 513,
        rank: "55",
        articles: 5
      },
      CodeChef: {
        rating: 1553,
        solved: 150,
        rank: "2★",
        contests: 12,
        globalRank: 25098,
        countryRank: 22359
      }
    },
    problemStats: {
      byDifficulty: [
        { name: "Easy", solved: 215, total: 830, color: DIFFICULTY_COLORS.Easy },
        { name: "Medium", solved: 476, total: 1742, color: DIFFICULTY_COLORS.Medium },
        { name: "Hard", solved: 56, total: 757, color: DIFFICULTY_COLORS.Hard }
      ],
      byLanguage: [
        { name: "Java", solved: 737, color: "#B07219" },
        { name: "JavaScript", solved: 11, color: "#F7DF1E" },
        { name: "C++", solved: 4, color: "#F34B7D" }
      ]
    },
    activityData: {
      submissions: [
        { month: "Apr", count: 145 },
        { month: "May", count: 132 },
        { month: "Jun", count: 158 },
        { month: "Jul", count: 123 },
        { month: "Aug", count: 167 },
        { month: "Sep", count: 145 },
        { month: "Oct", count: 138 }
      ],
      weeklyActivity: [
        { day: "Mon", problems: 12 },
        { day: "Tue", problems: 15 },
        { day: "Wed", problems: 8 },
        { day: "Thu", problems: 10 },
        { day: "Fri", problems: 14 },
        { day: "Sat", problems: 18 },
        { day: "Sun", problems: 9 }
      ]
    },
    recentAchievements: [
      { 
        title: "200 Days Streak",
        platform: "LeetCode",
        date: "2024",
        description: "Maintained a continuous coding streak for 200 days",
        icon: "Trophy"
      },
      { 
        title: "Knight Badge",
        platform: "LeetCode",
        date: "2023",
        description: "Achieved Knight ranking on LeetCode",
        icon: "Award"
      },
      {
        title: "College Rank 1",
        platform: "GeeksForGeeks",
        date: "2024",
        description: "Top performer in the institution",
        icon: "Crown"
      }
    ]
  };
  
  export const chartConfig = {
    commonOptions: {
      theme: {
        background: 'transparent',
        textColor: '#9CA3AF',
        fontSize: 12,
        axis: {
          domain: {
            line: {
              stroke: '#4B5563'
            }
          }
        }
      }
    }
  };
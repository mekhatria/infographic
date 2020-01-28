import introPage from '../src/pages/intro/introPage.js';
import teamPage from '../src/pages/team/teamPage.js';
import averagePlayerValuationPage from '../src/pages/averagePlayerValuation/averagePlayerValuationPage.js';
import creditsPage from '../src/pages/credits/creditsPage.js';
import goalScorersPage from '../src/pages/goalScorers/goalScorersPage.js';
import hostPage from '../src/pages/host/hostPage.js';
import hostPollPage from '../src/pages/hostPoll/hostPollPage.js';
import hostPollResultPage from '../src/pages/hostPollResult/hostPollResultPage.js';
import matchesPage from '../src/pages/matches/matchesPage.js';
import mostValuablePlayerPage from '../src/pages/mostValuablePlayer/mostValuablePlayerPage.js';
import mostValuableSquadPage from '../src/pages/mostValuableSquad/mostValuableSquadPage.js';
import playerPollPage from '../src/pages/playerPoll/playerPollPage.js';
import playerPollResultPage from '../src/pages/playerPollResult/playerPollResultPage.js';

export default {
  '/': introPage,
  '/teamPage': teamPage,
  '/hostPollPage': hostPollPage,
  '/hostPollResultPage': hostPollResultPage,
  '/hostPage': hostPage,
  '/playerPollPage': playerPollPage,
  '/playerPollResultPage': playerPollResultPage,
  '/mostValuablePlayerPage': mostValuablePlayerPage,
  '/mostValuableSquadPage': mostValuableSquadPage,
  '/averagePlayerValuationPage': averagePlayerValuationPage,
  '/goalScorersPage': goalScorersPage,
  '/matchesPage': matchesPage,
  '/creditsPage': creditsPage
};

import React from 'react';
import { withRouter } from 'react-router-dom';

import { TeamDisplayCard } from '../cards/TeamDisplayCard';
import { InstanceStatusCard } from '../cards/InstanceStatusCard';
import { PasscodeDisplayCard } from '../cards/PassCodeDisplayCard';

export const JoinedPage = withRouter(({ location, match }) => {
  const { team } = match.params;

  return (
    <>
      <TeamDisplayCard teamname={team} />
      {location.state?.passcode !== undefined ? (
        <PasscodeDisplayCard passcode={location.state.passcode} reset={location.state.reset} />
      ) : null}
      <InstanceStatusCard teamname={team} />
    </>
  );
});

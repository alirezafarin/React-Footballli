import { BaseAccordion, BaseTabs } from 'components/Base';
import React from 'react';
import { getWeekDatesTabs } from './utils';

export const LeagueResults = () => {
  return (
    <>
      <BaseTabs tabs={getWeekDatesTabs()} />
      <div className="h-screen bg-gray-100 px-2 pt-2">
        <BaseAccordion title="title">test</BaseAccordion>
        <BaseAccordion title="title">test</BaseAccordion>
        <BaseAccordion title="title">test</BaseAccordion>
        <BaseAccordion title="title">test</BaseAccordion>
      </div>
    </>
  );
};

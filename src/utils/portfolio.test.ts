import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isNavbarScrolled,
  NAV_ITEMS,
  PROFILE_INFO,
  calculateEntranceDelay,
  DEFAULT_SCROLL_THRESHOLD,
} from './portfolio.ts';

test('isNavbarScrolled returns false at or below threshold', () => {
  assert.equal(isNavbarScrolled(0), false);
  assert.equal(isNavbarScrolled(15), false);
  assert.equal(isNavbarScrolled(DEFAULT_SCROLL_THRESHOLD), false);
});

test('isNavbarScrolled returns true when scroll exceeds threshold', () => {
  assert.equal(isNavbarScrolled(DEFAULT_SCROLL_THRESHOLD + 1), true);
  assert.equal(isNavbarScrolled(100), true);
  assert.equal(isNavbarScrolled(50, 40), true);
});

test('NAV_ITEMS contains all 5 required portfolio navigation items', () => {
  assert.equal(NAV_ITEMS.length, 5);
  const expectedLabels = ['Expertise', 'About', 'Projects', 'Stack', 'Contact'];
  const expectedHrefs = ['#expertise', '#about', '#projects', '#stack', '#contact'];

  NAV_ITEMS.forEach((item, index) => {
    assert.equal(item.label, expectedLabels[index]);
    assert.equal(item.href, expectedHrefs[index]);
  });
});

test('PROFILE_INFO contains correct portfolio information for Min Thant Kyaw', () => {
  assert.equal(PROFILE_INFO.name, 'Min Thant Kyaw');
  assert.match(PROFILE_INFO.availabilityStatus, /AVAILABLE FOR WORK/i);
  assert.equal(PROFILE_INFO.location.label, 'Location');
  assert.match(PROFILE_INFO.location.value, /Myanmar/);
  assert.equal(PROFILE_INFO.age.label, 'Age');
  assert.equal(PROFILE_INFO.age.value, 25);
  assert.equal(PROFILE_INFO.role, 'WEB DEVELOPER');
  assert.match(PROFILE_INFO.description, /React, TypeScript, Node\.js/);
});

test('calculateEntranceDelay computes proper staggered timing in milliseconds', () => {
  assert.equal(calculateEntranceDelay(0), 0);
  assert.equal(calculateEntranceDelay(1), 100);
  assert.equal(calculateEntranceDelay(2), 200);
  assert.equal(calculateEntranceDelay(3), 300);
  assert.equal(calculateEntranceDelay(4), 400);
  assert.equal(calculateEntranceDelay(5), 500);
  assert.equal(calculateEntranceDelay(-1), 0);
});

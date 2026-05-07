import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "session-preset-1",
  "title": "導入プリセット・操作ガイド・セッション初期化 サンプル 1",
  "presetName": "release-start",
  "prompt": "Goal / Context / Constraints / Done when",
  "targetWorkspace": "D:\\AI\\ProjectManagement\\session-preset-guide-initializer",
  "startupChecks": [
    "git status",
    "npm test"
  ]
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "session-preset-missing-required",
  "title": "必須項目不足サンプル",
  "prompt": "Goal / Context / Constraints / Done when",
  "targetWorkspace": "D:\\AI\\ProjectManagement\\session-preset-guide-initializer",
  "startupChecks": [
    "git status",
    "npm test"
  ]
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});

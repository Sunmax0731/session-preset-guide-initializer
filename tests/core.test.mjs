import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "session-preset-guide-initializer-1",
  "title": "セッションプリセット・ガイド初期化 サンプル1",
  "status": "ready",
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
  "id": "session-preset-guide-initializer-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
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

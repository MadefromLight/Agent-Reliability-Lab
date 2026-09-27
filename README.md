# Agent Reliability Lab

A local-first evaluation harness for autonomous AI agents.

## Goal

Test agents continuously against behavioral, policy, and failure scenarios instead of relying only on happy-path demos.

## MVP

- Scenario definitions
- Deterministic pass/fail assertions
- Policy-aware checks
- Evidence-ready result records
- CLI runner
- JSON reports

```bash
npm install
npm test
npm run build
npm run eval -- examples/suite.json
```

License: MIT

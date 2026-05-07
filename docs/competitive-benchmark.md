# 競合・公式基準ベンチマーク

## 比較方針

セッションプリセット・ガイド初期化 は、競合の全機能を再実装するのではなく、ランチャーやタスク管理ではなく、AI作業開始時のGoal/Context/Done条件を整える。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| Linear | https://linear.app/features | Issue、プロジェクト、ロードマップ、サイクルを高速に横断できる。 | 状態、優先度、履歴、判断理由を追えること。 | ランチャーやタスク管理ではなく、AI作業開始時のGoal/Context/Done条件を整える。 |
| VS Code command line | https://code.visualstudio.com/docs/editor/command-line | 拡張機能の開発ホストや対象ワークスペースをコマンドから起動できる。 | エディタ内で作業文脈と結果を確認できること。 | ランチャーやタスク管理ではなく、AI作業開始時のGoal/Context/Done条件を整える。 |
| PowerToys Run | https://learn.microsoft.com/en-us/windows/powertoys/run | ローカルアプリ、ファイル、コマンドをランチャーから素早く起動できる。 | 利用者が短時間で判断に進めること。 | ランチャーやタスク管理ではなく、AI作業開始時のGoal/Context/Done条件を整える。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。

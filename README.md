# OpenWork Context Search

Chromeで選択したテキストを、右クリックメニューからOpenWork検索できる最小構成のChrome拡張です。

## 動作

Webページ上で会社名などのテキストを選択して右クリックすると、次の項目が表示されます。

```text
「村田製作所」をOpenWorkで検索
```

クリックすると、Googleで次の形式の検索を開きます。

```text
site:openwork.jp 村田製作所
```

OpenWork内部の検索URLへ直接依存しないため、サイト側のURL変更の影響を受けにくい構成です。

## インストール

1. このリポジトリをcloneまたはZIPでダウンロードします。
2. Chromeで `chrome://extensions/` を開きます。
3. 右上の「デベロッパー モード」を有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックします。
5. このリポジトリのフォルダを選択します。

## 使い方

1. Webページ上で企業名などを選択します。
2. 右クリックします。
3. `「選択した文字列」をOpenWorkで検索` をクリックします。
4. 新しいタブで検索結果が開きます。

## 構成

```text
.
├── manifest.json
├── background.js
└── README.md
```

## 権限

この拡張が要求する権限は `contextMenus` のみです。

## License

未設定です。

# P-WORLDカスタマイズガイド
このページでは、P-WORLDサイトに背景画像を設定するための手順を紹介しています。以下の手順に従って、簡単にカスタマイズを行えます。

# 1. 背景画像の設定方法
## 1-1. 画像をGitHubにアップロードする
### ● 画像サイズ・形式
画像サイズは「1920 × 1080」で作成してください。

画像形式は「jpg・png・gif」が利用可能です。

### ● 画像ファイル名
P-WORLDサイトのURLに基づいて画像ファイル名を決定します。

例えば、サイトのURLが以下の場合。
```
https://www.p-world.co.jp/osaka/s-cosmo-city-acty.htm
```
この場合、画像ファイル名は次のように設定します。
```
osaka_s-cosmo-city-acty.gif
```
### ● 画像のアップロード場所
画像は以下のGitHubリポジトリにアップロードします。

https://github.com/lead-777/p-world/tree/main/img


## 1-2. P-WORLDのメンテナンスページ下段にコードを追加する
```
<script src="https://lead-777.github.io/p-world/js/background.js"></script>
<div class="background" style="background-image: url('https://lead-777.github.io/p-world/img/osaka_s-cosmo-city-acty.gif');"></div>
```
注意：osaka_s-cosmo-city-acty.gif の部分は、アップロードした画像ファイル名に合わせて変更してください。

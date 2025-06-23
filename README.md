# 启动

```shell
npm i
npm run start
```

# 试验字体

## SourceHanSansSC-Medium_dehint2.002.1.ttf

```shell
ttfautohint --dehint input.ttf output.ttf
```

pdf 内容展示 ok

## SourceHanSansSC-Medium-Min.ttf

pdf 内容展示不全，大部分字展示不了。

```shell
ttfautohint SourceHanSansSC-Medium-Min.ttf SourceHanSansSC-Medium-Min-hinted.ttf
ttfautohint --dehint SourceHanSansSC-Medium-Min-hinted.ttf SourceHanSansSC-Medium-Min-dehint.ttf
```

pdf 内容展示 ok。letterSpacing 也 ok。缺少部分字，比如佰、仟等。

## lite_all_chars_part.ttf

pdf 内容展示 ok。基于`SourceHanSansSC-Medium_dehint2.002.1.ttf`和`lite_all_chars_part.txt`。

```shell
pyftsubset "src/font/SourceHanSansSC-Medium_dehint2.002.1.ttf" --text-file="lite_all_chars_part.txt" --output-file="src/font/lite_all_chars_part.ttf"
```

但是给`lite_all_chars_part.txt`增加任意新的字符，都会导致 pdf 内容展示不全。

## lite_all_chars.ttf

```shell
pyftsubset "src/font/SourceHanSansSC-Medium_dehint2.002.1.ttf" --text-file="lite_all_chars.txt" --output-file="src/font/lite_all_chars.ttf"
```

pdf 内容展示不全，大部分字展示不了。基于`SourceHanSansSC-Medium_dehint2.002.1.ttf`和`lite_all_chars.txt`。

```shell
ttfautohint lite_all_chars.ttf lite_all_chars-hinted.ttf
ttfautohint --dehint lite_all_chars-hinted.ttf lite_all_chars-dehint.ttf
```

pdf 内容展示 ok。但是无法 letterSpacing（pdf 换行）。

## spider_lite_all_chars.ttf

pdf 内容展示 ok。但是无法 letterSpacing（pdf 换行）。

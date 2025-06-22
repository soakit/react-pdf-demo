# 试验字体

## SourceHanSansSC-Medium_dehint2.002.1.ttf

pdf内容展示ok

## SourceHanSansSC-Medium-Min.ttf

pdf内容展示不全，大部分字展示不了。

## lite_all_chars_part.ttf

pdf内容展示ok。基于`SourceHanSansSC-Medium_dehint2.002.1.ttf`和`lite_all_chars_part.txt`。

```shell
pyftsubset "d:\workspace\react-pdf-demo\src\font\SourceHanSansSC-Medium_dehint2.002.1.ttf" --text-file="d:\workspace\react-pdf-demo\lite_all_chars_part.txt" --output-file="d:\workspace\react-pdf-demo\src\font\lite_all_chars_part.ttf"
```
但是给`lite_all_chars_part.txt`增加任意新的字符，都会导致pdf内容展示不全。

## lite_all_chars.ttf

pdf内容展示不全，大部分字展示不了。基于`SourceHanSansSC-Medium_dehint2.002.1.ttf`和`lite_all_chars.txt`。

```shell
pyftsubset "d:\workspace\react-pdf-demo\src\font\SourceHanSansSC-Medium_dehint2.002.1.ttf" --text-file="d:\workspace\react-pdf-demo\lite_all_chars.txt" --output-file="d:\workspace\react-pdf-demo\src\font\lite_all_chars.ttf"
```

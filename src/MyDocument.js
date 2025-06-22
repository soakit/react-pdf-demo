import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// 会缺字
// import SiYuanHeiTiMedium from "./font/SourceHanSansSC-Medium-Min.ttf";

// 思源黑体压缩版
// import SiYuanHeiTiMedium from "./font/SourceHanSansSC-Medium_dehint2.002.1.ttf";

// 思源黑体精简版-全部
// import SiYuanHeiTiMedium from "./font/lite_all_chars.ttf";

// 思源黑体精简版-部分
import SiYuanHeiTiMedium from "./font/lite_all_chars_part.ttf";

Font.register({
  family: "siyuanheiti",
  fonts: [
    { src: SiYuanHeiTiMedium, fontStyle: "normal", fontWeight: "normal" },
    { src: SiYuanHeiTiMedium, fontStyle: "normal", fontWeight: "bold" },
    { src: SiYuanHeiTiMedium, fontStyle: "italic", fontWeight: "normal" },
    { src: SiYuanHeiTiMedium, fontStyle: "italic", fontWeight: "bold" },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    width: 300,
    wordBreak: "break-all",
    // padding: 10,
    // flexGrow: 1
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  }
});

// Create Document Component
const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={{
        ...styles.page,
        fontFamily: "siyuanheiti"
      }}

      // debug
      // size={pageInfo.pageSize}
      // ruler={debug}
      // style={[
      //   { fontFamily: fontCode ? FontCodeMap[fontCode] || 'han' : 'han' },
      //   pageInfo.pagePadding
      // ]}

      >
        <View style={{
          ...styles.section,
          width: "100%",
          flexDirection: "column"
        }}>
          <Text style={{
            fontSize: 12,
            fontFamily: "siyuanheiti",
            width: "100%",
            textAlign: "left",
            lineHeight: 1.5,
            margin: 10
          }}>销售订单往来位名称制时间收货地址北京市东城区西长安街天门楼人尘序号</Text>

        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontFamily: "siyuanheiti",
            width: "100%",
            textAlign: "left",
            lineHeight: 1.5,
            margin: 10
          }}>商品编码规格数量单位价金额小计备注比例辅助循环满减分类圾多件个包</Text>
        </View>

        <View>
          <Text style={{
            fontSize: 12,
            fontFamily: "siyuanheiti",
            width: "100%",
            textAlign: "left",
            lineHeight: 1.5,
            margin: 10
          }}>无运费应付大写叁佰玖拾柒元角肆送日期蓝色JulyCAxyhgml0123456789:：/-.</Text>
        </View>

      </Page>
    </Document>
  );
};

export default MyDocument;

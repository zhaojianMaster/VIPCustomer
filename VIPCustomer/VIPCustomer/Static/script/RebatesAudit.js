﻿$(function () {
    initPage();
});
var initPage = function () {
    $('#table_list').jqGrid({
        url: URL,
        mtype: 'post',
        datatype: 'json',
        viewrecords: true,  //  是否显示总记录数
        styleUI: 'Bootstrap',
        colModel: [
              { label: '主键ID', name: 'PKID', hidden: true, key: true, },
              { label: '经销店编号', name: 'Code', width: 120 },
              { label: '经销店名称', name: 'DealerName', width: 120 },
              { label: '客户名称', name: 'CustomerName', width: 180 },
              {
                  label: '审核状态', name: 'ToExamineState', width: 100, formatter: function (cellvalue, options, rowObject) {
                      switch (rowObject.ToExamineState) {
                          case 400:
                              return '<span style="color:red;">未审核</span>';
                          case 1100:
                              return '<span style="color:red;">已否决</span>';
                          default:
                              return '已审核';
                      }
                  }
              },
            { label: '交车情况', name: 'IsApplyMaxCustomerResources', align: 'center', width: 180 },
            { label: '交车数量', name: 'IsApplyMaxCustomerResources', align: 'center', width: 80 },
            { label: '审核数量', name: 'OrderType', width: 80},
            { label: '返款人', name: 'InvoiceCustomerInfo', align: 'center', width: 100 },
            { label: '返款标识', name: 'InvoiceCustomerInfo', align: 'center', width: 100 },
            { label: '返款日期', name: 'CreateTime', width: 120, formatter: "date", formatoptions: { newformat: 'Y-m-d' } },
             { label: '返款人2', name: 'InvoiceCustomerInfo', align: 'center', width: 100 },
            { label: '返款标识2', name: 'InvoiceCustomerInfo', align: 'center', width: 100 },
            { label: '返款日期2', name: 'CreateTime', width: 120, formatter: "date", formatoptions: { newformat: 'Y-m-d' } },
            { label: '返款审核人', name: 'InvoiceCustomerInfo', align: 'center', width: 100 },
            { label: '返款意见', name: 'ReComment3', width: 120 },
            { label: '审核时间', name: 'CreateTime', width: 120, formatter: "date", formatoptions: { newformat: 'Y-m-d' } },
            { label: '返款备注', name: 'ReRemark3', width: 120 },
            { label: '订单编号', name: 'Code', width: 120 },
            { label: '提交日期', name: 'CreateTime', width: 120, formatter: "date", formatoptions: { newformat: 'Y-m-d' } },
            { label: '机构代码', name: 'RecordName', width: 120 },
            { label: '客户性质', name: 'CreateTime', width: 120 },
            { label: '客户性质2', name: 'CreateTime', width: 120 },
        ],
        multiselect: true,
        autowidth: true,
        height: 568,
        shrinkToFit: false,
        rownumbers: true,   // 显示行号
        rowNum: 50,
        rowList: [50, 100, 200],
        pager: "#pager_list",
        jsonReader: {
            records: "totalCount", root: "dataList", total: "totalpages", page: "currPage",
            repeatitems: false
        }
    });
}
import{A as r}from"./apexcharts.common-vsTlv3My.js";import"./_commonjsHelpers-BosuxZz1.js";function a(c,n){for(var i=0,o=[];i<c;){var d=(i+1).toString(),s=Math.floor(Math.random()*(n.max-n.min+1))+n.min;o.push({x:d,y:s}),i++}return o}var e=["#1c84ee"],t={chart:{toolbar:{show:!1},height:380,type:"heatmap"},dataLabels:{enabled:!1},colors:e,series:[{name:"Metric 1",data:a(20,{min:0,max:90})},{name:"Metric 2",data:a(20,{min:0,max:90})},{name:"Metric 3",data:a(20,{min:0,max:90})},{name:"Metric 4",data:a(20,{min:0,max:90})},{name:"Metric 5",data:a(20,{min:0,max:90})},{name:"Metric  6",data:a(20,{min:0,max:90})},{name:"Metric 7",data:a(20,{min:0,max:90})},{name:"Metric 8",data:a(20,{min:0,max:90})},{name:"Metric 9",data:a(20,{min:0,max:90})}],xaxis:{type:"category"}},m=new r(document.querySelector("#basic-heatmap"),t);m.render();var e=["#1c84ee","#53389f","#7f56da","#ff86c8","#ef5f5f","#ff6c2f","#f9b931","#22c55e","#4ecac2"],t={chart:{toolbar:{show:!1},height:380,type:"heatmap"},dataLabels:{enabled:!1},colors:e,series:[{name:"Metric 1",data:a(20,{min:0,max:90})},{name:"Metric 2",data:a(20,{min:0,max:90})},{name:"Metric 3",data:a(20,{min:0,max:90})},{name:"Metric 4",data:a(20,{min:0,max:90})},{name:"Metric 5",data:a(20,{min:0,max:90})},{name:"Metric 6",data:a(20,{min:0,max:90})},{name:"Metric 7",data:a(20,{min:0,max:90})},{name:"Metric 8",data:a(20,{min:0,max:90})},{name:"Metric 9",data:a(20,{min:0,max:90})}],xaxis:{type:"category"}},m=new r(document.querySelector("#multiple-series-heatmap"),t);m.render();var e=["#1c84ee","#ef5f5f","#f9b931","#22c55e"],t={chart:{toolbar:{show:!1},height:380,type:"heatmap"},plotOptions:{heatmap:{shadeIntensity:.5,colorScale:{ranges:[{from:-30,to:5,name:"Low",color:e[0]},{from:6,to:20,name:"Medium",color:e[1]},{from:21,to:45,name:"High",color:e[2]},{from:46,to:55,name:"Extreme",color:e[3]}]}}},dataLabels:{enabled:!1},series:[{name:"Jan",data:a(20,{min:-30,max:55})},{name:"Feb",data:a(20,{min:-30,max:55})},{name:"Mar",data:a(20,{min:-30,max:55})},{name:"Apr",data:a(20,{min:-30,max:55})},{name:"May",data:a(20,{min:-30,max:55})},{name:"Jun",data:a(20,{min:-30,max:55})},{name:"Jul",data:a(20,{min:-30,max:55})},{name:"Aug",data:a(20,{min:-30,max:55})},{name:"Sep",data:a(20,{min:-30,max:55})}]},m=new r(document.querySelector("#color-range-heatmap"),t);m.render();var e=["#1c84ee","#4ecac2"],t={chart:{toolbar:{show:!1},height:380,type:"heatmap"},stroke:{width:0},plotOptions:{heatmap:{radius:30,enableShades:!1,colorScale:{ranges:[{from:0,to:50,color:e[0]},{from:51,to:100,color:e[1]}]}}},colors:e,dataLabels:{enabled:!0,style:{colors:["#fff"]}},series:[{name:"Metric1",data:a(20,{min:0,max:90})},{name:"Metric2",data:a(20,{min:0,max:90})},{name:"Metric3",data:a(20,{min:0,max:90})},{name:"Metric4",data:a(20,{min:0,max:90})},{name:"Metric5",data:a(20,{min:0,max:90})},{name:"Metric6",data:a(20,{min:0,max:90})},{name:"Metric7",data:a(20,{min:0,max:90})},{name:"Metric8",data:a(20,{min:0,max:90})},{name:"Metric8",data:a(20,{min:0,max:90})}],xaxis:{type:"category"},grid:{borderColor:"#f1f3fa"}},m=new r(document.querySelector("#rounded-heatmap"),t);m.render();

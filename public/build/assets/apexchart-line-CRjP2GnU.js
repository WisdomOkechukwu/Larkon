import{A as n}from"./apexcharts.common-vsTlv3My.js";import"./_commonjsHelpers-BosuxZz1.js";var a=["#7f56da"],r={chart:{toolbar:{show:!1},height:380,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},colors:a,stroke:{width:[4],curve:"straight"},series:[{name:"Desktops",data:[30,41,35,51,49,62,69,91,126]}],title:{text:"Product Trends by Month",align:"center"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},labels:series.monthDataSeries1.dates,xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},t=new n(document.querySelector("#line-chart"),r);t.render();var a=["#ef5f5f","#22c55e"],r={chart:{height:380,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:a,dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"smooth"},series:[{name:"High - 2018",data:[28,29,33,36,32,32,33]},{name:"Low - 2018",data:[12,11,14,18,17,13,13]}],title:{text:"Average High & Low Temperature",align:"left"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},t=new n(document.querySelector("#line-chart-datalabel"),r);t.render();var c=14844186e5,p=[];for(var i=0;i<120;i++){c=c+864e5;var u=[c,dataSeries[1][i].value];p.push(u)}var a=["#7f56da"],r={chart:{toolbar:{show:!1},type:"area",stacked:!1,height:380,zoom:{enabled:!0}},plotOptions:{line:{curve:"smooth"}},dataLabels:{enabled:!1},stroke:{width:[3]},series:[{name:"XYZ MOTORS",data:p}],markers:{size:0,style:"full"},colors:a,title:{text:"Stock Price Movement",align:"left"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},fill:{gradient:{enabled:!0,shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:.1,stops:[0,70,80,100]}},yaxis:{min:2e7,max:25e7,labels:{formatter:function(e){return(e/1e6).toFixed(0)}},title:{text:"Price"}},xaxis:{type:"datetime"},tooltip:{shared:!1,y:{formatter:function(e){return(e/1e6).toFixed(0)}}},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},t=new n(document.querySelector("#line-chart-zoomable"),r);t.render();var a=["#1c84ee"],b={chart:{toolbar:{show:!1},type:"line",height:160,id:"fb",group:"social"},colors:a,stroke:{width:[3],curve:"straight"},toolbar:{tools:{selection:!1}},fill:{opacity:1},tooltip:{followCursor:!1,x:{show:!1},marker:{show:!1},y:{title:{formatter:function(){return""}}}},series:[{data:w(new Date("11 Feb 2017").getTime(),20,{min:10,max:30})}],xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},g=new n(document.querySelector("#line-chart-syncing"),b);g.render();var a=["#4ecac2"],r={chart:{toolbar:{show:!1},height:200,type:"line",id:"yt",group:"social"},colors:a,dataLabels:{enabled:!1},toolbar:{tools:{selection:!1}},tooltip:{followCursor:!1,x:{show:!1},marker:{show:!1},y:{title:{formatter:function(){return""}}}},stroke:{width:[3],curve:"smooth"},series:[{data:w(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})}],fill:{gradient:{enabled:!0,opacityFrom:.6,opacityTo:.8}},legend:{position:"top",horizontalAlign:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},t=new n(document.querySelector("#line-chart-syncing2"),r);t.render();function w(e,l,s){for(var d=0,f=[];d<l;){var h=e,v=Math.floor(Math.random()*(s.max-s.min+1))+s.min;f.push([h,v]),e+=864e5,d++}return f}var a=["#1c84ee","#ef5f5f","#4ecac2"],r={chart:{height:380,type:"line",toolbar:{show:!1},zoom:{enabled:!1},animations:{enabled:!1}},stroke:{width:[5,5,4],curve:"straight"},series:[{name:"Peter",data:[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9]},{name:"Johnny",data:[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null]},{name:"David",data:[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]}],colors:a,labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa",padding:{bottom:5}},legend:{offsetY:7}},t=new n(document.querySelector("#line-chart-missing"),r);t.render();var a=["#1c84ee","#ef5f5f","#4ecac2"],r={chart:{height:380,type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:[3,5,3],curve:"straight",dashArray:[0,8,5]},series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[87,57,74,99,75,38,62,47,82,56,45,47]}],markers:{size:0,style:"hollow"},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},colors:a,tooltip:{y:{title:{formatter:function(e){return e==="Session Duration"?e+" (mins)":e==="Page Views"?e+" per session":e}}}},grid:{borderColor:"#f1f3fa"},legend:{offsetY:7}},t=new n(document.querySelector("#line-chart-dashed"),r);t.render();var c=14844186e5,o=[];for(var i=0;i<30;i++){c=c+864e5;var u=[c,dataSeries[1][i].value];o.push(u)}var a=["#ff6c2f"],r={chart:{type:"line",height:344,toolbar:{show:!1}},stroke:{curve:"stepline"},dataLabels:{enabled:!1},series:[{data:[34,44,54,21,12,43,33,23,66,66,58]}],colors:a,title:{text:"Stepline Chart",align:"left"},markers:{hover:{sizeOffset:4}}},t=new n(document.querySelector("#line-chart-stepline"),r);t.render();var m=0,o=[];function y(e,l,s){for(var d=0;d<l;){var f=e,h=Math.floor(Math.random()*(s.max-s.min+1))+s.min;o.push({x:f,y:h}),m=e,e+=864e5,d++}}y(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:90});function x(e,l){var s=e+864e5;m=s,o.push({x:s,y:Math.floor(Math.random()*(l.max-l.min+1))+l.min})}function S(){o=o.slice(o.length-10,o.length)}var a=["#4ecac2"],r={chart:{height:350,type:"line",animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:2e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:[3]},colors:a,series:[{data:o}],markers:{size:0},xaxis:{type:"datetime",range:7776e5},yaxis:{max:100},legend:{show:!1},grid:{borderColor:"#f1f3fa"}},t=new n(document.querySelector("#line-chart-realtime"),r);t.render();window.setInterval(function(){x(m,{min:10,max:90}),t.updateSeries([{data:o}])},2e3);window.setInterval(function(){S(),t.updateSeries([{data:o}],!1,!0)},6e4);

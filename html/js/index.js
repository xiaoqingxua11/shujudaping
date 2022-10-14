var sum = 11178747;
let myChart1,myChart2,earthSkin,chart;
$(function() {
    part_five();
    part_six();

    // 初始化地球
        earth();
    
    getDate();
    // 数字
    //	show_num1(sum);
    //
    window.onresize=function(){
        if(myChart1){
            myChart1.dispose();
            myChart2.dispose();
            
        }
        earthSkin.dispose();
        chart.dispose();
        part_five();
        part_six();
        $("#dataNums").rollNum({
            deVal: "9876532.1"
        });
        // 初始化地球
        earth();
        tagsInit();
        // positionAll();
        doPosition();
    }
    $("#dataNums").rollNum({
        deVal: "9876532.1"
    });
})

function part_five() {
    var dom = document.getElementById("part_five");
    myChart1 = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        xAxis: {
        	nameTextStyle: {
		        color:'#444e65',
		        align:'left',//文字水平对齐方式
		        verticalAlign:'left',//文字垂直对齐方式
		    },
		    axisTick: {//刻度线
		        show: false,//去掉刻度线
		    },
            type: 'category',
            boundaryGap: false,//起始位置为0
            data: ['11-2', '11-5', '11-8', '11-11', '11-14', '11-17', '11-20', '11-23', '11-26', '11-30'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff' //更改坐标轴颜色
                }
            }
        },
        yAxis: {
        	min:0,//最小刻度
            max:180,//最大刻度
            type: 'value',
              nameTextStyle: {
		        color:'#444e65',
		        align:'left',//文字水平对齐方式
		        verticalAlign:'middle',//文字垂直对齐方式
		    },
		    axisTick: {//刻度线
		        show: false,//去掉刻度线
		    },
            splitLine:{
			    show:true,
			    lineStyle:{
			        type:'dashed',
			        color:'#535e88'
			    }
			},
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff' //更改坐标轴颜色
                }
            }
        },
        series: [{
            data: [ 0,40,45,66, 70, 73, 77, 80, 90, 92, 93, 100],
            symbol: 'none',  //取消折点圆圈
            type: 'line',
            smooth: true,
            itemStyle: {
                color: "#24cbff"
            },
			areaStyle:{
					normal:{
					   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
							offset: 0,
							color: 'rgba(80,141,255,0.39)'
						}, {
							offset: .34,
							color: 'rgba(56,155,255,0.25)'
						},{
							offset: 1,
							color: 'rgba(38,197,254,0.00)'
						}])

					}
				},
        }],
    };
    if (option && typeof option === "object") {
        myChart1.setOption(option, true);
    }
}

//饼状图
function part_six() {
    var dom = document.getElementById("part_six");
    myChart2 = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [{
                value: 335,
                name: '仪器仪表6.86%'
            }, {
                value: 2232,
                name: '原燃辅料45.73%'
            }, {
                value: 535,
                name: '辅助材料10.96%'
            }, {
                value: 230,
                name: '通用机械4.71%'
            }, {
                value: 248,
                name: '金属钢材5.08%'
            }, {
                value: 648,
                name: '电工电气13.28%'
            }, {
                value: 159,
                name: '冶金非标3.26%'
            }, {
                value: 494,
                name: '五金工具10.12%'
            }],
            //示例文本过长限制
            label:{

            normal:{

                formatter(v) {

                    let text = v.name

                    return text.length < 4 

                        ? text 

                        : `${text.slice(0,4)}\n${text.slice(4)}`

                }

            }  

        },
            itemStyle: {
                emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal:{           	
            color:function(params) {
             //自定义颜色
	            var colorList = [          
	                     '#52cc69', '#03b0fc', '#f97a4e', '#61c161', '#f49a38', '#3e8af7','#e8568b','#9c69ed','#e8568b',
	        ];
	                return colorList[params.dataIndex]
          }
       }
}
       
        }]
    };
    
    if (option && typeof option === "object") {
        myChart2.setOption(option, true);
    }
}

//日期时间
function sum_num_width() {
    var w = $('#total').width();
    var len = $('#total i').length;

    var oneLen = (w / len) - 1;
    $('#total i').css('width', oneLen);
}

function getDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var weekDay = date.getDay();

    var hour = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();

    var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var week = weekday[weekDay];
    // $('._date span').text(year + '年' + month + '月' + day + '日');
    document.getElementById("getDate").innerHTML = year + "年" + month + "月" + day + "日";
    $('._time span').eq(0).text(week);
    $('._time span').eq(1).text(coverNum(hour) + ':' + coverNum(min) + ':' + coverNum(s));

    function coverNum(num) {
        return num < 10 ? '0' + num : num;
    }
}
var t = null;
    t = setTimeout(time,1000);//開始运行
    function time()
    {
       clearTimeout(t);//清除定时器
       dt = new Date();
		var y=dt.getFullYear();
		var mt=dt.getMonth()+1;
		var day=dt.getDate();
       var h=dt.getHours();//获取时
       var m=dt.getMinutes();//获取分
       var s=dt.getSeconds();//获取秒
       document.getElementById("showTime").innerHTML =h+":"+m+":"+s+"";
       t = setTimeout(time,1000); //设定定时器，循环运行     
    } 

//地球效果
function earth() {
    console.log(1)
    const blue = '#0780df' /*主颜色中危*/
    const yellow = '#ff9f35' /*主颜色高危*/
    const red = '#e6453b' /*主颜色严重*/
    const grey = '#7289ab' /*主颜色低危*/
    const skyblue = '#01cbe3'

    const toolFunc = p => `
	    <div class="tooltip-wraper">
	      <p><label>地区IP：</label><span>${p.victim_ip}(${p.attacked_city})</span></p>
	      <p><label>钢谷IP：</label><span>${p.source_ip}(${p.source_city})</span></p>
	    </div>
	  `
    var app = new Vue({
        el: '#wraper',
        data() {
            return {
                chart: null,
                earthSkin: null,
                tootipPos: {
                    left: 0,
                    top: 0,
                    display: 'none'
                },
                colors: {
                    '严重': red,
                    '高危': yellow,
                    '中危': blue,
                    '低危': grey,
                },
                earthData: json,
                tootipEl: document.getElementById('tooltip')
            }
        },
        watch: {
            left(nv, ov) {
                if (Math.abs(nv - ov) >= 5 && this.tootipPos.display == 'block') {
                    this.tootipPos.display = 'none'
                }
            },
            top(nv, ov) {
                if (Math.abs(nv - ov) >= 5 && this.tootipPos.display == 'block') {
                    this.tootipPos.display = 'none'
                }
            }
        },
        beforeDestroy() {
            this.chart && this.chart.dispose()
            this.earthSkin && this.earthSkin.dispose()
            this.chart = null
            this.earthSkin = null
        },
        computed: {
            get3Dserv() {
                return [{
                    type: 'lines3D',
                    coordinateSystem: 'globe',
                    effect: {
                        trailColor: '#f1a41b',
                        show: true,
                        trailWidth: 3,
                        constantSpeed: 20,
                        trailLength: 0.2
                    },
                    lineStyle: {
                        width: 1,
                        opacity: 0.5
                    },
                    data: this.earthData.map((item, i) => ({
                        coords: [item.source_point, item.attacked_point],
                        lineStyle: {
                            color: this.colors[item.alert_level]
                        }
                    }))
                }, {
                    type: 'scatter3D',
                    coordinateSystem: 'globe',
                    symbolSize: 5,
                    data: this.scatterData
                }]
            },
            scatterData() {
                let data = this.earthData
                return data.map((item, i) => ({
                    name: item.source_city,
                    value: item.source_point,
                    label: {
                        formatter: p => p.data.name
                    },
                    itemStyle: {
                        color: skyblue
                    }
                })).concat(data.map((item, i) => ({
                    name: item.attacked_city,
                    value: item.attacked_point,
                    info: item,
                    symbol:'none',
                    label: {
                        show: false
                    },
                    itemStyle: {
                        color: this.colors[item.alert_level]
                    }
                })))
            },
            effscatterData() {
                let data = this.earthData
                return data.map((item, i) => ({
                    name: item.source_city,
                    value: item.source_point,
                    symbolSize: 15,
                    label: {
                        show:true,
                        distance:25,
                        position:'top',
                        formatter: p => p.data.name,
                        textStyle:{
                            fontSize:40
                        }
                    },
                    itemStyle: {
                        color:'#242b74',
                    }
                })).concat(data.map((item, i) => ({
                    name: item.attacked_city,
                    value: item.attacked_point,
                    symbolSize: this.symbleSize(item.attack_count),
                    symbol:'none'
                })))
            },
            get2Dserv() {
                return [{
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    rippleEffect: {
                        brushType: 'stroke',
                        scale: 4,
                        period: 4
                    },
                    data: this.effscatterData
                }]
            },
            left() {
                return this.tootipPos.left
            },
            top() {
                return this.tootipPos.top
            }
        },
        mounted() {
            this.initEarth()
            this.drawData()
            this.tootipEl = document.getElementById('tooltip')
        },
        methods: {
            initEarth() {
                const canvas = document.createElement('canvas');
                earthSkin =this.earthSkin = echarts.init(canvas, null, {
                    width: 3800,
                    height: 2800,
                });
                 this.earthSkin.setOption({
                    backgroundColor: 'rgba(0,8,34,0.1)',
                    geo: {
                        map: 'world',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        boundingCoords: [
                            [-180, 90],
                            [180, -90]
                        ],
                        itemStyle: {
                            normal: {
                                areaColor: '#0de5f6',
                                borderColor: '#000c2d',
                            },
                            emphasis: {
                                areaColor: '#c5ca43'
                            }
                        },
                        roam: false,
                        label: {
                            fontSize: 16
                        }
                    }
                });
                chart=this.chart = echarts.init(document.getElementById('canvas'))
                this.chart.setOption({
                    globe: {
                        baseTexture: this.earthSkin,
                        shading: 'color',
                        top: 'middle',
                        left: 'center',
                        globeRadius: 100,
                        viewControl: {
                        	autoRotateDirection:'cww',//逆时针旋转
                            autoRotate: true,
                            targetCoord: [118.46, 18.92]   //地球初始位置
                        }
                    }
                });
                this.chartEvent()
            },
            drawData() {
                this.chart.setOption({
                    series: this.get3Dserv
                });
                this.earthSkin.setOption({
                    series: this.get2Dserv
                })
            },
            symbleSize(val) {
                val = val > 200 ? 200 : val < 50 ? 50 : val
                return Math.ceil(val / 10)
            },
            getPos(e) {
                this.tootipPos.left = e.offsetX
                this.tootipPos.top = e.offsetY
            },
            chartEvent() {
                this.chart.on('mouseover', p => {
                    if (p.componentType === "series" && p.componentSubType === 'scatter3D' && p.color != skyblue) {
                        this.tootipEl.innerHTML = toolFunc(p.data.info)
                        this.tootipPos.display = 'block'
                    }
                })
            }
        }
    })
}
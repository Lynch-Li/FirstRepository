var distictData=window.districtData;
var vm=new Vue({
    el:'#wrap',
    data:{
        province:[],
        city:[],
        area:[],
        provinceCode:'',
        provinceName:'请选择省份',
        cityCode:'',
        cityName:'请选择城市',
        areaCode:'',
        areaName:'请选择地区',
        isProvinceActive:false,
        isCityActive:false,
        isAreaActive:false,
        hide:'hide',
        show:'show'
    },
    mounted:function(){
        for(var key in distictData){
            var tempObj={};
            tempObj.code=key;
            tempObj.name=distictData[key][0];
            this.province.push(tempObj);
        }
    },
    methods:{
        renderProvince:function(){
           if(this.isProvinceActive){
            this.isProvinceActive=false;
           }else{
            this.isProvinceActive=true;
           }
        },
        selectProvince:function(item,event){
            this.provinceCode=item.code;
            this.provinceName=item.name;
            this.isCityActive=true;
             //重置城市和地区值
            this.cityCode='';
            this.cityName='请选择城市';
            this.areaCode='';
            this.areaName='请选择地区';
            this.city=[];
            var arrCity=distictData[item.code][1];
            for(var key in arrCity){
                var tempObj={};
                tempObj.code=key;
                tempObj.name=arrCity[key][0];
                this.city.push(tempObj);
            }
        },
        renderCity:function(){
          if(this.isCityActive){
            this.isCityActive=false;
          }else{
            this.isCityActive=true;
          }

        },
        selectCity:function(item,event){
            this.cityCode=item.code;
            this.cityName=item.name;
            this.isAreaActive=true;

            //重置地区
            this.areaCode='';
            this.areaName='请选择地区';
            this.area=[];
            var codeArr=distictData[this.provinceCode][1][this.cityCode][1];
            for(var key in codeArr){
                var tempObj={};
                tempObj.code=key;
                tempObj.name=codeArr[key];
                this.area.push(tempObj);
            }
          
        },
        renderArea:function(){
            if(this.isAreaActive){
                this.isAreaActive=false;
            }else{
                this.isAreaActive=true;
            }
        },
        selectArea:function(item,event){
            event.stopPropagation();
            this.areaCode=item.code;
            this.areaName=item.name;
            this.isAreaActive=false;
        }
    }


});
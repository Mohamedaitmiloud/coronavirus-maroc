

var app = new Vue({
    el: '#app',
    data: {
      allData : [],
      cases : 0,
      recovered : 0,
      deaths : 0,
      critical : 0
    },
    methods:{
        getAllData:function(){
            axios.get('https://coronavirus-19-api.herokuapp.com/countries')
                 .then( response => {
                     this.allData = response.data;
                     for (var i = 0; i < this.allData.length; i++){
                        if (this.allData[i].country == 'Morocco'){
                            this.cases = this.allData[i].cases;
                            this.recovered = this.allData[i].recovered;
                            this.deaths = this.allData[i].deaths;
                            this.critical = this.allData[i].critical;
                        }
                      }
                 })
                 .catch(function (error) {
                    // handle error
                    console.log(error);
                  })
        },
        getCountry:function(country){
            for (var i = 0; i < this.allData.length; i++){
                if (this.allData[i].country == country){
                    this.cases = this.allData[i].cases;
                    this.recovered = this.allData[i].recovered;
                    this.deaths = this.allData[i].deaths;
                    this.critical = this.allData[i].critical;
                }
              }
        }
    },
    created () {
        this.getAllData();
    }
  })
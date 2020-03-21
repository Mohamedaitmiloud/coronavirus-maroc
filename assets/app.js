var app = new Vue({
    el: '#app',
    data: {
      cases : 0,
      recovered : 0,
      deaths : 0,
      critical : 0,
      casesToday : 0,
      deathsToday: 0
    },
    methods:{
        getAllData:function(){
            axios.get('https://coronavirus-19-api.herokuapp.com/countries/morocco')
                 .then( response => {
                            this.cases = response.data.cases;
                            this.recovered = response.data.recovered;
                            this.deaths = response.data.deaths;
                            this.critical = response.data.critical;
                            this.casesToday = response.data.todayCases;
                            this.deathsToday = response.data.todayDeaths;     
                 })
                 .catch(function (error) {
                    // handle error
                    console.log(error);
                  })
        }
    },
    created () {
        this.getAllData();
    }
  })
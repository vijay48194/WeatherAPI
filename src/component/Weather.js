import React, { Component } from 'react';

class Weather extends Component {

	componentDidMount(){
		let baseUrl ='http://api.openweathermap.org/data/2.5/weather';
		var url =new URL(baseUrl)
		var params = {
			q :'Delhi,India',
			APPID : 'a7fa06c8c8419c2b5c08e05575b50ff7'
		}
		url.search = new URLSearchParams(params)
		fetch(url)
		.then(data=>data.json())
		.then(json=>{
			console.log(json);
			console.log(json.main.temp);
		})
	}

  render() {
    return (
      <div>
        <h1>API WEATHER</h1>
      </div>
    );
  }
}

export default Weather;

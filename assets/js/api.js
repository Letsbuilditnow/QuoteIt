document.getElementById("images").addEventListener('click',getFetch)

function getFetch(event){
    event.preventDefault()
    let YOUR_API_KEY="DEn-2K2dxiA75xcJOSMNlNsgLTrMB8ZBkT3LnpSq_cg"
    const url=`https://api.unsplash.com/photos/random?client_id=${YOUR_API_KEY}&query=nature`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9d0c6f4f7emsh0e0cd3767cf5842p16a572jsn9f4c9c7ea9d0',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    
    fetch('https://famous-quotes4.p.rapidapi.com/random?category=nature&count=1', options)
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText=data[0].text
            document.querySelector("h1").innerText=data[0].author
        })
        .catch(err => console.error(err));
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.getElementById("source").src=data.urls.raw
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}



const options = {
	method: 'GET',
	headers: {
		
	}
};



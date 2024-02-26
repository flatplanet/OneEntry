const title = document.querySelector('#title')
const text = document.querySelector('#text')

const getData = async () => {
	try{
		const response = await fetch(
			'https://codemy.oneentry.cloud/api/content/pages/url/index',
			{
				method: 'GET',
				headers: {
					'x-app-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXlfYXBwIiwic2VyaWFsTnVtYmVyIjoxLCJpYXQiOjE3MDg5NzQwNzgsImV4cCI6MTc0MDUxMDA2N30.N80MI7EmzoQhWzYKen29T8dGqHi1oAqxs8lcL11k26A',
				},
			}
		)
		const data = await response.json()

		title.innerHTML = data.localizeInfos.en_US.title
		text.innerHTML = data.localizeInfos.en_US.htmlContent

		console.log(data)
	} catch (error){
		console.log(error)
	}
}

// Call the function
getData()
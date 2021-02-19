const Validation = {
// eslint-disable-next-line no-unused-vars
	handleErrors: (err) => {
		if (err.response) {
			let resp = err.response
			switch (resp.status) {
				// unauthenticated
				case 401:
					alert(err.response.data.message)
					location.href="/#/login";
					break;
				default:
					alert(err.response.data.message)
					break;
			}
		}
		console.error(err)
	}
}

export default Validation

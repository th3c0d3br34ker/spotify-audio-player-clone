import stores from 'store'
import { Provider } from 'react-redux'


import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={stores}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp

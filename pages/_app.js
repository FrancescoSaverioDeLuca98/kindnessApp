import Layout from '../components/ Layout'
import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp

//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css' 
import Jumbotron from '../componen/jumbotron'
import Article from '../componen/article'
import Pagination from '../componen/pagination'
import Sidebar from '../componen/sidebar'
import Layout from '../componen/layout'
import Menu from '../data-dummy/menu.json'

export default function Login({ props }) {
  return (
<Layout LayoutProps = {props.menu}>
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Login Page
      </h3>

    </div>

    <Sidebar />
  </div>
</Layout>
  )
}
Login.getInitialProps = () => {
  return {
    props : {
      menu : Menu
    }
  }
}

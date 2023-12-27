import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";

import "~/App.css";
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/component/Layout';
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      {/* <nav >
        <ul style={{ display: 'flex', justifyContent: "space-around", width: '600px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/following">Following</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
      </nav> */}
      <Routes>
        {publicRoutes.map((route, index) => {

          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }
          const Page = route.component
          return (
            < Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          )
        })}
      </Routes>

    </div>

  );
}

export default App;

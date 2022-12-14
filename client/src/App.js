import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ClickToPlay from "./pages/ClickToPlay";
import Playing from "./pages/Playing";
import Score from "./pages/Score";
import Landing from "./pages/Landing";
// import SingleThought from "./pages/SingleThought";
// import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import earthImage from "./images/nasa.jpg"


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

    const backgroundImageStyle = {
      backgroundImage: `url("${earthImage}")`,
      backgroundSize: "cover",
      height:"1440px",
    }

  return (
    <main style={backgroundImageStyle}>
    <ApolloProvider client={client}>
      <Router >
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/clicktoplay" element={<ClickToPlay />} />
              <Route path="/playing" element={<Playing />} />
              <Route path="/score" element={<Score />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/me" element={<Profile />} /> */}
              {/* <Route path="/profiles/:username" element={<Profile />} /> */}
              {/* <Route path="/thoughts/:thoughtId" element={<SingleThought />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    </main>
  );
}

export default App;
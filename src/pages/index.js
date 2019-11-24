import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "../images/profile.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Salah Eddin Alshaal Blog" />
    <>
      <img
        src={ProfileImage}
        style={{ width: "5rem", padding: "0.8rem", margin: 0 }}
      />
      <h1>Salah Eddin Alshaal</h1>
      <h2>It's dangerous to go alone. Use this collective agency.</h2>
      <h3>
        Originally from Syria but have lived in Cyprus and currently in the
        Netherlands. I am a software engineer focusing on the web. when I'm not
        writing code, I am doing everything else except washing my dishes.
      </h3>
      <p>
        This is a space where I share anything I feel 🤓. Probably about the
        environemnt, philosophy and light politics
      </p>
    </>
  </Layout>
)

export default IndexPage

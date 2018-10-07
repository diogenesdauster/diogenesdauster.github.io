import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
            <div className="content container">
              <div className="page">
                  <h1 className="page-title">About</h1>
                  <p>Software Developer very fascinated about software architecture. I'm a person who likes hardworking for solving issues and always is learn something new. I have knowledge about FullStack Development, Mobile Development and Totvs ERP. Recently a took a Mobile Post-Graduation and a nanodegree in the Udacity to deep my knowledge. I started my developer career when I was a teenager and since then I've been learning how can I be a better developer. Making simple code for the others, taking care about what I write to avoid issue and doing test as many as possible.</p>
                    <h1 id="contact">Contact</h1>
                    <ul>
                      <li><a href="mailto:diogenes.dauster@gmail.com">diogenes.dauster@gmail.com</a></li>
                      <li><a href="https://github.com/diogenesdauster">github.com/diogenesdauster</a></li>
                      <li><a href="https://www.linkedin.com/in/diogenesdauster/">linkedin.com/in/diogenesdauster</a></li>
                    </ul>                    
              </div>
            </div>        
  </Layout>
)

export default SecondPage

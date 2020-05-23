import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";
import { Global, css } from '@emotion/core';
import UseSeo from '../Hooks/use-seo';

const Layout = props => {

    const seo = UseSeo();

    const { fallbackSeo: { description, title }  } = seo;

    console.log(seo); 
  return (
    <>
        <Global
            styles={css`
               
                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }
                *, *:before, *:after {
                    box-sizing: inherit;
                }
                body {
                    font-size: 18px;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: 'PT Sans', sans-serif;
                }
                h1, h2, h3 {
                    margin: 0;
                    line-height: 1.5;
                }
                h1, h2 {
                    font-family: 'Roboto', serif;
                }
                h3 {
                    font-family: 'PT Sans', sans-serif;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding:0;
                }
            `}
        />

      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
      </Helmet>

      <Header />

      {props.children}

    <Footer 
        title={title}
    />
 
    </>
  );
};

export default Layout;

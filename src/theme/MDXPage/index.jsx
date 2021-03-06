import React from 'react';
import Layout from '@theme/Layout';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import TOC from '@theme/TOC';

function MDXPage(props){
  const {content: MDXPageContent} = props;
  const {frontMatter, metadata} = MDXPageContent;

  const {
    title,
    description,
    wrapperClassName,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const {permalink} = metadata;

  return (
    <Layout
      title={title}
      description={description}
      permalink={permalink}
      wrapperClassName={wrapperClassName}>
      <main>
        <div className="container container--fluid awesome">
          <div className="padding-vert--lg">
          {/* <div className="margin-vert--lg padding-vert--lg"> */}
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="container">
                  <MDXProvider components={MDXComponents}>
                    <MDXPageContent />
                  </MDXProvider>
                </div>
              </div>
              {!hideTableOfContents && MDXPageContent.toc && (
                <div className="col col--3">
                  <TOC toc={MDXPageContent.toc} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default MDXPage;
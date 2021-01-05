import { graphql, PageProps } from "gatsby";
import React from "react";
import BlogPostListItem from "../components/BlogPostListItem";
import { BlogPostType, PrimsicAllQueryType } from "../types";

const BlogPage = ({
  data,
}: PageProps<{ posts: PrimsicAllQueryType<BlogPostType> }>) => {
  return (
    <main>
      {data.posts.nodes.map((post) => (
        <BlogPostListItem
          key={post.id}
          slug={post.uid}
          data={post.data}
          date={post.first_publication_date}
        />
      ))}
    </main>
  );
};

export const query = graphql`
  query AllBlogPostQuery {
    posts: allPrismicBlogPost {
      nodes {
        id
        uid
        first_publication_date
        data {
          title {
            text
          }
        }
      }
    }
  }
`;

export default BlogPage;

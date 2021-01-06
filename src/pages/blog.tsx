import { graphql, PageProps } from "gatsby";
import React from "react";
import BlogPostListItem from "../components/BlogPostListItem";
import PageHeader from "../components/PageHeader";
import { Container } from "../components/ui/components";
import { BlogPostType, PrimsicAllQueryType } from "../types";

const BlogPage = ({
  data,
}: PageProps<{ posts: PrimsicAllQueryType<BlogPostType> }>) => {
  return (
    <>
      <PageHeader title="Blog" />
      <Container>
        {data.posts.nodes.map((post) => (
          <BlogPostListItem
            key={post.id}
            slug={post.uid}
            data={post.data}
            date={post.first_publication_date}
            tags={post.tags}
          />
        ))}
      </Container>
    </>
  );
};

export const query = graphql`
  query AllBlogPostQuery {
    posts: allPrismicBlogPost {
      nodes {
        id
        uid
        tags
        first_publication_date
        data {
          title {
            text
          }
          content {
            text
          }
        }
      }
    }
  }
`;

export default BlogPage;

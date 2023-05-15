module.exports = `#graphql
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Blog {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
    ownerId: ID!
  }

  type BlogResult {
    errors: [String]
    blog: Blog
  }

  type BlogsResult {
    errors: [String]
    blogs: [Blog]
  }

  type InsertResult {
    errors: [String]
    id: ID
  }

  type TokenResult {
    errors: [String]
    token: String
  }

  type Query {
    blogs: BlogsResult!
    blog(blogId: ID!): BlogResult!
  }

  type Mutation {
    createBlog(title: String!, description: String!): InsertResult!
    createUser(email: String!, password: String!): InsertResult!
    createToken(email: String!, password: String!): TokenResult!
  }

  type Subscription {
    reviewBlog(token: String!): InsertResult!
  }
`;

module.exports = resolvers = {
  Query: {
    blogs: () => ({
      errors: null,
      blogs: [
        {
          id: "1",
          title: "Dummy title",
          description: "Dummy description",
          completed: false,
          ownerId: "1",
        },
      ],
    }),
    blog: () => ({
      errors: null,
      blog: {
        id: "1",
        title: "Dummy title",
        description: "Dummy description",
        completed: false,
        ownerId: "1",
      },
    }),
  },
  Mutation: {
    createBlog: () => ({
      errors: null,
      id: "1",
    }),
    createUser: () => ({
      errors: null,
      id: "1",
    }),
    createToken: () => ({
      errors: null,
      token: "dummy_token",
    }),
  },
  Subscription: {
    reviewBlog: {
      subscribe: () => ({
        errors: null,
        id: "1",
      }),
    },
  },
  Blog: {
    id: () => "1",
    title: () => "Dummy title",
    description: () => "Dummy description",
    completed: () => false,
    ownerId: () => "1",
  },
  User: {
    id: () => "1",
    email: () => "dummy@mail.com",
    password: () => "dummy_password",
  },
  BlogResult: {
    errors: () => null,
    blog: () => ({
      id: "1",
      title: "Dummy title",
      description: "Dummy description",
      completed: false,
      ownerId: "1",
    }),
  },
  BlogsResult: {
    errors: () => null,
    blogs: () => [
      {
        id: "1",
        title: "Dummy title",
        description: "Dummy description",
        completed: false,
        ownerId: "1",
      },
    ],
  },
  InsertResult: {
    errors: () => null,
    id: () => "1",
  },
  TokenResult: {
    errors: () => null,
    token: () => "dummy_token",
  },
};

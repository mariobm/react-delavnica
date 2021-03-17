const { ApolloServer, PubSub } = require('apollo-server');

const messages = []

const typeDefs = `
  type Message {
      id: ID!
      user: String!
      msg: String!
  }

  type Mutation {
      postMessage(user: String!, msg: String!): ID!
  }

  type Query {
      messages: [Message!]
  }

  type Subscription {
      messages: [Message!]
  }
`

const subscribers = [];

const onMessageUpdate = (fn) => subscribers.push(fn);

const resolvers = {
    Query: {
        messages: () => messages
    },

    Mutation: {
        postMessage: (parent, { user, msg }) => {
            const id = messages.length;
            messages.push({ id, user, msg })
            subscribers.forEach(sub => sub());
            return id;
        } 
    },

    Subscription: {
        messages: {
            subscribe: (parent, args, { pubsub }) => {
                const channel = Math.random().toString(36).slice(2, 15);
                onMessageUpdate(() => pubsub.publish(channel, { messages }));
                setTimeout(() => pubsub.publish(channel, { messages }), 0);
                return pubsub.asyncIterator(channel);
            }
        }
    }
}


const pubsub = new PubSub();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { pubsub },
    subscriptions: {
        path: '/subscriptions'
    }
});

server.listen().then(({url}) => console.log('Listening at: ' + url))